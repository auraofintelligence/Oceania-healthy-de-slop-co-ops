import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicOrigin = "https://auraofintelligence.github.io/Oceania-healthy-de-slop-co-ops/";

const worlds = [
  ["home", "Home", ""],
  ["co-operative-paths", "Co-operative Paths", "co-operative-paths"],
  ["shared-wellbeing", "Shared Wellbeing", "shared-wellbeing"],
  ["aura-geode", "Aura Geode", "aura-geode"],
  ["your-digital-self", "Your Digital Self", "your-digital-self"],
  ["public-value", "Public Value", "public-value"],
  ["oceania", "Many Places", "oceania"],
  ["a-protopian-gambit", "A Protopian Gambit", "a-protopian-gambit"],
  ["evidence", "Evidence", "evidence"],
  ["about", "About", "about"]
];

const pages = [
  {
    slug: "",
    key: "home",
    title: "Oceania Healthy De-Slop Co-ops",
    shortTitle: "Home",
    description: "A radiant regional world for community-shaped wellbeing, personal reflection and self-sovereign digital life across Oceania.",
    heading: "You arrive radiant.<br><span>Your world begins with you.</span>",
    lead: "In this regional project, self-sovereign means the person remains at the centre of their own body, story, data and digital reflection. Shared infrastructure gathers around that dignity.",
    hero: "hero-home-v2.webp",
    heroAlt: "Concept artwork of a radiant person overlooking equal jewel-like community spaces across an Oceania archipelago at dawn.",
    theme: "home",
    primaryHref: "co-operative-paths/",
    primaryLabel: "Co-operative paths",
    secondaryHref: "shared-wellbeing/",
    secondaryLabel: "Shared wellbeing",
    body: `
      <section class="world-section sovereign-intro" id="sovereign-centre">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The sovereign centre</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Every person arrives with an inner world that deserves beauty, privacy and room to grow. The co-operative idea begins there, then asks what becomes possible when communities share the expensive parts without swallowing the individual.</p>
            <p>Self-sovereign is not isolation. It is relationship by agreement. A digital twin here means a growing reflection of a person's records, memories, choices and patterns, held first on hardware that person chooses.</p>
          </div>
        </div>
        <div class="wrap sovereign-orbit reveal" data-sovereign-orbit>
          <div class="orbit-core"><span>You</span><small>whole from the beginning</small></div>
          <button type="button" class="orbit-facet facet-body" data-orbit="body">Body</button>
          <button type="button" class="orbit-facet facet-story" data-orbit="story">Story</button>
          <button type="button" class="orbit-facet facet-data" data-orbit="data">Data</button>
          <button type="button" class="orbit-facet facet-memory" data-orbit="memory">Memory</button>
          <button type="button" class="orbit-facet facet-permission" data-orbit="permission">Permission</button>
          <p class="orbit-reading" data-orbit-reading aria-live="polite">Each part remains close enough to feel like yours.</p>
        </div>
      </section>

      <section class="world-section portal-section" id="worlds">
        <div class="wrap section-heading reveal">
          <h2>A regional world, not one crowded page</h2>
          <p>Each idea receives its own atmosphere, evidence and room for local variation. The first doorways are open now, with the wider site family growing through separate public releases.</p>
        </div>
        <div class="wrap portal-archipelago">
          <a class="image-portal portal-large reveal" href="co-operative-paths/">
            <img src="assets/images/hero-co-operative-paths.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Co-operative Paths</strong><small>Many agreements. Equal dignity.</small></span>
          </a>
          <a class="image-portal portal-tall reveal" href="shared-wellbeing/">
            <img src="assets/images/hero-shared-wellbeing.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Shared Wellbeing</strong><small>Warmth, breath, rest and careful evidence.</small></span>
          </a>
          <article class="future-portal future-violet reveal">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Aura Geode Research</h3>
            <p>A construction and research world for the proposed Geode and Personal Atmosphere Delivery System.</p>
            <span class="status-mark status-future">Future research</span>
          </article>
          <article class="future-portal future-opal reveal">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Your Digital Self</h3>
            <p>A plain-language path into local hardware, private reflection and a digital twin that grows with its person.</p>
            <span class="status-mark status-working">Working proposal</span>
          </article>
        </div>
      </section>

      <section class="world-section album-section" id="album-journey">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The album is part of the architecture</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy"><em>A Protopian Gambit</em> carries an inner journey through birth, repair and embodied reflection. These songs are not decorative extras. They give the technology and co-operative model a human pulse.</p>
          </div>
        </div>
        <div class="wrap album-arc">
          <article class="track-portal track-birth reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>01</span>
            </div>
            <div>
              <h3>Primordial Consent 1,2,3, Infinity</h3>
              <p>The divine self digital twin is born. A sovereign inner life enters form, memory, contrast and choice.</p>
              <span class="status-mark status-art">Artistic meaning</span>
            </div>
          </article>
          <article class="track-portal track-repair reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>02</span>
            </div>
            <div>
              <h3>Kintsugi Protocol</h3>
              <p>The self repairs with gold. The crack becomes a map for reflection, learning and renewed relationship.</p>
              <span class="status-mark status-art">Artistic meaning</span>
            </div>
          </article>
          <article class="track-portal track-embodied reveal">
            <div class="phone-vessel" aria-hidden="true">
              <div class="phone-light"></div>
              <span>03</span>
            </div>
            <div>
              <h3>60 Days Set in Stone</h3>
              <p>The hyperbaric oxygen therapy song carries pressure, measurement, commitment and digital-twin formation through an artistic sixty-day journey.</p>
              <span class="status-mark status-art">Art beside evidence</span>
            </div>
          </article>
        </div>
      </section>

      <section class="world-section value-section">
        <div class="wrap value-stage">
          <div class="value-number reveal">
            <span>About</span>
            <strong>A$1,000</strong>
            <small>one mature 35-member illustration</small>
          </div>
          <div class="value-copy reveal">
            <h2>Affordability is a question worth testing in daylight</h2>
            <p>The source model reaches about A$1,000 per participant in one mature illustration. A separate seven-founder illustration uses about A$5,000 each alongside finance. Neither figure is a public offer or settled price.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section evidence-gateway">
        <div class="wrap evidence-stage">
          <div class="evidence-prism reveal" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="reveal">
            <h2>Every idea has a visible home</h2>
            <p>Current public records, working proposals, future research and unresolved details remain visually distinct throughout the site.</p>
            <div class="status-constellation">
              <span class="status-mark status-established">Established information</span>
              <span class="status-mark status-working">Working proposal</span>
              <span class="status-mark status-future">Future research</span>
              <span class="status-mark status-open">TO BE CONFIRMED</span>
            </div>
            <a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/blob/main/docs/source-audit.md">The public source audit <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "co-operative-paths",
    key: "co-operative-paths",
    title: "Co-operative Paths",
    shortTitle: "Co-operative Paths",
    description: "Locally shaped co-operative pathways for shared wellbeing and self-sovereign regional infrastructure.",
    heading: "Many hands.<br><span>Distinct agreements.</span>",
    lead: "A co-operative offers one way for people to share expensive infrastructure while keeping purpose, membership, ownership and local relationships visible.",
    hero: "hero-co-operative-paths.webp",
    heroAlt: "Concept artwork of several equal circles of people gathering in jewel-like ocean pavilions at twilight.",
    theme: "cooperative",
    primaryHref: "#agreement-prism",
    primaryLabel: "The agreement prism",
    secondaryHref: "../shared-wellbeing/",
    secondaryLabel: "Shared wellbeing",
    body: `
      <section class="world-section pearl-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A family without sameness</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The regional model is a network of locally shaped relationships, not one agreement stretched across every place. One group may share a sauna. Another may begin with local compute, food, rest or a supervised clinical relationship.</p>
            <p>Queensland is the first legal starting context in this source set. Other Oceania jurisdictions bring their own co-operative, health, privacy, cultural and financial settings.</p>
          </div>
        </div>
      </section>

      <section class="world-section source-chamber">
        <div class="wrap source-stage">
          <div class="source-number reveal">5</div>
          <div class="source-copy reveal">
            <h2>A Queensland starting point</h2>
            <p>Queensland recognises distributing and non-distributing co-operatives. The usual starting point is at least five active members, with a lower number subject to approval.</p>
            <p>The project remains an exploration. It is not a registered co-operative and it does not speak for a future local group.</p>
            <span class="status-mark status-established">Established information</span>
            <a class="faceted-link faceted-link-light" href="https://www.qld.gov.au/community/fair-trading/associations-charities-and-non-for-profits/cooperatives">Queensland co-operatives information <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="world-section agreement-section" id="agreement-prism">
        <div class="wrap section-heading reveal">
          <h2>The agreement prism</h2>
          <p>Each facet opens a different local conversation. Together they form a guidepost rather than a ready-made rulebook.</p>
        </div>
        <div class="wrap agreement-stage" data-agreement-prism>
          <div class="agreement-controls reveal" role="group" aria-label="Agreement facets">
            <button type="button" class="agreement-control is-active" data-agreement="purpose" aria-pressed="true">Purpose</button>
            <button type="button" class="agreement-control" data-agreement="membership" aria-pressed="false">Membership</button>
            <button type="button" class="agreement-control" data-agreement="ownership" aria-pressed="false">Ownership</button>
            <button type="button" class="agreement-control" data-agreement="sharing" aria-pressed="false">Sharing</button>
            <button type="button" class="agreement-control" data-agreement="leaving" aria-pressed="false">Leaving well</button>
          </div>
          <div class="agreement-prism reveal" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
          <div class="agreement-reading reveal" aria-live="polite">
            <h3 data-agreement-title>What brings this group together?</h3>
            <p data-agreement-copy>A shared purpose may begin with wellbeing access, local digital infrastructure, food, resilience, research or a mixture shaped by the members.</p>
            <p class="agreement-question" data-agreement-question>Which shared benefit feels most alive in this place?</p>
          </div>
        </div>
      </section>

      <section class="world-section braid-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Several funding streams, clearly held apart</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">Money, voluntary contribution and public value play different roles. The source material is strongest when each has its own record instead of being blurred into one number.</p></div>
        </div>
        <div class="wrap funding-braid">
          <article class="braid-line braid-member reveal"><span></span><div><h3>Member pathway</h3><p>Shares, prepaid access and local contributions may support ownership and everyday participation.</p></div></article>
          <article class="braid-line braid-public reveal"><span></span><div><h3>Public pathway</h3><p>Grants and guarantees may support access, resilience, evaluation, open learning and local capability.</p></div></article>
          <article class="braid-line braid-service reveal"><span></span><div><h3>Service pathway</h3><p>Loans and service income belong beside realistic staffing, energy, maintenance, insurance and governance costs.</p></div></article>
        </div>
        <div class="wrap proposal-note reveal"><span class="status-mark status-working">Working proposal</span><p>No funding mix is treated as the regional answer. Each co-operative shapes its own terms.</p></div>
      </section>

      <section class="world-section local-terms-section">
        <div class="wrap terms-stage">
          <div class="terms-copy reveal">
            <h2>Local terms are part of the beauty</h2>
            <p>Membership, access, money, care, data, cultural relationships and exit arrangements receive their own space. Difference between communities is not a defect in the model.</p>
          </div>
          <div class="terms-facets reveal">
            <span>Access</span><span>Money</span><span>Care</span><span>Data</span><span>Culture</span><span>Exit</span>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "shared-wellbeing",
    key: "shared-wellbeing",
    title: "Shared Wellbeing",
    shortTitle: "Shared Wellbeing",
    description: "A careful public exploration of shared sauna access, supervised hyperbaric oxygen therapy, rest and reflection.",
    heading: "Warmth. Breath.<br><span>Room to return to yourself.</span>",
    lead: "Shared wellbeing begins with ordinary human needs, then asks where expensive equipment, professional relationships and community ownership may sit.",
    hero: "hero-shared-wellbeing.webp",
    heroAlt: "Concept artwork of an ocean-side community wellbeing sanctuary with a sauna, quiet garden and separate consultation room.",
    theme: "wellbeing",
    primaryHref: "#three-spaces",
    primaryLabel: "Three different spaces",
    secondaryHref: "../co-operative-paths/",
    secondaryLabel: "Co-operative paths",
    body: `
      <section class="world-section pearl-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Wellbeing before machinery</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Food, movement, rest, reflection, relationships and a sense of belonging sit beside the technology story. Equipment is one possible part of a wider place, not the measure of a person's effort or worth.</p>
            <p>De-slop is playful language for making room between a person and the noise around them. It is not a diagnosis or one universal recipe.</p>
          </div>
        </div>
      </section>

      <section class="world-section three-spaces-section" id="three-spaces">
        <div class="wrap section-heading reveal">
          <h2>Three spaces, three different relationships</h2>
          <p>The visual world holds them together while the evidence and operating boundaries remain distinct.</p>
        </div>
        <div class="wrap three-spaces">
          <article class="space-panel sauna-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Sauna and warmth</h3>
            <p>Sauna types vary in heat source, temperature, accessibility, energy, maintenance and comfort. Particular products and operating arrangements remain to be identified.</p>
            <span class="status-mark status-open">TO BE CONFIRMED</span>
          </article>
          <article class="space-panel hbot-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Hyperbaric oxygen therapy</h3>
            <p>The Australian public starting point places chamber use with qualified and trained health professionals in appropriately equipped clinics. Each product and intended use needs its own current record.</p>
            <span class="status-mark status-established">Established information</span>
          </article>
          <article class="space-panel reflection-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Private reflection</h3>
            <p>A quiet setting may hold music, journalling, personal records and a digital reflection on local hardware. Clinical software and general wellbeing follow different paths.</p>
            <span class="status-mark status-working">Working proposal</span>
          </article>
        </div>
      </section>

      <section class="world-section safety-section">
        <div class="wrap safety-stage">
          <div class="safety-jewel reveal" aria-hidden="true"><span></span></div>
          <div class="safety-copy reveal">
            <h2>The current Australian safety line is clear</h2>
            <p>The Therapeutic Goods Administration advises hyperbaric chamber use under qualified and trained health professionals in appropriately equipped clinics. Its October 2025 notice warns against purchasing a chamber for home use.</p>
            <p>This public site therefore keeps existing supervised services separate from the proposed Aura Geode and Personal Atmosphere Delivery System research.</p>
            <a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/risk-fire-during-use-hyperbaric-chambers">Therapeutic Goods Administration safety notice <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="world-section song-chamber">
        <div class="wrap song-stage">
          <div class="portrait-song reveal" aria-hidden="true">
            <div class="portrait-song-screen">
              <div class="pressure-rings"><span></span><span></span><span></span></div>
              <strong>60</strong>
            </div>
          </div>
          <div class="song-copy reveal">
            <h2><em>60 Days Set in Stone</em> is the hyperbaric oxygen therapy song</h2>
            <p class="large-copy">The song carries a sixty-session journey through pressure, measurement, self-reflection and the formation of a digital twin inside the wider Aura Geode vision.</p>
            <p>Its emotional and artistic meaning belongs here. Clinical benefits, protocols and personal suitability belong in the separate evidence and professional-care lane. The song is not presented as treatment evidence or an instruction.</p>
            <span class="status-mark status-art">Art beside evidence</span>
          </div>
        </div>
      </section>

      <section class="world-section equipment-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Every product keeps its own name and record</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A chamber, accessory, sauna or software product is not treated as part of one broad certification. The public comparison will show the manufacturer, model, intended use, current Australian Register of Therapeutic Goods entry where relevant, accessibility and operating setting.</p>
          </div>
        </div>
        <div class="wrap equipment-ledger reveal">
          <div><span>Named chamber</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Sauna type and model</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Service location</span><strong>TO BE CONFIRMED</strong></div>
          <div><span>Professional relationship</span><strong>TO BE CONFIRMED</strong></div>
        </div>
      </section>
    `
  }
];

