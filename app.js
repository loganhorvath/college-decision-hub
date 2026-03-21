/* ==========================================================================
   HOME PAGE — app.js
   Preferences popup, dynamic scoring, immersive carousel, comparisons, verdicts
   ========================================================================== */

/* ---- Active user weights (mutable — set by popup or localStorage) ---- */
let activeWeights = { ...defaultWeights };

/* ---- Preference Popup ---- */
function initPreferencesPopup() {
  const overlay = document.getElementById('prefsOverlay');
  const saveBtn = document.getElementById('prefsSave');
  const resetBtn = document.getElementById('prefsReset');
  const openBtn = document.getElementById('openPrefs');
  if (!overlay) return;

  // Sync sliders to weights object
  function syncSlidersToWeights(weights) {
    Object.keys(weights).forEach(key => {
      const slider = document.getElementById('pref-' + key);
      const valEl = document.getElementById('prefVal-' + key);
      if (slider) { slider.value = weights[key]; }
      if (valEl) { valEl.textContent = weights[key]; }
    });
  }

  // Read sliders into weights object
  function readSlidersToWeights() {
    const w = {};
    Object.keys(defaultWeights).forEach(key => {
      const slider = document.getElementById('pref-' + key);
      w[key] = slider ? parseInt(slider.value) : defaultWeights[key];
    });
    return w;
  }

  // Live update value display as slider moves
  document.querySelectorAll('.pref-range').forEach(slider => {
    slider.addEventListener('input', () => {
      const key = slider.id.replace('pref-', '');
      const valEl = document.getElementById('prefVal-' + key);
      if (valEl) valEl.textContent = slider.value;
    });
  });

  // Load saved weights or use defaults
  const saved = loadWeights();
  if (saved) {
    activeWeights = { ...defaultWeights, ...saved };
  }
  syncSlidersToWeights(activeWeights);

  // Always start with popup hidden; user can open via ⚙️ button
  overlay.classList.add('hidden');

  // Save & close
  saveBtn.addEventListener('click', () => {
    activeWeights = readSlidersToWeights();
    saveWeights(activeWeights);
    markPreferencesSeen();
    overlay.classList.add('hidden');
    recalculateEverything();
  });

  // Reset to defaults
  resetBtn.addEventListener('click', () => {
    syncSlidersToWeights(defaultWeights);
  });

  // Reopen popup
  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      syncSlidersToWeights(activeWeights);
      overlay.classList.remove('hidden');
    });
  }

  // Close on overlay click (outside modal)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      activeWeights = readSlidersToWeights();
      saveWeights(activeWeights);
      markPreferencesSeen();
      overlay.classList.add('hidden');
      recalculateEverything();
    }
  });
}

/* ---- Recalculate all dynamic sections ---- */
function recalculateEverything() {
  applyDynamicScores();
  renderSchoolCards();
  renderComparison();
  renderVerdict();
}

/* Apply dynamic fit scores to the schools array */
function applyDynamicScores() {
  const scores = computeFitScores(activeWeights);
  schools.forEach(s => {
    s.verdictScore = scores[s.id] || 50;
  });
  // Recompute ranks
  const sorted = [...schools].sort((a, b) => b.verdictScore - a.verdictScore);
  sorted.forEach((s, i) => { s.verdictRank = i + 1; });
}

/* ---- Intersection Observer for scroll-reveal animations ---- */
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}

