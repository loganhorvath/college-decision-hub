/* ==========================================================================
   SHARED DATA — schools array, verdicts, weather codes, fiske file mapping
   ========================================================================== */

const schools = [
  {
    id: "auburn",
    name: "Auburn University",
    shortName: "Auburn",
    color: "#0C2340",
    dot: "#DD550C",
    overall: 102,
    engineering: 59,
    acceptance: 46,
    population: 27907,
    cost: 31369,
    lat: 32.5996, lon: -85.4808,
    fiske: "Fiske%20Guide/Auburn.txt",
    verdictScore: 74,
    verdictRank: 5,
    tagline: "Warm Southern charm meets solid engineering in small-town Alabama",
    academic: `<strong>Mechanical Engineering Program:</strong> Auburn's Samuel Ginn College of Engineering is ABET-accredited and ranks #59 nationally. The Mechanical Engineering department benefits from research clusters in aerospace engineering (Auburn has produced 6 NASA astronauts), advanced manufacturing, and vehicle systems. The co-op program is a standout—students earn pay and academic credit in professional engineering roles, often with major employers like Honda Manufacturing (just down the road in Lincoln, AL), Lockheed Martin, and Southern Company.<br><br>
<strong>Career &amp; Alumni:</strong> Auburn's engineering career fairs are well-attended by Southeast employers. The "Auburn Family" alumni network is fiercely loyal and especially powerful across the South—Birmingham, Atlanta, Huntsville (a massive aerospace/defense hub), and Houston. Starting MechE salaries average ~$68–72K. The alumni network is deep but geographically concentrated in the Southeast. If you want to work in Alabama, Georgia, or the Gulf South, Auburn is a golden ticket. National reach is more limited.<br><br>
<strong>Key advantage:</strong> The co-op program provides real industry experience before graduation, and Huntsville, AL (NASA Marshall Space Flight Center, Boeing, Raytheon) is a 3.5-hour drive away and recruits heavily from Auburn.`,
    community: `<strong>Size &amp; Feel:</strong> With ~28,000 undergrads, Auburn is large but has a uniquely tight-knit, family-like culture that is repeatedly emphasized by students. The Fiske Guide notes: "It truly is a family atmosphere. We are here to learn and help each other." The phrase "Auburn Family" is not just a slogan—students, faculty, and townspeople actively live it.<br><br>
<strong>Small-School Transition:</strong> This is one of the <em>best</em> options for someone from a small school. Auburn's culture is built on hospitality—people say "hello" to strangers, hold doors, and genuinely look out for one another. The town of Auburn literally grew up around the university, so the campus <em>is</em> the town. Joining a living/learning community as a freshman (which Auburn recommends) will immediately connect you with people who share your interests. Camp War Eagle orientation (a two-day immersive program) also helps enormously. The biggest adjustment will be the sheer physical size of campus (2,000 acres), but the social transition should be one of the smoothest on this list.<br><br>
<strong>How to find your tribe:</strong> 1,100+ student organizations, living/learning communities for freshmen, and the SKILL program for academic coaching. Greek life is prominent but not required for a social life. The engineering college itself fosters community through study groups and team projects.`,
    culture: `<strong>General Vibe:</strong> Friendly, conservative, sports-obsessed, and deeply traditional. Football is king—the $14 million scoreboard tells you everything. Game days transform the town into a massive tailgate, described as "family-oriented." The Auburn Creed is a beloved tradition that students take to heart. The campus is in the Deep South Bible Belt: there are 30+ Christian student groups, and the overall tone is conservative and wholesome.<br><br>
<strong>Greek Life:</strong> <em>Very important.</em> 26% of men and 45% of women go Greek—among the highest rates on this list. Greek chapters get priority access to the best dorms. That said, students insist "Social life is great whether you are Greek or not." With 27,000+ students, there's critical mass outside Greek life. But if you <em>don't</em> go Greek, you'll need to be proactive about finding social circles through clubs, intramurals, or engineering organizations.<br><br>
<strong>Traditions:</strong> Hey Day (everyone wears name tags and says "Hey!"), Tiger Walk before football games, Toomer's Corner celebrations after victories. The culture is warm, loyal, and tradition-steeped.`,
    environment: `<strong>Location:</strong> The town of Auburn, AL is the definition of a college town—small, safe, and centered entirely around the university. It's called "the loveliest village of the plain." Population ~65,000 including students. Think charming downtown, affordable restaurants, and a very manageable pace of life. It can feel "claustrophobic" (Fiske's word) for those not from the Deep South—there isn't a major city nearby (Birmingham is 2 hours, Atlanta 1.5 hours).<br><br>
<strong>Safety:</strong> Students report feeling very safe: "I'm never afraid on campus that my things will get stolen or that I will be in danger."<br><br>
<strong>Food &amp; Fun:</strong> The Edge at Central Dining is new and well-reviewed with 9 food stations. Off-campus, the town has solid Southern restaurants and bars. Nightlife is modest—this is not a big-city experience.<br><br>
<strong>Climate:</strong> Hot, humid summers (90°F+), mild winters (40s–50s°F), beautiful springs and falls. You'll experience all four seasons but winter is short and rarely involves snow. Expect thunderstorms in spring/summer. Perfect for anyone who hates cold weather.`,
    climate: { avgHigh: 76, avgLow: 52, avgRain: 55, sunny: 213, humidity: "High", snow: "Trace", summary: "Mild winters, hot summers. Long warm season with thunderstorms in spring." }
  },
  {
    id: "pennstate",
    name: "Penn State (University Park)",
    shortName: "Penn State",
    color: "#041E42",
    dot: "#1E407C",
    overall: 59,
    engineering: 31,
    acceptance: 61,
    population: 42619,
    cost: 56264,
    lat: 40.7982, lon: -77.8599,
    fiske: "Fiske%20Guide/Penn_State.txt",
    verdictScore: 85,
    verdictRank: 2,
    tagline: "Massive school spirit, elite engineering, and the largest alumni network on Earth",
    academic: `<strong>Mechanical Engineering Program:</strong> Penn State's College of Engineering ranks #31 nationally and its MechE program is a powerhouse. With 40,000+ undergrads, the engineering college is enormous and well-funded. Research areas include advanced manufacturing, acoustics and vibrations, energy systems, and materials science. The Schreyer Honors College (1,800 students) offers a way to get a small-college academic experience within the larger university—with priority registration, smaller classes, and a required honors thesis.<br><br>
<strong>Career &amp; Alumni:</strong> This is Penn State's superpower. The Penn State alumni network is often cited as the largest dues-paying alumni association in the world (~700,000+ members). Engineering career fairs are massive, drawing recruiters from Boeing, Lockheed Martin, GE, ExxonMobil, Tesla, and hundreds of others. The network extends nationwide—Penn State grads hire Penn State grads. MechE starting salaries average ~$72–78K. Co-op and internship programs are robust. <br><br>
<strong>Key advantage:</strong> No school on this list can match Penn State's combination of a top-tier engineering program and a jaw-droppingly large, loyal alumni network. If career networking and job placement are priorities, Penn State is elite.`,
    community: `<strong>Size &amp; Feel:</strong> With 42,600+ full-time undergrads, Penn State is <em>enormous</em>. The Fiske Guide calls it a "student body the size of a small city." This is the biggest culture shock risk for someone from a small school. The sheer scale can feel overwhelming—especially in intro-level lectures of 400+ students.<br><br>
<strong>Small-School Transition:</strong> The key to thriving here is to find your "small school within the big school." Penn State knows this and offers several mechanisms: the LEAP program (Learning Edge Academic Program) groups freshmen into teams who take classes and live together—essentially creating a small cohort within the mass. The Schreyer Honors College is another way to shrink the university to a manageable size. With 1,000+ student organizations, you <em>will</em> find your people—but you have to be proactive.<br><br>
<strong>How to find your tribe:</strong> Join LEAP or a living/learning community as a freshman. Apply to Schreyer Honors if eligible. Join an engineering student org (ASME, SAE, Baja Racing, etc.). Penn State's spirit is legendary—"Imagine a family of 40,000," says one student—but that family feeling comes from <em>shared identity</em> (We Are Penn State!) more than intimate personal connections. You'll feel the spirit at football games but will need clubs and smaller groups for close friendships.`,
    culture: `<strong>General Vibe:</strong> Spirited, social, proud, and sports-obsessed. Penn State's identity revolves around community pride and school spirit. Football Saturdays at Beaver Stadium (107,000 capacity) are a quasi-religious experience. The White Out game is nationally iconic. Students are "active, fun, and open-minded" per the Fiske Guide.<br><br>
<strong>Greek Life:</strong> <em>Significant.</em> 17% of men and 20% of women go Greek. Fraternities historically drove much of the party culture, though the administration has cracked down significantly after past incidents. Greek Chapter Scorecards now track conduct, academics, and community service. There's a rich social scene outside Greek life too—the HUB (campus union) offers nonalcoholic entertainment, and 1,000+ student orgs provide alternatives. The THON Dance Marathon (the largest student-run philanthropy in the world) is a unifying event for the entire campus.<br><br>
<strong>Traditions:</strong> White Out football games, THON, the Lion Shrine, "We Are... Penn State!" chant. This school bleeds blue and white.`,
    environment: `<strong>Location:</strong> State College, PA is an isolated college town (population ~42,000 + students) nestled in the geographic center of Pennsylvania—lovingly called "Happy Valley." It's 3+ hours from Philadelphia and Pittsburgh. The town is charming with restaurants, bars, and cultural events, but it is <em>remote</em>. You won't have a big city to escape to on weekends.<br><br>
<strong>Safety:</strong> State College is generally very safe. Stand for State is a comprehensive bystander intervention program.<br><br>
<strong>Food &amp; Fun:</strong> Dining operates on a point system (pay for what you eat). The town has plenty of restaurants. Outdoor activities abound—skiing, snowboarding, hiking, canoeing, and cabin rentals at Stone Valley.<br><br>
<strong>Climate:</strong> Four distinct seasons with cold, snowy winters (20s–30s°F, regular snowfall), warm summers (80s°F), and gorgeous autumn foliage. Expect 40+ inches of snow per year. If you don't like winter, this is a consideration—it's gray and cold from November through March.`,
    climate: { avgHigh: 55, avgLow: 34, avgRain: 42, sunny: 160, humidity: "Moderate", snow: "44 in", summary: "Cold, snowy winters. Gorgeous fall foliage. Gray Nov–Mar." }
  },
  {
    id: "tamu",
    name: "Texas A&M University",
    shortName: "Texas A&M",
    color: "#500000",
    dot: "#500000",
    overall: 51,
    engineering: 15,
    acceptance: 57,
    population: 60710,
    cost: 16589.85,
    lat: 30.6187, lon: -96.3365,
    fiske: "Fiske%20Guide/A%26M.txt",
    verdictScore: 93,
    verdictRank: 1,
    tagline: "Unbeatable engineering + traditions + the lowest cost on the list = ridiculous value",
    academic: `<strong>Mechanical Engineering Program:</strong> Texas A&M's College of Engineering ranks #15 nationally—the best engineering ranking on this entire list. The MechE department is massive and world-class, with research strengths in energy systems, turbomachinery, robotics, materials, and aerospace. A&M is a Tier 1 research university with $1B+ in annual research expenditures. The University Honors Program offers "priority registration, smaller classes with better professors, and networking with the brightest minds." Undergraduate research is easy to access—"as easy as emailing a professor and starting that conversation."<br><br>
<strong>Career &amp; Alumni:</strong> The Aggie Network is legendary—over 500,000 former students who are famously loyal to hiring fellow Aggies. Texas A&M is a top pipeline to the oil & gas, aerospace, defense, and automotive industries. Major recruiters include ExxonMobil, Shell, Chevron, Boeing, Lockheed Martin, SpaceX, Tesla, and Toyota. Houston (the energy capital of the world) is just 90 minutes away. MechE starting salaries average ~$74–80K. The career fairs are enormous.<br><br>
<strong>Key advantage:</strong> #15 engineering, a massive and loyal alumni network, and a 4-year cost of ~$16,590 (by far the cheapest on this list). The ROI here is virtually unbeatable.`,
    community: `<strong>Size &amp; Feel:</strong> At 60,700+ undergrads, Texas A&M is the largest school on this list and one of the largest in the country. This is a legitimate small city. The 5,200-acre campus is the biggest in the nation.<br><br>
<strong>Small-School Transition:</strong> Despite its staggering size, A&M is famous for feeling like a family. The Fiske Guide says "Coming to Texas A&M is like joining a big family with more than 65,000 full-time members." The "Howdy" culture is real—strangers greet each other constantly. But make no mistake: 60,000+ students is a LOT of people, and it's easy to feel lost if you don't actively build community. The critical advice from A&M students: <em>"It is imperative that you join a student organization in order to make A&M feel a little smaller."</em><br><br>
<strong>How to find your tribe:</strong> 1,100+ student organizations. Living/learning communities for freshmen (highly recommended—"can help guarantee a spot to live on campus" and connect you with similar people). The Hullabaloo U first-year experience class helps with orientation. The Corps of Cadets (2,100 members) is a tight-knit option if you want a structured community. Engineering orgs (ASME, Formula SAE, etc.) are extremely active.`,
    culture: `<strong>General Vibe:</strong> Traditional, conservative, fiercely loyal, and centered on school spirit and the Aggie identity. The culture here is unlike anywhere else—it's almost military in its devotion to tradition and camaraderie. Students don't "cheer"—they "yell." The 12th Man tradition (all students stand for the entirety of every football game) embodies the spirit.<br><br>
<strong>Greek Life:</strong> <em>Present but not dominant.</em> Only 6% of men and 15% of women go Greek. With 60,000+ students, Greek life is just one small slice. The social scene is defined far more by traditions, Aggie organizations, and the overall culture of belonging. This is actually a <em>positive</em> for someone who doesn't want Greek life to be the social gatekeeper.<br><br>
<strong>Traditions:</strong> Midnight Yell (the night before every football game), the 12th Man, Aggie Muster (a solemn remembrance held in 300+ locations worldwide), the Big Event (largest student-run community service event in the nation), the Fightin' Texas Aggie Band (400+ members), and the Corps of Cadets. The campus is 95% Texan—"out-of-staters should be prepared for serious culture shock."`,
    environment: `<strong>Location:</strong> College Station, TX is a college town through and through—when students leave for holidays, the town empties. Population ~120,000 including Bryan (the "twin city"). The Northgate district near campus has restaurants and bars. It's not a bustling metropolis, but it's a solid, affordable college town. Houston is 90 minutes away; Austin is 90 minutes the other direction.<br><br>
<strong>Safety:</strong> Students report feeling safe on campus. The university runs extensive bus systems throughout the community.<br><br>
<strong>Food &amp; Fun:</strong> Dining halls, fast-food chains, snack shops, and food trucks are all over campus. The Big Event community service day draws thousands. The Northgate district is the social hub for restaurants and bars.<br><br>
<strong>Climate:</strong> Hot and humid. Summers are brutal (95–100°F with high humidity). Winters are mild (40s–50s°F). Basically no snow. Spring is pleasant but short. If you hate heat, this is a challenge—but if you love warm weather, you'll get 8+ months of it.`,
    climate: { avgHigh: 80, avgLow: 57, avgRain: 40, sunny: 230, humidity: "High", snow: "0 in", summary: "Hot & humid most of the year. Mild winters, brutal summers." }
  },
  {
    id: "cwru",
    name: "Case Western Reserve University",
    shortName: "CWRU",
    color: "#0A304E",
    dot: "#0A304E",
    overall: 51,
    engineering: 52,
    acceptance: 38,
    population: 6528,
    cost: 64212,
    lat: 41.5045, lon: -81.6085,
    fiske: "Fiske%20Guide/Case_Western.txt",
    verdictScore: 72,
    verdictRank: 6,
    tagline: "Small, brainy, and underrated — an intimate tech-focused school in a reinvented city",
    academic: `<strong>Mechanical Engineering Program:</strong> CWRU's Case School of Engineering ranks #52 and offers a strong MechE program. The school is known for biomedical engineering (#12 nationally), but MechE benefits from the same rigorous, research-oriented environment. With only ~6,500 undergrads, class sizes are small (50% under 20 students), and access to faculty and research is exceptional—80% of students conduct research as part of senior capstones or independent study. The Sears think[box] fabrication lab is a cross-disciplinary innovation hub.<br><br>
<strong>Career &amp; Alumni:</strong> CWRU graduates are well-regarded in engineering, medicine, and technology. The Preprofessional Scholars program (conditional acceptance to CWRU med/dental school) is a big draw. Career outcomes for MechE grads are solid, with recruiters from Cleveland Clinic, NASA Glenn Research Center (right in Cleveland), GE, Parker Hannifin, and other manufacturers in the Midwest. The alumni network is smaller but loyal. Starting MechE salaries average ~$70–74K. The co-op and combined BS/MS programs are popular.<br><br>
<strong>Key advantage:</strong> The most intimate, personalized academic experience on this list. If you want to know your professors by name, do hands-on research, and attend a rigorous school where you're not a number, CWRU delivers.`,
    community: `<strong>Size &amp; Feel:</strong> At just 6,528 undergrads, CWRU is <em>by far</em> the smallest school on this list. It will feel the most similar to a small-school environment. Students are "driven, high achievers" who are "friendly and spirited." The Fiske Guide calls the campus community "warm and inviting."<br><br>
<strong>Small-School Transition:</strong> This is the <em>easiest</em> transition on the list. With 6,500 undergrads, CWRU essentially <em>is</em> a small school. You'll see familiar faces around campus, develop real relationships with professors, and won't feel lost in a crowd. The residential college system for first-years ensures a built-in community from day one. Every student gets both a faculty advisor and a "navigator" (a staff member who assists throughout all four years). You're required to live on campus for two years, which further builds community.<br><br>
<strong>How to find your tribe:</strong> 200+ student organizations through the Tink (student center), residential colleges, engineering teams, and the naturally small community. The risk here is actually the opposite—the community might feel <em>too</em> small if you crave variety and a massive social scene.`,
    culture: `<strong>General Vibe:</strong> Nerdy, driven, collaborative, and self-deprecating. Students joke about Cleveland's weather and study hard. The culture is more cerebral than social—think late-night problem sets and think[box] projects more than stadium tailgates. The Fiske Guide notes students are "more concerned with studying than socializing." Politically, the campus is "low-key, with liberals and conservatives both well represented."<br><br>
<strong>Greek Life:</strong> <em>Minimal.</em> Greek organizations exist but do not dominate social life. The small campus means social circles form organically through dorms, classes, and clubs rather than through fraternities/sororities. This is ideal if you want a social life that isn't gated by Greek membership.<br><br>
<strong>Traditions:</strong> CWRU's traditions are more academic than athletic—think engineering competitions, hackathons, and research symposiums. The Diversity 360 training program is campuswide. Athletics exist (Division III) but are not a cultural centerpiece.`,
    environment: `<strong>Location:</strong> CWRU sits in University Circle, one of Cleveland's most beautiful and culturally rich neighborhoods. Within walking distance: the Cleveland Museum of Art (free, world-class), the Museum of Natural History, the Botanical Gardens, and Severance Hall (home of the Cleveland Orchestra). Cleveland has undergone a major renaissance—great food scene, affordable cost of living, and revitalized neighborhoods. It's an urban campus, which is a different feel from the college-town schools on this list.<br><br>
<strong>Safety:</strong> "As it is an urban campus, crime does occasionally happen in the surrounding area," but the school provides extensive security including safety officers and free nighttime rides.<br><br>
<strong>Food &amp; Fun:</strong> The Tink hosts dining and events. Upperclassmen often move to nearby off-campus apartments. Cleveland's food scene is diverse and affordable.<br><br>
<strong>Climate:</strong> Cold. Lake Erie winters are no joke—expect heavy snow, lake-effect weather, gray skies from November to March, and temperatures regularly in the 20s°F. Summers are warm and pleasant (70s–80s°F). If you hate cold weather, this is a serious factor.`,
    climate: { avgHigh: 56, avgLow: 39, avgRain: 39, sunny: 166, humidity: "Moderate", snow: "54 in", summary: "Lake-effect snow & cold winters. Pleasant summers. Gray skies common." }
  },
  {
    id: "umiami",
    name: "University of Miami",
    shortName: "UMiami",
    color: "#F47321",
    dot: "#005030",
    overall: 64,
    engineering: 125,
    acceptance: 19,
    population: 13250,
    cost: 98118,
    lat: 25.7215, lon: -80.2794,
    fiske: "Fiske%20Guide/UMiami.txt",
    verdictScore: 48,
    verdictRank: 7,
    tagline: "Sun-soaked campus with strong pre-professional culture, but MechE isn't the strength here",
    academic: `<strong>Mechanical Engineering Program:</strong> UMiami's College of Engineering ranks #125 nationally—the weakest engineering program on this list by a significant margin. The engineering college is small and not the university's calling card. UM is best known for marine science, music (Frost School), business, nursing, and pre-med. If Mechanical Engineering is your committed path, UMiami is not the optimal choice for program quality.<br><br>
<strong>Career &amp; Alumni:</strong> The UM alumni network is strong in South Florida—particularly in business, law, medicine, and music. For engineering specifically, the network is thinner than peer institutions. Career fairs exist but are more oriented toward business, healthcare, and liberal arts. The Foote Fellows Honors Program provides high-achieving students with enhanced opportunities. Starting MechE salaries from UM would likely trail schools with stronger engineering reputations.<br><br>
<strong>Key consideration:</strong> UM offers a fantastic overall college experience, but if MechE is your target, you're paying a premium ($98K 4-year cost!) for a program ranked #125. The ROI calculation is unfavorable for engineering compared to other options.`,
    community: `<strong>Size &amp; Feel:</strong> With ~13,250 undergrads, UM is mid-sized. The residential college system (modeled after Oxford and Cambridge) is designed to create intimate communities within the larger university. Each residential college has a live-in faculty member who organizes seminars, concerts, dinners, and social events.<br><br>
<strong>Small-School Transition:</strong> The residential college system is specifically designed to address the small-to-large transition. It provides a built-in community with shared events and a live-in mentor. At 13,250 students, UM is large enough to offer variety but small enough that you won't feel totally anonymous. 52% of classes have fewer than 20 students, and professors are "extremely accessible through office hours."<br><br>
<strong>How to find your tribe:</strong> Residential colleges, the Rathskeller (student-run grill and social hub), 200+ student organizations, and intramurals. The student body is diverse—69% from out of state, many from the Northeast—so there's a good mix of backgrounds.`,
    culture: `<strong>General Vibe:</strong> Sunny, social, diverse, and spirited. Miami's culture infuses campus life with energy. Football has historically been a major part of UM's identity, though academics have grown substantially. The vibe is more cosmopolitan and fashion-forward than the Southern/Midwestern schools on this list. Students come from all over the country (and world), creating a genuinely diverse atmosphere.<br><br>
<strong>Greek Life:</strong> <em>Moderately important.</em> 19% of men and 21% of women go Greek. Sororities don't have their own housing. The party scene exists (Miami's bars and nightclubs are nearby), but Greek life isn't the sole social gatekeeper. An art history major notes: "The drinking and party culture on campus is not something that proves to be a massive issue." Off-campus Miami nightlife is a bigger draw.<br><br>
<strong>Traditions:</strong> International Week, SportsFest (housing areas compete in sports), Gandhi Day (campus-wide community service). Football games and the "U" identity remain central.`,
    environment: `<strong>Location:</strong> Coral Gables, FL—an upscale suburb of Miami. 20 minutes from beaches, 15 minutes from downtown Miami. This is a genuinely exciting location—world-class dining, nightlife, art, and culture. The 239-acre campus features palm trees, Lake Osceola, a butterfly garden, and open-air breezeways. It's beautiful.<br><br>
<strong>Safety:</strong> Students report feeling safe thanks to safety escorts, campus shuttles, and self-defense classes.<br><br>
<strong>Food &amp; Fun:</strong> "Our food court is very diverse with just about every food option you can think of." Off campus, Miami is a food paradise—Cuban, Haitian, Colombian, seafood, and everything in between. South Beach, Wynwood, Brickell, and Coconut Grove are all nearby.<br><br>
<strong>Climate:</strong> Tropical. Year-round warmth (70s–90s°F). Summers are hot and humid with afternoon thunderstorms and hurricane season (June–November). Winters are paradise (70s°F, low humidity). If you love warm weather, this is the best climate on the list—but summers are oppressively hot and humid.`,
    climate: { avgHigh: 84, avgLow: 70, avgRain: 62, sunny: 248, humidity: "High", snow: "0 in", summary: "Tropical year-round warmth. Hurricane season Jun–Nov. Paradise in winter." }
  },
  {
    id: "ucsc",
    name: "UC Santa Cruz",
    shortName: "UC Santa Cruz",
    color: "#003C6C",
    dot: "#FDC700",
    overall: 88,
    engineering: 74,
    acceptance: 66,
    population: 17940,
    cost: 68898,
    lat: 36.9916, lon: -122.0583,
    fiske: "Fiske%20Guide/UC_Santa_Cruz.txt",
    verdictScore: 35,
    verdictRank: 8,
    tagline: "Progressive, beautiful, and unique — admitted for Robotics Engineering in a redwood forest",
    academic: `<strong>Robotics Engineering Program:</strong> You've been admitted to UC Santa Cruz's <em>Robotics Engineering</em> program in the Baskin School of Engineering, which ranks #74 nationally. Robotics Engineering is a multidisciplinary field that overlaps heavily with Mechanical Engineering—covering dynamics, controls, mechatronics, mechanical design, and embedded systems. While it's not a traditional MechE degree, the curriculum shares significant core content and the career paths converge in areas like automation, manufacturing, aerospace, and defense robotics.<br><br>
<strong>Career &amp; Alumni:</strong> UCSC's engineering strength is in computer science and technology, feeding into Silicon Valley (the satellite campus provides internship and research connections). Robotics engineers are in extremely high demand, and the interdisciplinary nature of the degree (mechanical + electrical + CS) can actually be <em>more</em> marketable than a pure MechE degree in today's job market. The school has a strong reputation for producing Ph.D. researchers in the sciences.<br><br>
<strong>Key advantage:</strong> Direct admission to Robotics Engineering means no uncertainty about your major. The robotics field is booming, and the Silicon Valley proximity creates strong internship and career pipelines.`,
    community: `<strong>Size &amp; Feel:</strong> With ~17,940 undergrads, UCSC is mid-sized. The residential college system (10 colleges, each with its own personality and requirements) is the heart of campus life. Each college has dedicated faculty fellows and support staff, its own dining hall, and themed programs.<br><br>
<strong>Small-School Transition:</strong> The residential college system is excellent for creating intimate communities. Each college is essentially a small school within the university. The noncompetitive academic atmosphere helps too—"the curriculum is demanding but the atmosphere is noncompetitive." Professors are accessible: "Whether it's via email or regular office hours, I feel very comfortable talking to all of my professors."<br><br>
<strong>How to find your tribe:</strong> Your residential college will be your immediate community. Beyond that, the campus culture is laid-back and welcoming. However, the <em>massive housing crisis</em> is a serious concern—the university only guarantees housing for one year, and "soaring rents have forced some students to live in cars" in the brutal Santa Cruz rental market.`,
    culture: `<strong>General Vibe:</strong> Progressive, chill, environmentally conscious, and quirky. The mascot is a banana slug. The campus was born during the '60s counterculture and retains that spirit—it's the most liberal UC campus. Students come here to "do their own thing." The yoga mats and surfboards still abound. Think environmental stewardship, social justice, and creative individualism.<br><br>
<strong>Greek Life:</strong> <em>Virtually nonexistent.</em> Greek life has almost no presence at UCSC. Social life revolves around residential colleges, outdoor activities, house parties, and campus events. This is ideal if you want zero Greek pressure.<br><br>
<strong>Traditions:</strong> First Rain (students run through campus in the first rain of the year), 4/20 celebrations, and a general culture of "to each his or her own."`,
    environment: `<strong>Location:</strong> Set on 2,000 acres of redwood forest overlooking Monterey Bay. One of the most beautiful campuses in the nation. The beach is a quick drive or spectacular bike ride away. The town of Santa Cruz (~65,000) is a quirky, progressive beach town with great restaurants, surfing, and a famous boardwalk. San Francisco and Silicon Valley are 75 minutes north.<br><br>
<strong>Safety:</strong> Campus feels safe but the housing crisis creates off-campus challenges. The CARE office supports students.<br><br>
<strong>Food &amp; Fun:</strong> Dining halls with a food co-op option. Santa Cruz offers great farm-to-table restaurants, surf culture, hiking in the redwoods, and the Santa Cruz Beach Boardwalk.<br><br>
<strong>Climate:</strong> Mediterranean—mild year-round. Summers are warm and dry (65–75°F), winters are cool and rainy (45–55°F). Fog is common in summer mornings. No extreme heat, no snow. One of the most pleasant climates on this list.`,
    climate: { avgHigh: 67, avgLow: 47, avgRain: 30, sunny: 260, humidity: "Low", snow: "0 in", summary: "Mediterranean mild. Cool foggy mornings, dry warm afternoons." }
  },
  {
    id: "ucdavis",
    name: "UC Davis",
    shortName: "UC Davis",
    color: "#022851",
    dot: "#FFBF00",
    overall: 32,
    engineering: 34,
    acceptance: 42,
    population: 32273,
    cost: 86860,
    lat: 38.5382, lon: -121.7617,
    fiske: "Fiske%20Guide/UC_Davis.txt",
    verdictScore: 78,
    verdictRank: 4,
    tagline: "Top-tier engineering at a friendly, bike-powered campus with serious research chops",
    academic: `<strong>Mechanical Engineering Program:</strong> UC Davis's College of Engineering ranks #34 nationally and its Mechanical & Aerospace Engineering department is highly regarded. Research strengths include energy systems, biomechanical engineering, computational mechanics, and transportation. Davis is a Tier 1 research university where 41% of undergrads work directly with professors. The engineering program benefits from proximity to Sacramento (state government internships) and the broader Northern California tech ecosystem.<br><br>
<strong>Career &amp; Alumni:</strong> The UC system alumni network is enormous, and Davis feeds well into Northern California industries—tech, agriculture, biotech, government, and clean energy. The UC Center Sacramento and the Washington Program provide academic credit for government internships. MechE starting salaries average ~$72–76K. Career fairs draw Silicon Valley and Sacramento employers. The alumni network is strong in California but less nationally prominent than Penn State's or A&M's.<br><br>
<strong>Key advantage:</strong> A top-35 engineering program at a school known for its friendly, community-oriented culture. The combination of research access (41% of undergrads do research with faculty!) and a welcoming atmosphere is compelling.`,
    community: `<strong>Size &amp; Feel:</strong> With ~32,000 undergrads, UC Davis is large. But the culture is distinctly friendly and community-oriented. "Students at Davis are friendly, and you really feel a sense of community when you're here." The campus runs on bicycles—100 miles of bike paths create a unique, connected feel that makes the large campus feel smaller and more navigable.<br><br>
<strong>Small-School Transition:</strong> Davis is often described as having a "small-town atmosphere" despite its size. The bike culture, the college-town setting (Davis is a true college town, population ~70,000), and the friendly student body help. However, many intro courses are "quite large" and "average class size is on the rise." The 200+ freshman seminars taught by top instructors are a way to get small-class intimacy. Living/learning communities provide additional structure.<br><br>
<strong>How to find your tribe:</strong> 800+ student clubs, living/learning communities, the University Honors Program, intramurals, and the weekly farmers market on campus. The bike culture itself fosters a sense of community—Davis students are outdoorsy, health-conscious, and approachable.`,
    culture: `<strong>General Vibe:</strong> Friendly, outdoorsy, health-conscious, progressive, and community-minded. "Bicycles are the norm at Davis. Don't come without one." The campus has an earthy, sustainable vibe—think farmers markets, the Whole Earth Festival ("an earthy, tie-dyed sort of event"), and contests between dorms for the lowest utility bills. Environmental consciousness runs high.<br><br>
<strong>Greek Life:</strong> <em>Minimal.</em> Only 5% of men and 6% of women go Greek. Social life is not driven by fraternities/sororities at all. Students find community through clubs, intramurals, the arts, and the town itself. A senior notes the party scene "can get dull, so a lot of students like to go out of town."<br><br>
<strong>Traditions:</strong> Picnic Day (massive alumni/student outdoor festival), Lawntopia (student-run music festival), the Whole Earth Festival, and nearly three months of spring cultural celebrations.`,
    environment: `<strong>Location:</strong> Davis, CA is a small, bike-friendly college town (population ~70,000) located 20 miles west of Sacramento and 73 miles northeast of San Francisco. The 5,300-acre campus features a 100-acre arboretum, hammocks on the Quad, and a rooftop greenhouse. It's flat, green, and peaceful. Sacramento is nearby for city amenities; San Francisco and the Bay Area are a day-trip away.<br><br>
<strong>Safety:</strong> Davis is generally a very safe college town. Greek and student government have "taken steps to address sexual assault."<br><br>
<strong>Food &amp; Fun:</strong> Three dining halls with vegan and kosher options, food trucks at lunchtime, a weekly on-campus farmers market, and the 1,800-seat Mondavi Center for performing arts. Davis has good restaurants and a relaxed food scene.<br><br>
<strong>Climate:</strong> Mediterranean with a Central Valley twist. Hot, dry summers (90–100°F), mild winters (40s–50s°F) with occasional rain. Very little humidity compared to the South or Midwest. Fall and spring are gorgeous. Tule fog in winter can be thick. No snow.`,
    climate: { avgHigh: 74, avgLow: 48, avgRain: 19, sunny: 269, humidity: "Low", snow: "0 in", summary: "Hot dry summers, mild winters. Tule fog in Dec–Jan. Very little rain." }
  },
  {
    id: "ucsd",
    name: "UC San Diego",
    shortName: "UC San Diego",
    color: "#182B49",
    dot: "#00629B",
    overall: 29,
    engineering: 10,
    acceptance: 27,
    population: 34955,
    cost: 86145,
    lat: 32.8801, lon: -117.2340,
    fiske: "Fiske%20Guide/UC_San_Diego.txt",
    verdictScore: 81,
    verdictRank: 3,
    tagline: "Elite engineering on the beach — but you were admitted Undeclared, and that matters",
    academic: `<strong>Mechanical Engineering Program:</strong> UC San Diego's Jacobs School of Engineering ranks <strong>#10 nationally</strong>—the second-best engineering program on this list and a globally elite institution. The Mechanical & Aerospace Engineering department is world-class with research in robotics, energy systems, computational mechanics, materials science, and biomechanics.<br><br>
<strong>⚠️ CRITICAL: The Undeclared Admission Issue.</strong> You were admitted as an <em>Undeclared</em> major, not directly into engineering. At UCSD, declaring an engineering major is <em>not guaranteed</em>—it requires completing prerequisite "screening courses" (typically Math 20A-E, Physics 2A-C, and specific engineering courses like MAE 8/MAE 3) with competitive GPA thresholds. The Jacobs School is capacity-limited, meaning only a set number of students can declare each year. Historically, students need a 3.5+ GPA in screening courses to be competitive for MechE. This is achievable but demanding—UCSD's quarter system is fast-paced, science courses are rigorous, and "you end up teaching a lot of the material to yourself" in large lectures. If you don't meet the threshold, you may be locked out of engineering entirely and forced to choose a non-engineering major.<br><br>
<strong>Career &amp; Alumni:</strong> If you <em>do</em> get into MechE, career outcomes are stellar. UCSD's engineering alumni network spans Qualcomm (headquartered nearby), General Atomics, SPAWAR/NAVWAR, the San Diego biotech corridor, and the broader SoCal tech ecosystem. San Diego ranks highly among public universities for graduates who earn PhDs and for med school acceptance. Starting MechE salaries average ~$76–82K.<br><br>
<strong>Key risk:</strong> The best engineering program you've been offered—but you weren't admitted to it. The pathway from Undeclared to MechE is competitive and uncertain. You need to go in with eyes open.`,
    community: `<strong>Size &amp; Feel:</strong> With ~35,000 undergrads, UCSD is large. However, the eight-college system (Revelle, Muir, Marshall, Warren, Roosevelt, Sixth, Seventh, Eighth) breaks the university into smaller communities, each with its own GE requirements, personality, housing complex, and dining options. This is similar to UCSC's system but on a bigger scale.<br><br>
<strong>Small-School Transition:</strong> The college system helps, but UCSD's reputation is more "academically intense and individually focused" than "warm and communal." Students are described as "exceptionally serious." Large lecture classes (26% have 50+ students) and the quarter system's pace can feel impersonal. The Fiske Guide notes the academic intensity "does not mean that all the students here are nerdy"—but the social culture is more mellow and study-focused than schools like Auburn, A&M, or Penn State.<br><br>
<strong>How to find your tribe:</strong> Your residential college will be your starting point. Engineering student orgs, intramural sports, and the 500+ registered student organizations provide community. The beach culture also brings people together informally. But students note UCSD can feel "socially dead" compared to more spirited campuses—you'll need to make effort.`,
    culture: `<strong>General Vibe:</strong> Studious, mellow, diverse, and chill. The stereotypical UCSD student is focused on academics during the week and hits the beach on weekends. The pace is described as "study, party, relax, study more." There's less rah-rah school spirit than A&M or Penn State—UCSD is Division I but doesn't have football and moved to the Big West conference. The cultural vibe is more SoCal laid-back than rah-rah collegiate.<br><br>
<strong>Greek Life:</strong> <em>Present but not dominant.</em> Greek organizations exist and are visible but don't define the social scene. The diverse international student body (12% international, 34% Asian American, 25% Hispanic/Latino) creates a multicultural social environment that extends well beyond Greek life.<br><br>
<strong>Traditions:</strong> The Sun God Festival (annual music/arts festival, though it's been scaled back), the neon sculpture reading virtues/vices, and the general SoCal lifestyle of beach volleyball, surfing, and outdoor living.`,
    environment: `<strong>Location:</strong> La Jolla, CA—one of the most stunning and affluent coastal communities in the country. The campus sits on a bluff overlooking the Pacific Ocean. It's objectively one of the most beautiful college locations in America. San Diego itself is a fantastic city with perfect weather, incredible food (especially Mexican/seafood), craft breweries, and a thriving tech scene. Downtown San Diego is 20 minutes away.<br><br>
<strong>Safety:</strong> La Jolla is very safe. Campus security is robust.<br><br>
<strong>Food &amp; Fun:</strong> 13 campus eateries, with Dining Dollars good anywhere. La Jolla and San Diego offer world-class dining—Mexican food, seafood, farm-to-table, and everything in between. Del Mar beaches, Torrey Pines State Natural Reserve, and Balboa Park are all nearby. The lifestyle is unbeatable.<br><br>
<strong>Climate:</strong> Near-perfect. Year-round sunshine with temperatures typically between 60–78°F. Summers are warm and dry (72–78°F), winters are mild (55–65°F). Very little rain (10 inches/year). No snow, no humidity, no extreme heat. This is widely considered one of the best climates in the entire United States.`,
    climate: { avgHigh: 71, avgLow: 57, avgRain: 10, sunny: 266, humidity: "Low", snow: "0 in", summary: "Near-perfect. 60–78°F year-round. Minimal rain. Best climate on the list." }
  }
];

