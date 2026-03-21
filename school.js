/* ==========================================================================
   SCHOOL PAGE — school.js
   Renders individual school profiles with Fiske Guide content
   Uses dynamic fit scores from saved user preferences
   ========================================================================== */

const params = new URLSearchParams(window.location.search);
const schoolId = params.get('id');

// Apply dynamic scores from saved weights before rendering
(function applyScores() {
  const saved = loadWeights();
  const weights = saved ? { ...defaultWeights, ...saved } : { ...defaultWeights };
  const scores = computeFitScores(weights);
  schools.forEach(s => { s.verdictScore = scores[s.id] || 50; });
  const sorted = [...schools].sort((a, b) => b.verdictScore - a.verdictScore);
  sorted.forEach((s, i) => { s.verdictRank = i + 1; });
})();

const school = schools.find(s => s.id === schoolId);

if (!school) {
  document.body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;text-align:center;padding:24px;">
      <h1 style="font-size:2rem;color:#1a1d2e;">School Not Found</h1>
      <p style="color:#7a7f99;">The requested school doesn't exist.</p>
      <a href="index.html" style="color:#6c63ff;text-decoration:underline;font-weight:600;">← Back to All Schools</a>
    </div>`;
} else {
  document.addEventListener('DOMContentLoaded', initSchoolPage);
}

function initSchoolPage() {
  /* Page title */
  document.title = `${school.shortName} — College Decision Hub`;

  /* Topbar */
  document.getElementById('topbarTitle').textContent = school.shortName;

  /* Hero */
  const heroIcon = document.getElementById('heroIcon');
  heroIcon.style.background = school.color;
  heroIcon.textContent = school.shortName.slice(0, 2).toUpperCase();

  document.getElementById('heroName').textContent = school.name;
  document.getElementById('heroTagline').textContent = school.tagline;

  const scoreColor = school.verdictScore >= 80 ? 'var(--green)' : school.verdictScore >= 60 ? 'var(--amber)' : 'var(--red)';

  document.getElementById('heroStats').innerHTML = `
    <div class="hero-stat">
      <div class="hero-stat-value">#${school.overall}</div>
      <div class="hero-stat-label">Overall Rank</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">#${school.engineering}</div>
      <div class="hero-stat-label">Engineering</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">${school.acceptance}%</div>
      <div class="hero-stat-label">Acceptance</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">${school.population.toLocaleString()}</div>
      <div class="hero-stat-label">Undergrads</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">$${(school.cost / 1000).toFixed(0)}K</div>
      <div class="hero-stat-label">4-Year Cost</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value" style="color:${scoreColor}">${school.verdictScore}<small>/100</small></div>
      <div class="hero-stat-label">Fit Score</div>
    </div>
  `;

  /* Profile sections */
  const sections = [
    { icon: "📐", title: "Academic & Career", tag: "academic", color: "var(--blue)", content: school.academic },
    { icon: "🤝", title: "Community & Size", tag: "community", color: "var(--green)", content: school.community },
    { icon: "🎭", title: "Culture & Greek Life", tag: "culture", color: "var(--amber)", content: school.culture },
    { icon: "🌍", title: "Environment & Quality of Life", tag: "environment", color: "var(--accent)", content: school.environment }
  ];

  document.getElementById('profileSections').innerHTML = sections.map(sec => `
    <div class="profile-section-card">
      <div class="profile-section-header">
        <span class="profile-section-icon">${sec.icon}</span>
        <h3>${sec.title}</h3>
        <span class="profile-section-tag" style="background:${sec.color}18;color:${sec.color}">${sec.tag}</span>
      </div>
      <div class="profile-section-body">${sec.content}</div>
    </div>
  `).join('');

  /* Fiske Guide */
  document.getElementById('fiskeName').textContent = school.name;
  loadFiskeGuide();

  /* Verdict card */
  const v = verdicts[school.id];
  document.getElementById('schoolVerdictCard').innerHTML = `
    <div class="school-verdict-inner">
      <div class="school-verdict-score" style="color:${scoreColor}">
        ${school.verdictScore}<small>/100</small>
      </div>
      <div class="school-verdict-bar-track">
        <div class="verdict-bar-fill" style="width:${school.verdictScore}%;background:${school.color || school.dot}"></div>
      </div>
      <div class="school-verdict-text">
        <p class="verdict-pro">${v.pros}</p>
        <p class="verdict-con">${v.cons}</p>
      </div>
    </div>
  `;

  /* Other schools nav */
  const others = schools.filter(s => s.id !== school.id).sort((a, b) => a.verdictRank - b.verdictRank);
  document.getElementById('schoolNavGrid').innerHTML = others.map(s => `
    <a href="school.html?id=${s.id}" class="school-nav-card">
      <div class="school-nav-icon" style="background:${s.color}">${s.shortName.slice(0, 2).toUpperCase()}</div>
      <div class="school-nav-info">
        <div class="school-nav-name">${s.shortName}</div>
        <div class="school-nav-rank">#${s.engineering} Engineering · ${s.verdictScore}/100</div>
      </div>
      <div class="school-nav-arrow">→</div>
    </a>
  `).join('');

  /* Weather */
  loadSchoolWeather();
}

/* ---- Tab Switching ---- */
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tabId)
  );
  document.querySelectorAll('.tab-content').forEach(tc =>
    tc.classList.toggle('active', tc.id === 'tab-' + tabId)
  );
}

/* ---- Load Fiske Guide ---- */
async function loadFiskeGuide() {
  const body = document.getElementById('fiskeBody');
  try {
    const resp = await fetch(school.fiske);
    if (!resp.ok) throw new Error('File not found');
    const text = await resp.text();
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim());
    body.innerHTML = paragraphs.map((p, i) => {
      const trimmed = p.trim();
      if (i === 0) {
        return `<div class="fiske-lead">${trimmed}</div>`;
      }
      return `<p>${trimmed}</p>`;
    }).join('');
  } catch (e) {
    body.innerHTML = `
      <div class="fiske-error">
        <p>⚠️ Unable to load Fiske Guide content.</p>
        <p style="font-size:0.8rem;color:var(--text-dim);margin-top:8px;">
          The file could not be loaded. If running locally, use a local server (e.g. <code>python3 -m http.server</code>).
          On GitHub Pages this should work automatically.
        </p>
      </div>`;
  }
}

/* ---- Load Weather for Single School ---- */
async function loadSchoolWeather() {
  const container = document.getElementById('schoolWeatherContent');
  try {
    const resp = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${school.lat}&longitude=${school.lon}` +
      `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m` +
      `&temperature_unit=celsius&wind_speed_unit=mph`
    );
    const data = await resp.json();
    const cur = data.current;
    const wc = weatherCodes[cur.weather_code] || { icon: "🌡", desc: "Unknown" };
    const tempF = celsiusToFahrenheit(cur.temperature_2m);
    container.innerHTML = `
      <span class="school-weather-icon">${wc.icon}</span>
      <span class="school-weather-temp">${tempF}°F</span>
      <span class="school-weather-desc">${wc.desc}</span>
      <span class="school-weather-sep">·</span>
      <span class="school-weather-detail">💧 ${cur.relative_humidity_2m}% humidity</span>
      <span class="school-weather-sep">·</span>
      <span class="school-weather-detail">💨 ${Math.round(cur.wind_speed_10m)} mph wind</span>
    `;
  } catch (e) {
    container.innerHTML = `<span class="weather-loading">Weather unavailable</span>`;
  }
}