/* ---- Active nav tab highlighting on scroll ---- */
function initNavHighlight() {
  const sections = document.querySelectorAll('.section[id]');
  const navTabs = document.querySelectorAll('.nav-tab');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navTabs.forEach(tab => {
          tab.classList.toggle('active', tab.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   IMMERSIVE CAROUSEL — Apple Watch inspired
   Infinite loop, center-focused, 3D depth, ambient color theming
   ========================================================================== */
function renderSchoolCards() {
  const track = document.getElementById('schoolCardsGrid');
  if (!track) return;
  const sorted = [...schools].sort((a, b) => a.verdictRank - b.verdictRank);

  track.innerHTML = sorted.map((s, idx) => {
    const scoreColor = s.verdictScore >= 80 ? 'var(--green)' : s.verdictScore >= 60 ? 'var(--amber)' : 'var(--red)';
    return `
      <a href="school.html?id=${s.id}" class="school-card" data-color="${s.color}" data-dot="${s.dot || s.color}" data-index="${idx}">
        <div class="school-card-top">
          <div class="school-card-icon" style="background:${s.color}">${s.shortName.slice(0, 2).toUpperCase()}</div>
          <div class="school-card-score" style="color:${scoreColor}">${s.verdictScore}<small>/100</small></div>
        </div>
        <h3 class="school-card-name">${s.shortName}</h3>
        <p class="school-card-tagline">${s.tagline}</p>
        <div class="school-card-stats">
          <span>#${s.engineering} Eng</span>
          <span>${s.acceptance}% Accept</span>
          <span>$${(s.cost / 1000).toFixed(0)}K</span>
        </div>
        <div class="school-card-arrow">View Full Profile →</div>
      </a>`;
  }).join('');

  initImmersiveCarousel(sorted);
}

function initImmersiveCarousel(schoolData) {
  const stage = document.getElementById('carouselStage');
  const track = document.getElementById('schoolCardsGrid');
  const glow = document.getElementById('carouselGlow');
  if (!stage || !track) return;

  const cards = Array.from(track.querySelectorAll('.school-card'));
  const totalCards = cards.length;
  if (totalCards === 0) return;

  // State
  let currentCenter = 0;       // Floating point center position (visual, lerped)
  let targetCenter = 0;        // Where we want to be
  let velocity = 0;
  let isPointerDown = false;
  let pointerStartX = 0;
  let pointerLastX = 0;
  let pointerLastTime = 0;
  let dragOffset = 0;
  let dragStartCenter = 0;     // center position when drag began
  let animFrame = null;
  let lastActiveIndex = -1;

  // Measurements
  function getCardWidth() {
    const w = window.innerWidth;
    if (w <= 520) return w * 0.82;
    if (w <= 768) return 320;
    if (w <= 1100) return 340;
    return 360;
  }

  function getGap() {
    return window.innerWidth <= 520 ? 16 : 24;
  }

  function getStep() {
    return getCardWidth() + getGap();
  }

  // Wrap index to [0, totalCards)
  function wrap(val) {
    return ((val % totalCards) + totalCards) % totalCards;
  }

  // Layout cards in a centered ring
  function layoutCards() {
    const step = getStep();
    const cardW = getCardWidth();
    const stageW = stage.offsetWidth;
    const centerX = stageW / 2;

    cards.forEach((card, i) => {
      // Distance from the current center (wrapping around)
      let diff = i - currentCenter;
      // Wrap to nearest path (for infinite loop feel)
      if (diff > totalCards / 2) diff -= totalCards;
      if (diff < -totalCards / 2) diff += totalCards;

      const x = centerX + diff * step - cardW / 2;
      const absDiff = Math.abs(diff);

      // 3D transforms — scale down + push back + slight rotation for depth
      const scale = Math.max(0.65, 1 - absDiff * 0.12);
      const translateZ = -absDiff * 60;
      const rotateY = diff * -2.5;
      const opacity = Math.max(0.25, 1 - absDiff * 0.28);
      const blur = absDiff > 0.6 ? Math.min(absDiff * 2.5, 6) : 0;

      card.style.cssText = `
        width: ${cardW}px;
        position: absolute;
        left: ${x}px;
        top: 50%;
        transform: translateY(-50%) perspective(1200px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale});
        opacity: ${opacity};
        filter: blur(${blur}px);
        z-index: ${100 - Math.round(absDiff * 10)};
        transition: none;
        pointer-events: ${absDiff < 0.6 ? 'auto' : 'none'};
      `;

      // Active card styling
      if (absDiff < 0.5) {
        card.classList.add('carousel-active');
      } else {
        card.classList.remove('carousel-active');
      }
    });

    // Update ambient glow
    const activeIdx = Math.round(wrap(currentCenter));
    if (activeIdx !== lastActiveIndex) {
      lastActiveIndex = activeIdx;
      const activeCard = cards[activeIdx];
      if (activeCard && glow) {
        const color = activeCard.dataset.dot || activeCard.dataset.color;
        glow.style.background = `radial-gradient(ellipse 60% 80% at 50% 60%, ${hexToRGBA(color, 0.18)}, transparent 70%)`;
        // Set the CSS custom property for theming
        document.documentElement.style.setProperty('--active-school-color', color);
        document.documentElement.style.setProperty('--active-school-glow', hexToRGBA(color, 0.12));
      }
    }
  }

  // Physics animation loop — heavy, weighted feel
  function animate() {
    if (!isPointerDown) {
      // Apply velocity with heavy friction
      targetCenter += velocity;
      velocity *= 0.85; // heavy friction — decays fast

      // Strong snap: always pull hard toward nearest card
      const nearest = Math.round(targetCenter);
      const snapForce = (nearest - targetCenter) * 0.25; // strong spring
      targetCenter += snapForce;

      // Kill tiny movements
      if (Math.abs(velocity) < 0.0005 && Math.abs(targetCenter - nearest) < 0.0005) {
        targetCenter = nearest;
        velocity = 0;
      }

      // Normalize to prevent drift — keep values in [0, totalCards) range
      // Only normalize when settled (no velocity) to avoid visual jumps
      if (velocity === 0 && targetCenter === nearest) {
        const wrapped = wrap(targetCenter);
        const shift = wrapped - targetCenter;
        targetCenter = wrapped;
        currentCenter += shift;
      }

      // Smooth visual follow — weighted lerp
      currentCenter += (targetCenter - currentCenter) * 0.14;
    } else {
      // While dragging, follow directly but with slight weight
      currentCenter += (targetCenter - currentCenter) * 0.3;
    }

    layoutCards();
    animFrame = requestAnimationFrame(animate);
  }

  // Pointer events (unified touch + mouse) — weighted drag
  function onPointerDown(e) {
    // Don't start drag from nav zone buttons
    if (e.target.closest('.carousel-zone')) return;
    isPointerDown = true;
    velocity = 0;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    pointerStartX = clientX;
    pointerLastX = clientX;
    pointerLastTime = Date.now();
    dragOffset = 0;
    dragStartCenter = currentCenter;
    stage.classList.add('grabbing');
    if (!e.touches) e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isPointerDown) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const now = Date.now();
    const dx = clientX - pointerLastX;
    const dt = Math.max(now - pointerLastTime, 1);

    // Track velocity for release momentum (dampened)
    velocity = -(dx / getStep()) * 0.5;
    pointerLastX = clientX;
    pointerLastTime = now;

    const totalDx = clientX - pointerStartX;
    // Heavier drag: divide by more to require bigger gesture
    targetCenter = dragStartCenter - totalDx / (getStep() * 1.2);
    dragOffset = totalDx;
  }

  function onPointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    stage.classList.remove('grabbing');

    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const totalDx = clientX - pointerStartX;

    // Flick: only give moderate momentum, capped to ~1.5 cards
    if (Math.abs(totalDx) > 20) {
      velocity = Math.max(-0.8, Math.min(0.8, velocity * 2));
    } else {
      velocity = 0;
    }

    // Wrap targetCenter to keep numbers sane
    targetCenter = wrap(targetCenter);
    currentCenter = wrap(currentCenter);
  }

  // Mouse events
  stage.addEventListener('mousedown', onPointerDown);
  document.addEventListener('mousemove', onPointerMove);
  document.addEventListener('mouseup', onPointerUp);

  // Touch events
  stage.addEventListener('touchstart', onPointerDown, { passive: true });
  stage.addEventListener('touchmove', onPointerMove, { passive: true });
  stage.addEventListener('touchend', onPointerUp, { passive: true });

  // Wheel scroll — step one card at a time with debounce
  let wheelLocked = false;
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (wheelLocked) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 5) return; // ignore tiny scroll

    // Step exactly one card in the scroll direction
    const direction = delta > 0 ? 1 : -1;
    targetCenter = Math.round(targetCenter) + direction;
    velocity = 0;

    // Lock briefly so one scroll gesture = one card
    wheelLocked = true;
    setTimeout(() => { wheelLocked = false; }, 320);
  }, { passive: false });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { targetCenter += 1; velocity = 0; }
    if (e.key === 'ArrowLeft') { targetCenter -= 1; velocity = 0; }
  });

  // Left / Right zone buttons — step one card
  const leftBtn = document.getElementById('carouselLeft');
  const rightBtn = document.getElementById('carouselRight');
  if (leftBtn) {
    leftBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      targetCenter = Math.round(targetCenter) - 1;
      velocity = 0;
    });
  }
  if (rightBtn) {
    rightBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      targetCenter = Math.round(targetCenter) + 1;
      velocity = 0;
    });
  }

  // Prevent link clicks during drag
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (Math.abs(dragOffset) > 8) {
        e.preventDefault();
      }
    });
  });

  // Resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutCards, 100);
  });

  // Start
  layoutCards();
  animate();
}