/* Verdict data keyed by school id */
const verdicts = {
  tamu:     { pros: "Pros: #15 Engineering (best direct admit), absurdly low cost ($17K total!), legendary alumni network, incredible school spirit and traditions, Greek life isn't dominant.", cons: "Cons: 60,700 students is massive. 95% Texan—culture shock for non-Texans. College Station is remote. Brutal summer heat.", top: true },
  pennstate: { pros: "Pros: #31 Engineering, world's largest alumni network, legendary school spirit, Schreyer Honors creates small-school feel, strong career outcomes.", cons: "Cons: 42,600 students—very large. $56K cost. Cold, isolated location. Must be proactive to find community.", top: false },
  ucsd:     { pros: "Pros: #10 Engineering (best on list), stunning La Jolla location, perfect weather, strong career outcomes in SoCal.", cons: "Cons: Admitted Undeclared—MechE not guaranteed. $86K cost. Can feel socially dead. Risk of being locked out of engineering.", top: false },
  ucdavis:  { pros: "Pros: #34 Engineering, friendly community, 41% do undergrad research, bike culture, charming college town.", cons: "Cons: $87K cost (out-of-state). Large intro classes. Party scene described as dull. Hot summers.", top: false },
  auburn:   { pros: "Pros: Incredibly welcoming community, great co-op program, low cost ($31K), warm climate, excellent small-school transition.", cons: "Cons: Engineering ranked #59. Greek life is very dominant (45% women). Limited reach outside the Southeast. Remote location.", top: false },
  cwru:     { pros: "Pros: Smallest school (6,500)—easiest transition. 80% do research. Personalized education. Strong pre-professional programs.", cons: "Cons: Engineering #52. $64K cost. Cleveland winters are brutal. Social scene is study-focused. Smaller alumni network.", top: false },
  umiami:   { pros: "Pros: Beautiful campus, Miami lifestyle, residential college system, diverse student body.", cons: "Cons: Engineering #125—far below peers. $98K cost (highest on list). Terrible ROI for engineering. Not recommended for MechE.", top: false },
  ucsc:     { pros: "Pros: Direct admit to Robotics Engineering (no major uncertainty). Stunning redwood campus, Silicon Valley proximity, unique progressive culture, zero Greek pressure.", cons: "Cons: Housing crisis is severe. Engineering #74 overall. $69K cost. Robotics ≠ traditional MechE for some employers. Laid-back vibe may feel too chill.", top: false }
};