const available = new Set(pages.map((page) => page.key));

function pageHref(slug, prefix = "") {
  return slug ? prefix + slug + "/" : prefix || "./";
}

function renderBrand(prefix) {
  return `
    <a class="brand" href="${pageHref("", prefix)}" aria-label="Oceania Healthy De-Slop Co-ops home">
      <span class="brand-gem" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="brand-words">Oceania Healthy<br>De-Slop Co-ops</span>
    </a>`;
}

function renderHeader(page, prefix) {
  const primary = worlds
    .filter((world) => available.has(world[0]))
    .map((world) => {
      const href = pageHref(world[2], prefix);
      const current = world[0] === page.key ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${world[1]}</a>`;
    })
    .join("");

  const worldLinks = worlds
    .map((world, index) => {
      const number = String(index + 1).padStart(2, "0");
      if (available.has(world[0])) {
        const current = world[0] === page.key ? ' aria-current="page"' : "";
        return `<a class="world-link" href="${pageHref(world[2], prefix)}"${current}><span>${number}</span><strong>${world[1]}</strong></a>`;
      }
      return `<span class="world-link world-link-coming" aria-disabled="true"><span>${number}</span><strong>${world[1]}</strong><small>Being shaped</small></span>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="header-shell">
        ${renderBrand(prefix)}
        <nav class="primary-nav" aria-label="Primary navigation">${primary}</nav>
        <button class="world-menu-button" type="button" aria-expanded="false" aria-controls="world-menu">
          <span>All worlds</span><i aria-hidden="true"></i>
        </button>
      </div>
    </header>
    <div class="world-menu" id="world-menu" aria-hidden="true">
      <div class="world-menu-inner">
        <div class="world-menu-heading">
          <p>One regional world. Many distinct paths.</p>
          <button class="world-menu-close" type="button">Close</button>
        </div>
        <nav class="world-menu-grid" aria-label="All site pages">${worldLinks}</nav>
      </div>
    </div>`;
}

function renderFooter(prefix) {
  return `
    <footer class="site-footer">
      <div class="wrap footer-stage">
        <div>
          <p class="footer-name">Oceania Healthy De-Slop Co-ops</p>
          <p>A regional public working project by Luke Nathan Hayes.</p>
        </div>
        <div class="footer-paths">
          <a href="${pageHref("co-operative-paths", prefix)}">Co-operative Paths</a>
          <a href="${pageHref("shared-wellbeing", prefix)}">Shared Wellbeing</a>
          <a href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops">GitHub repository</a>
          <a href="${prefix}LICENCE.md">Public source licence</a>
        </div>
      </div>
      <div class="wrap footer-lower">
        <p>Original material shared under the Strange But True Public Source Licence. Commercial rights reserved.</p>
        <a href="#top" class="back-to-top"><span aria-hidden="true">↑</span> Back to the top</a>
      </div>
    </footer>`;
}

function renderHero(page, prefix) {
  return `
    <section class="sovereign-hero hero-${page.theme}" aria-labelledby="page-title">
      <img class="hero-image" src="${prefix}assets/images/${page.hero}" alt="${page.heroAlt}" fetchpriority="high" decoding="async">
      <div class="hero-veil"></div>
      <div class="hero-facets" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="wrap hero-content">
        <h1 id="page-title">${page.heading}</h1>
        <p>${page.lead}</p>
        <div class="hero-actions">
          <a class="faceted-button faceted-button-gold" href="${page.primaryHref}">${page.primaryLabel}</a>
          <a class="faceted-button faceted-button-glass" href="${page.secondaryHref}">${page.secondaryLabel}</a>
        </div>
      </div>
      <p class="concept-note">Imagined concept artwork</p>
    </section>`;
}

function renderJourney(pageIndex, prefix) {
  const previous = pages[(pageIndex - 1 + pages.length) % pages.length];
  const following = pages[(pageIndex + 1) % pages.length];
  return `
    <nav class="page-journey wrap" aria-label="Continue through the site">
      <a href="${pageHref(previous.slug, prefix)}"><span>Previous page</span><strong>${previous.shortTitle}</strong></a>
      <a class="journey-following" href="${pageHref(following.slug, prefix)}"><span>Following page</span><strong>${following.shortTitle}</strong></a>
    </nav>`;
}

function renderPage(page, pageIndex) {
  const prefix = page.slug ? "../" : "";
  const canonical = publicOrigin + (page.slug ? page.slug + "/" : "");
  const imageUrl = publicOrigin + "assets/images/" + page.hero;

  return `<!doctype html>
<html lang="en-AU">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title}${page.slug ? " | Oceania Healthy De-Slop Co-ops" : ""}</title>
    <meta name="description" content="${page.description}">
    <meta name="theme-color" content="#050611">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${imageUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="preload" href="${prefix}assets/images/${page.hero}" as="image" type="image/webp">
    <link rel="stylesheet" href="${prefix}assets/css/tokens.css?v=20260830-royal">
    <link rel="stylesheet" href="${prefix}assets/css/base.css?v=20260830-royal">
    <link rel="stylesheet" href="${prefix}assets/css/layout.css?v=20260830-royal">
    <link rel="stylesheet" href="${prefix}assets/css/components.css?v=20260830-royal">
    <link rel="stylesheet" href="${prefix}assets/css/pages.css?v=20260830-royal">
    <link rel="stylesheet" href="${prefix}assets/css/motion.css?v=20260830-royal">
    <script src="${prefix}assets/js/site.js?v=20260830-royal" defer></script>
  </head>
  <body class="page-${page.key}" id="top">
    <a class="skip-link" href="#main-content">Skip to the main story</a>
    <canvas class="constellation-field" data-constellation aria-hidden="true"></canvas>
    <div class="scroll-progress" aria-hidden="true"><i></i></div>
    ${renderHeader(page, prefix)}
    <main id="main-content">
      ${renderHero(page, prefix)}
      ${page.body}
      ${renderJourney(pageIndex, prefix)}
    </main>
    ${renderFooter(prefix)}
  </body>
</html>
`;
}

for (const [index, page] of pages.entries()) {
  const outputDirectory = page.slug ? path.join(projectRoot, page.slug) : projectRoot;
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "index.html"), renderPage(page, index).replace(/[ \t]+$/gm, ""), "utf8");
}

const sitemap = pages
  .map((page) => "  <url><loc>" + publicOrigin + (page.slug ? page.slug + "/" : "") + "</loc></url>")
  .join("\n");

fs.writeFileSync(
  path.join(projectRoot, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + sitemap + "\n</urlset>\n",
  "utf8"
);

fs.writeFileSync(
  path.join(projectRoot, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: " + publicOrigin + "sitemap.xml\n",
  "utf8"
);

console.log("Built " + pages.length + " public pages.");