// Utility: hex to rgba
function hexToRGBA(hex, alpha) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ---- Average Climate Section ---- */
function renderClimate() {
  const grid = document.getElementById('climateGrid');
  if (!grid) return;
  const sorted = [...schools].sort((a, b) => a.verdictRank - b.verdictRank);

  grid.innerHTML = sorted.map(s => {
    const c = climateData[s.id];
    if (!c) return '';
    const tempBar = ((c.avgHigh - 40) / 60 * 100).toFixed(0);
    const lowBar = ((c.avgLow - 20) / 60 * 100).toFixed(0);
    return `
      <div class="climate-card">
        <div class="climate-card-header">
          <span class="climate-dot" style="background:${s.dot || s.color}"></span>
          <span class="climate-school">${s.shortName}</span>
        </div>
        <div class="climate-temps">
          <div class="climate-temp-row">
            <span class="climate-label">Avg High</span>
            <div class="climate-bar-track">
              <div class="climate-bar-fill climate-bar-warm" style="width:${tempBar}%"></div>
            </div>
            <span class="climate-value">${c.avgHigh}°F</span>
          </div>
          <div class="climate-temp-row">
            <span class="climate-label">Avg Low</span>
            <div class="climate-bar-track">
              <div class="climate-bar-fill climate-bar-cool" style="width:${lowBar}%"></div>
            </div>
            <span class="climate-value">${c.avgLow}°F</span>
          </div>
        </div>
        <div class="climate-details">
          <div class="climate-detail">
            <span class="climate-detail-icon">☀️</span>
            <span>${c.sunny} sunny days</span>
          </div>
          <div class="climate-detail">
            <span class="climate-detail-icon">🌧</span>
            <span>${c.avgRain}" rain/yr</span>
          </div>
          <div class="climate-detail">
            <span class="climate-detail-icon">❄️</span>
            <span>${c.snow}</span>
          </div>
          <div class="climate-detail">
            <span class="climate-detail-icon">💧</span>
            <span>${c.humidity} humidity</span>
          </div>
        </div>
        <p class="climate-summary">${c.summary}</p>
      </div>`;
  }).join('');
}