/* Weather codes */
const weatherCodes = {
  0: { icon: "☀️", desc: "Clear sky" },
  1: { icon: "🌤", desc: "Mainly clear" },
  2: { icon: "⛅", desc: "Partly cloudy" },
  3: { icon: "☁️", desc: "Overcast" },
  45: { icon: "🌫", desc: "Fog" },
  48: { icon: "🌫", desc: "Depositing rime fog" },
  51: { icon: "🌦", desc: "Light drizzle" },
  53: { icon: "🌦", desc: "Moderate drizzle" },
  55: { icon: "🌧", desc: "Dense drizzle" },
  61: { icon: "🌧", desc: "Slight rain" },
  63: { icon: "🌧", desc: "Moderate rain" },
  65: { icon: "🌧", desc: "Heavy rain" },
  71: { icon: "🌨", desc: "Slight snow" },
  73: { icon: "🌨", desc: "Moderate snow" },
  75: { icon: "❄️", desc: "Heavy snow" },
  77: { icon: "🌨", desc: "Snow grains" },
  80: { icon: "🌦", desc: "Slight showers" },
  81: { icon: "🌧", desc: "Moderate showers" },
  82: { icon: "🌧", desc: "Violent showers" },
  85: { icon: "🌨", desc: "Slight snow showers" },
  86: { icon: "❄️", desc: "Heavy snow showers" },
  95: { icon: "⛈", desc: "Thunderstorm" },
  96: { icon: "⛈", desc: "Thunderstorm + hail" },
  99: { icon: "⛈", desc: "Thunderstorm + heavy hail" }
};