/* ---- Sortable Rankings Table ---- */
let sortKey = 'verdictRank';
let sortAsc = true;

function renderTable() {
  const tbody = document.getElementById('tableBody');
  if (!tbody) return;
  const sorted = [...schools].sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (sortKey === 'name') {
      va = a.shortName.toLowerCase();
      vb = b.shortName.toLowerCase();
    }
    if (typeof va === 'string') {
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    return sortAsc ? va - vb : vb - va;
  });
  tbody.innerHTML = sorted.map(s => {
    const isTop = s.verdictScore >= 80;
    return `
      <tr class="${isTop ? 'row-highlight' : ''}">
        <td>
          <a href="school.html?id=${s.id}" class="table-school-link">
            <span class="table-dot" style="background:${s.dot || s.color}"></span>${s.shortName}
          </a>
        </td>
        <td>#${s.overall}</td>
        <td>#${s.engineering}</td>
        <td>${s.acceptance}%</td>
        <td>${s.population.toLocaleString()}</td>
        <td>$${s.cost.toLocaleString()}</td>
      </tr>`;
  }).join('');
}

function initTableSort() {
  const ths = document.querySelectorAll('#dataTable th[data-key]');
  ths.forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.key;
      if (sortKey === key) { sortAsc = !sortAsc; }
      else { sortKey = key; sortAsc = true; }
      ths.forEach(t => t.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(sortAsc ? 'sorted-asc' : 'sorted-desc');
      renderTable();
    });
  });
}