function celsiusToFahrenheit(c) { return Math.round(c * 9/5 + 32); }

/* ==========================================================================
   PREFERENCE WEIGHTS & SCHOOL ATTRIBUTE SCORES
   These drive the dynamic fit-score calculation.
   Each attribute is scored 1–10 per school.
   ========================================================================== */

const defaultWeights = {
  engineering:  20,   // Engineering program quality
  community:    30,   // Community fit (culture + size match for ~30K ideal)
  cost:         15,   // Total 4-year cost / ROI
  qualityOfLife: 10,  // Climate, location, lifestyle
  diversity:    10,   // Racial, gender, geographic diversity
  dormQuality:  5     // Housing / dorm experience
};

/* Per-school scores on each dimension (1–10 scale)
   Community scores factor in BOTH culture/warmth AND how close the school's
   population is to the user's ~30K ideal. A tiny school with great culture
   still gets dinged for being far from 30K, and vice versa. */
const schoolScores = {
  auburn:   { engineering: 5, community: 8, cost: 9, qualityOfLife: 6, diversity: 3, dormQuality: 6 },
  pennstate:{ engineering: 8, community: 6, cost: 5, qualityOfLife: 4, diversity: 6, dormQuality: 6 },
  tamu:     { engineering: 10, community: 6, cost: 10, qualityOfLife: 5, diversity: 3, dormQuality: 5 },
  cwru:     { engineering: 6, community: 4, cost: 4, qualityOfLife: 4, diversity: 7, dormQuality: 7 },
  umiami:   { engineering: 2, community: 5, cost: 1, qualityOfLife: 9, diversity: 9, dormQuality: 8 },
  ucsc:     { engineering: 5, community: 5, cost: 4, qualityOfLife: 8, diversity: 7, dormQuality: 3 },
  ucdavis:  { engineering: 8, community: 9, cost: 3, qualityOfLife: 7, diversity: 7, dormQuality: 6 },
  ucsd:     { engineering: 9, community: 7, cost: 3, qualityOfLife: 10, diversity: 8, dormQuality: 7 }
};

/*
  Diversity notes (used in comparison card):
  - Auburn: 74% white, 7% Black, 3% Hispanic, 2% Asian. 52% women. Very Southern/conservative. Low geographic diversity (mostly Alabama/Georgia).
  - Penn State: 65% white, 6% Black, 8% Hispanic, 8% Asian. 44% women. Mostly PA/NJ/NY. Moderate diversity.
  - Texas A&M: 53% white, 3% Black, 24% Hispanic, 8% Asian. 49% women. 95% Texan. Very low geographic diversity.
  - CWRU: 46% white, 6% Black, 8% Hispanic, 23% Asian, 12% international. 48% women. Decent racial diversity.
  - UMiami: 42% white, 9% Black, 28% Hispanic, 7% Asian, 14% international. 52% women. 69% out-of-state. Very diverse.
  - UCSC: 29% white, 2% Black, 28% Hispanic, 22% Asian. 53% women. Progressive/quirky culture.
  - UC Davis: 24% white, 3% Black, 25% Hispanic, 31% Asian, 8% international. 61% women. Strong racial diversity.
  - UCSD: 19% white, 2% Black, 22% Hispanic, 37% Asian, 12% international. 52% women. Excellent racial/cultural mix.
*/

const diversityData = {
  auburn:    { white: 74, black: 7, hispanic: 3, asian: 2, international: 3, women: 52, geoDiv: "Low — mostly AL/GA/South", rating: "★★☆☆☆", note: "Very homogeneous. 74% white, limited geographic diversity." },
  pennstate: { white: 65, black: 6, hispanic: 8, asian: 8, international: 5, women: 44, geoDiv: "Moderate — mostly PA/NJ/NY", rating: "★★★☆☆", note: "Moderate racial diversity. 65% white, skews Northeast." },
  tamu:      { white: 53, black: 3, hispanic: 24, asian: 8, international: 4, women: 49, geoDiv: "Low — 95% Texan", rating: "★★☆☆☆", note: "Decent Hispanic rep, but 95% Texan. Very low geo diversity." },
  cwru:      { white: 46, black: 6, hispanic: 8, asian: 23, international: 12, women: 48, geoDiv: "Good — national draw", rating: "★★★★☆", note: "Strong Asian/international presence. Good racial balance." },
  umiami:    { white: 42, black: 9, hispanic: 28, asian: 7, international: 14, women: 52, geoDiv: "Excellent — 69% out-of-state", rating: "★★★★★", note: "Most diverse. Great racial, cultural, and geographic mix." },
  ucsc:      { white: 29, black: 2, hispanic: 28, asian: 22, international: 5, women: 53, geoDiv: "Moderate — mostly CA", rating: "★★★★☆", note: "Good racial diversity. Progressive culture, low Black enrollment." },
  ucdavis:   { white: 24, black: 3, hispanic: 25, asian: 31, international: 8, women: 61, geoDiv: "Moderate — mostly CA", rating: "★★★★☆", note: "Strong racial diversity. 61% women, heavy Asian representation." },
  ucsd:      { white: 19, black: 2, hispanic: 22, asian: 37, international: 12, women: 52, geoDiv: "Good — CA + international", rating: "★★★★★", note: "Excellent diversity. No majority group. Strong international mix." }
};