/* ---- Head-to-Head Comparison Cards ---- */
function renderComparison() {
  const container = document.getElementById('comparisonCards');
  if (!container) return;

  const totalWeight = Object.values(activeWeights).reduce((a, b) => a + b, 0) || 1;
  const pct = (key) => Math.round(activeWeights[key] / totalWeight * 100);

  const comparisons = [
    {
      title: "🎓 Engineering Program Quality",
      weight: `${pct('engineering')}% weight`,
      rows: schools.map(s => ({
        name: s.shortName,
        color: s.dot || s.color,
        value: `#${s.engineering}`,
        note: s.id === 'ucsc' ? 'Robotics Eng. (direct admit)' : '',
        raw: s.engineering
      })).sort((a, b) => a.raw - b.raw)
    },
    {
      title: "🤝 Community & Size Fit",
      weight: `${pct('community')}% weight`,
      rows: [
        { name: "UC Davis", color: "#FFBF00", value: "★★★★★", note: "32K — friendly bike culture, ideal size, welcoming vibe" },
        { name: "Auburn", color: "#DD550C", value: "★★★★☆", note: "28K — amazing 'Auburn Family' culture, close to 30K" },
        { name: "UC San Diego", color: "#00629B", value: "★★★★☆", note: "35K — college system helps, near ideal size" },
        { name: "Penn State", color: "#1E407C", value: "★★★☆☆", note: "43K — great spirit but oversized, need to find your niche" },
        { name: "Texas A&M", color: "#500000", value: "★★★☆☆", note: "61K — incredible culture but 2x your ideal size" },
        { name: "UC Santa Cruz", color: "#FDC700", value: "★★★☆☆", note: "18K — residential colleges, but housing crisis & undersized" },
        { name: "Miami", color: "#F47321", value: "★★★☆☆", note: "13K — residential colleges, but small & party-heavy" },
        { name: "Case Western", color: "#0a304e", value: "★★☆☆☆", note: "6.5K — great culture but way too small for your preference" }
      ]
    },
    {
      title: "💰 Total 4-Year Cost",
      weight: `${pct('cost')}% weight`,
      rows: schools.map(s => ({
        name: s.shortName,
        color: s.dot || s.color,
        value: `$${s.cost.toLocaleString()}`,
        raw: s.cost
      })).sort((a, b) => a.raw - b.raw)
    },
    {
      title: "🌤 Quality of Life",
      weight: `${pct('qualityOfLife')}% weight`,
      rows: [
        { name: "UC San Diego", color: "#00629B", value: "★★★★★", note: "La Jolla beach, near-perfect weather year-round" },
        { name: "Miami", color: "#F47321", value: "★★★★★", note: "Coral Gables, tropical climate, Miami nightlife" },
        { name: "UC Santa Cruz", color: "#FDC700", value: "★★★★☆", note: "Redwood forest campus, but severe housing crisis" },
        { name: "UC Davis", color: "#FFBF00", value: "★★★★☆", note: "Charming bike-friendly town, hot summers" },
        { name: "Auburn", color: "#DD550C", value: "★★★☆☆", note: "Lovely small Southern town, but isolated" },
        { name: "Texas A&M", color: "#500000", value: "★★★☆☆", note: "College Station is remote, brutal summer heat" },
        { name: "Penn State", color: "#1E407C", value: "★★☆☆☆", note: "Harsh winters, isolated Happy Valley" },
        { name: "Case Western", color: "#0a304e", value: "★★☆☆☆", note: "Cleveland lake-effect winters, gray skies" }
      ]
    },
    {
      title: "🌍 Student Diversity",
      weight: `${pct('diversity')}% weight`,
      rows: Object.entries(diversityData)
        .map(([id, d]) => {
          const s = schools.find(sc => sc.id === id);
          return { name: s.shortName, color: s.dot || s.color, value: d.rating, note: d.note, raw: d.rating.split('★').length - 1 };
        })
        .sort((a, b) => b.raw - a.raw)
    },
    {
      title: "🏠 Dorm Quality",
      weight: `${pct('dormQuality')}% weight`,
      rows: Object.entries(dormData)
        .map(([id, d]) => {
          const s = schools.find(sc => sc.id === id);
          return { name: s.shortName, color: s.dot || s.color, value: d.rating, note: d.note, raw: d.rating.split('★').length - 1 };
        })
        .sort((a, b) => b.raw - a.raw)
    },
  ];

  container.innerHTML = comparisons.map(comp => `
    <div class="comparison-card">
      <div class="comparison-header">
        <h3>${comp.title}</h3>
        <span class="comparison-weight">${comp.weight}</span>
      </div>
      <div class="comparison-rows">
        ${comp.rows.map((r, i) => `
          <div class="comparison-row ${i === 0 ? 'comparison-row-top' : ''}">
            <span class="comparison-rank">${i + 1}</span>
            <span class="table-dot" style="background:${r.color}"></span>
            <span class="comparison-name">${r.name}</span>
            <span class="comparison-value">${r.value}</span>
            ${r.note ? `<span class="comparison-note">${r.note}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ---- Final Verdict Cards ---- */
function renderVerdict() {
  const grid = document.getElementById('verdictGrid');
  const bottomLine = document.getElementById('bottomLine');
  if (!grid) return;
  const sorted = [...schools].sort((a, b) => a.verdictRank - b.verdictRank);

  grid.innerHTML = sorted.map(s => {
    const v = verdicts[s.id];
    const scoreColor = s.verdictScore >= 80 ? 'var(--green)' : s.verdictScore >= 60 ? 'var(--amber)' : 'var(--red)';
    return `
      <div class="verdict-card ${s.verdictRank === 1 ? 'verdict-top' : ''}">
        ${s.verdictRank === 1 ? '<div class="verdict-crown">👑 Top Pick</div>' : ''}
        <div class="verdict-card-header">
          <div class="verdict-icon" style="background:${s.color}">${s.shortName.slice(0, 2).toUpperCase()}</div>
          <div>
            <h3>${s.shortName}</h3>
            <p class="verdict-rank">#${s.verdictRank} Overall Fit</p>
          </div>
          <div class="verdict-score" style="color:${scoreColor}">${s.verdictScore}<small>/100</small></div>
        </div>
        <div class="verdict-bar-track">
          <div class="verdict-bar-fill" style="width:${s.verdictScore}%;background:${s.color}"></div>
        </div>
        <div class="verdict-breakdown">
          ${Object.keys(activeWeights).map(key => {
            const sc = schoolScores[s.id];
            const val = sc ? sc[key] : 0;
            const labels = { engineering: '🎓 Eng', community: '🤝 Community', cost: '💰 Cost', qualityOfLife: '🌤 QoL', diversity: '🌍 Diversity', dormQuality: '🏠 Dorms' };
            if (!activeWeights[key]) return '';
            return `<div class="verdict-breakdown-item">
              <span class="verdict-breakdown-label">${labels[key] || key}</span>
              <div class="verdict-mini-bar"><div class="verdict-mini-fill" style="width:${val * 10}%;background:${s.color}"></div></div>
              <span class="verdict-breakdown-val">${val}/10</span>
            </div>`;
          }).join('')}
        </div>
        <div class="verdict-details">
          <p class="verdict-pro">${v.pros}</p>
          <p class="verdict-con">${v.cons}</p>
        </div>
        <a href="school.html?id=${s.id}" class="verdict-link">View Full Profile →</a>
      </div>`;
  }).join('');

  if (bottomLine) {
    const top = sorted[0];
    bottomLine.innerHTML = `
      <div class="bottom-line-inner">
        <h3>🎯 The Bottom Line</h3>
        <p><strong style="color:${top.color}">${top.name}</strong> ranks as the #1 overall fit with a score of <strong>${top.verdictScore}/100</strong> based on your personal preference weights.
        Adjust your weights with the <strong>⚙️ My Weights</strong> button to see how rankings change.</p>
        <a href="school.html?id=${top.id}" class="verdict-cta">Explore ${top.shortName} in Detail →</a>
      </div>`;
  }
}

/* ---- Initialize Everything ---- */
document.addEventListener('DOMContentLoaded', () => {
  initPreferencesPopup();
  applyDynamicScores();
  renderSchoolCards();
  renderClimate();
  renderTable();
  initTableSort();
  renderComparison();
  renderVerdict();
  initRevealAnimations();
  initNavHighlight();
});