const dormData = {
  auburn:    { rating: "★★★☆☆", note: "Greek chapters get best housing. Standard dorms are average." },
  pennstate: { rating: "★★★☆☆", note: "Large residence halls. Quality varies. LEAP communities are solid." },
  tamu:      { rating: "★★★☆☆", note: "Modular dorms, some dated. Living/learning communities recommended." },
  cwru:      { rating: "★★★★☆", note: "Residential colleges are well-maintained. 2-year live-on requirement." },
  umiami:    { rating: "★★★★★", note: "Residential colleges modeled after Oxford. Lakeside is excellent." },
  ucsc:      { rating: "★★☆☆☆", note: "Severe housing crisis. Only 1 year guaranteed. Some students live in cars." },
  ucdavis:   { rating: "★★★☆☆", note: "Standard UC dorms. Nearby off-campus rentals are affordable." },
  ucsd:      { rating: "★★★★☆", note: "8 college system each with housing. 2 years guaranteed. New buildings." }
};

/* Compute dynamic fit score based on user weights */
function computeFitScores(weights) {
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
  const results = {};
  schools.forEach(s => {
    const sc = schoolScores[s.id];
    if (!sc) return;
    let score = 0;
    for (const key of Object.keys(weights)) {
      score += (sc[key] || 0) * (weights[key] / totalWeight);
    }
    // Scale 1-10 → 0-100
    results[s.id] = Math.round(score * 10);
  });
  return results;
}

/* Save / load weights from localStorage */
function saveWeights(weights) {
  localStorage.setItem('collegehub_weights', JSON.stringify(weights));
}
function loadWeights() {
  try {
    const saved = localStorage.getItem('collegehub_weights');
    if (saved) {
      const w = JSON.parse(saved);
      // Migration: remove deprecated 'population' key, fold into community
      if ('population' in w) {
        w.community = (w.community || 0) + (w.population || 0);
        delete w.population;
        localStorage.setItem('collegehub_weights', JSON.stringify(w));
      }
      return w;
    }
  } catch (e) {}
  return null;
}
function hasSeenPreferences() {
  return localStorage.getItem('collegehub_prefs_seen') === '1';
}
function markPreferencesSeen() {
  localStorage.setItem('collegehub_prefs_seen', '1');
}

/* Average school-year climate data (Aug–May) for each campus */
const climateData = {
  auburn:   { avgHigh: 76, avgLow: 52, avgRain: 55, sunny: 213, humidity: "High", snow: "Trace", summary: "Mild winters, hot summers. Long warm season with thunderstorms in spring." },
  pennstate: { avgHigh: 55, avgLow: 34, avgRain: 42, sunny: 160, humidity: "Moderate", snow: "44 in", summary: "Cold, snowy winters. Gorgeous fall foliage. Gray Nov–Mar." },
  tamu:     { avgHigh: 80, avgLow: 57, avgRain: 40, sunny: 230, humidity: "High", snow: "0 in", summary: "Hot & humid most of the year. Mild winters, brutal summers." },
  cwru:     { avgHigh: 56, avgLow: 39, avgRain: 39, sunny: 166, humidity: "Moderate", snow: "54 in", summary: "Lake-effect snow & cold winters. Pleasant summers. Gray skies common." },
  umiami:   { avgHigh: 84, avgLow: 70, avgRain: 62, sunny: 248, humidity: "High", snow: "0 in", summary: "Tropical year-round warmth. Hurricane season Jun–Nov. Paradise in winter." },
  ucsc:     { avgHigh: 67, avgLow: 47, avgRain: 30, sunny: 260, humidity: "Low", snow: "0 in", summary: "Mediterranean mild. Cool foggy mornings, dry warm afternoons." },
  ucdavis:  { avgHigh: 74, avgLow: 48, avgRain: 19, sunny: 269, humidity: "Low", snow: "0 in", summary: "Hot dry summers, mild winters. Tule fog in Dec–Jan. Very little rain." },
  ucsd:     { avgHigh: 71, avgLow: 57, avgRain: 10, sunny: 266, humidity: "Low", snow: "0 in", summary: "Near-perfect. 60–78°F year-round. Minimal rain. Best climate on the list." }
};
