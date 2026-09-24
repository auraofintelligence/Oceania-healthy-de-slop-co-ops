import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicOrigin = "https://auraofintelligence.github.io/Oceania-healthy-de-slop-co-ops/";

const worlds = [
  ["home", "Home", ""],
  ["shared-wellbeing", "Shared Wellbeing", "shared-wellbeing"],
  ["aura-geode", "Aura Geode", "aura-geode"],
  ["your-digital-self", "Your Digital Self", "your-digital-self"],
  ["a-protopian-gambit", "A Protopian Gambit", "a-protopian-gambit"],
  ["co-operative-paths", "Co-operative Paths", "co-operative-paths"],
  ["public-value", "Public Value", "public-value"],
  ["oceania", "Many Places", "oceania"],
  ["evidence", "Evidence", "evidence"],
  ["about", "About", "about"],
  ["site-map", "Site Map", "site-map"]
];

const pages = [
  {
    slug: "",
    key: "home",
    title: "Oceania Healthy De-Slop Co-ops",
    shortTitle: "Home",
    description: "A radiant regional world for community-shaped wellbeing, personal reflection and self-sovereign digital life across Oceania.",
    heading: "You arrive radiant.<br><span>Your world begins with you.</span>",
    lead: "Here, self-sovereign means your body, story, data and digital reflection remain yours. Neighbours may share the costly equipment, while each person keeps their own key.",
    hero: "hero-home-v2.webp",
    heroAlt: "Concept artwork of a radiant person overlooking equal jewel-like community spaces across an Oceania archipelago at dawn.",
    theme: "home",
    primaryHref: "shared-wellbeing/",
    primaryLabel: "Shared wellbeing",
    secondaryHref: "co-operative-paths/",
    secondaryLabel: "Co-operative paths",
    body: `
      <section class="world-section sovereign-intro" id="sovereign-centre">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The sovereign centre</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Every person arrives with an inner world that deserves beauty, privacy and room to grow. The co-operative idea begins there, then asks what becomes possible when communities share the expensive parts while each person keeps their own centre.</p>
            <p>Self-sovereignty grows through chosen relationships. A digital twin here means a growing reflection of a person's records, memories, choices and patterns, held first on hardware that person chooses.</p>
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
          <h2>Many worlds, one regional welcome</h2>
          <p>Each idea receives its own atmosphere, evidence and room for local variation. Ten project worlds are open, with a human Site Map as the eleventh doorway.</p>
        </div>
        <div class="wrap portal-archipelago">
          <a class="image-portal portal-large reveal" href="shared-wellbeing/">
            <img src="assets/images/hero-shared-wellbeing.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Shared Wellbeing</strong><small>Warmth, breath, food, movement and reflection.</small></span>
          </a>
          <a class="image-portal portal-tall reveal" href="co-operative-paths/">
            <img src="assets/images/hero-co-operative-paths.webp" alt="" loading="lazy" decoding="async">
            <span class="portal-shade"></span>
            <span class="portal-copy"><strong>Co-operative Paths</strong><small>Many agreements. Equal dignity.</small></span>
          </a>
          <a class="future-portal future-violet reveal" href="aura-geode/">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Aura Geode Research</h3>
            <p>Pressure engineering, a personal breathing atmosphere, sensory experience and owner-held computing in one research world.</p>
            <span class="status-mark status-future">Future research</span>
          </a>
          <a class="future-portal future-opal reveal" href="your-digital-self/">
            <span class="portal-gem" aria-hidden="true"></span>
            <h3>Your Digital Self</h3>
            <p>A plain-language path into local hardware, private reflection and a digital twin that grows with its person.</p>
            <span class="status-mark status-working">Working proposal</span>
          </a>
        </div>
        <nav class="wrap world-ribbon reveal" aria-label="More site worlds">
          <a href="a-protopian-gambit/"><span>05</span><strong>A Protopian Gambit</strong></a>
          <a href="public-value/"><span>07</span><strong>Public Value</strong></a>
          <a href="oceania/"><span>08</span><strong>Many Places</strong></a>
          <a href="evidence/"><span>09</span><strong>Evidence</strong></a>
          <a href="about/"><span>10</span><strong>About and Licence</strong></a>
          <a href="site-map/"><span>11</span><strong>Site Map</strong></a>
        </nav>
      </section>

      <section class="world-section ecosystem-section" id="wider-braid">
        <div class="wrap ecosystem-intro reveal">
          <h2>Four threads in a healthier future</h2>
          <p class="large-copy">The co-operative is one part of a wider adventure in Joyful Responsible Abundance. A possible place, voluntary contribution, personal reflection and women-led enterprise bring different strengths to the same human question: how do more of us live well?</p>
        </div>
        <div class="wrap ecosystem-grid">
          <a class="ecosystem-card ecosystem-place reveal" href="https://auraofintelligence.github.io/Anglican-Diocese-82-Claytons-Amity/index.html"><span class="ecosystem-number">01 / Place</span><strong>82 Claytons Road</strong><span>Luke has invited the Anglican Diocese to explore a land gift and partnership for aged care, digital twins and future Geode research on Minjerribah.</span><small>Visit the proposal ↗</small></a>
          <a class="ecosystem-card ecosystem-hours reveal" href="https://auraofintelligence.github.io/C-Hour-introduction/"><span class="ecosystem-number">02 / Participation</span><strong>C-Hour</strong><span>Voluntary contribution and locally chosen reciprocity braid food, movement, environmental care and disaster readiness into preventative wellbeing. One hour remains one hour, outside market exchange.</span><small>Explore C-Hour ↗</small></a>
          <a class="ecosystem-card ecosystem-alignment reveal" href="https://auraofintelligence.github.io/UNGA81-Luke-Hayes/"><span class="ecosystem-number">03 / Reflection</span><strong>Human and AI alignment</strong><span>Luke's personal contribution to the 81st United Nations General Assembly invites many people to reflect on lives worth living, then bring that plurality into artificial intelligence design.</span><small>Read the contribution ↗</small></a>
          <a class="ecosystem-card ecosystem-queens reveal" href="https://auraofintelligence.github.io/500-Queens-VC-2026/index.html"><span class="ecosystem-number">04 / Leadership</span><strong>500 Queens</strong><span>A plan to grow women's executive leadership, investment influence and useful enterprises, including care and shared infrastructure. Capital and paid work keep their own accounts.</span><small>Meet 500 Queens ↗</small></a>
        </div>
      </section>

      <section class="world-section album-section" id="album-journey">
        <div class="wrap editorial-split">
          <div class="section-title reveal">
            <h2>The album is part of the architecture</h2>
          </div>
          <div class="sovereign-copy reveal">
            <p class="large-copy"><em>A Protopian Gambit</em> carries an inner journey through birth, repair and embodied reflection. The music gives the technology and co-operative model a human pulse.</p>
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
              <p>The hyperbaric oxygen therapy song carries pressure, measurement, commitment and digital-twin formation through an artistic sixty-session journey.</p>
              <span class="status-mark status-art">Art beside evidence</span>
            </div>
          </article>
        </div>
        <div class="wrap album-deep-link reveal"><a class="faceted-link faceted-link-light" href="a-protopian-gambit/">Enter the complete album world and portrait video frames <span aria-hidden="true">→</span></a></div>
      </section>

      <section class="world-section value-section">
        <div class="wrap value-stage">
          <div class="value-number reveal">
            <span>About</span>
            <strong>A$1,000</strong>
            <small>indicative protocol cost in one 35-member source table</small>
          </div>
          <div class="value-copy reveal">
            <h2>What shared access could bring within reach</h2>
            <p>One draft source table shows an indicative A$1,000 protocol cost per member at 35 members. It also shows a separate A$5,000 initial loan per member and A$500 operating fee per 60-day protocol. A proposed A$35,000 mass-produced chamber is a different model from the bespoke Aura Geode. The member-financing details still invite revision.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section evidence-gateway">
        <div class="wrap evidence-stage">
          <div class="evidence-prism reveal" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="reveal">
            <h2>Every idea has a visible home</h2>
            <p>Current public records, working proposals, future research and locally shaped details each have a visible place throughout the site.</p>
            <div class="status-constellation">
              <span class="status-mark status-established">Established information</span>
              <span class="status-mark status-working">Working proposal</span>
              <span class="status-mark status-future">Future research</span>
              <span class="status-mark status-open">Open for local choice</span>
            </div>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="evidence/">Enter the evidence world <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/blob/main/docs/source-audit.md">The public source audit <span aria-hidden="true">↗</span></a></div>
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
          <div class="section-title reveal"><h2>Related places, locally shaped agreements</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The regional idea invites locally shaped relationships. One group may share a sauna. Another may begin with local computing, food, rest or a supervised clinical relationship. Each group could write terms that fit its people and place.</p>
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
            <p>This regional project offers ideas and source material. Any future local co-operative would form through the people, rules and relationships of its own place.</p>
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
          <div class="section-title reveal"><h2>Money changes the local agreement</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">A funding source is also a relationship. Local terms give ownership, access, reporting and departure their own visible place.</p></div>
        </div>
        <div class="wrap funding-braid">
          <article class="braid-line braid-member reveal"><span></span><div><h3>A shared asset</h3><p>The agreement records who owns it, whose contribution is recognised and what happens to a member's interest when they leave.</p></div></article>
          <article class="braid-line braid-public reveal"><span></span><div><h3>Public support</h3><p>The agreement records which public benefit, access, evaluation or open learning travels with the support.</p></div></article>
          <article class="braid-line braid-service reveal"><span></span><div><h3>Everyday operation</h3><p>The agreement records how staffing, energy, maintenance, insurance, care relationships and member access sit together.</p></div></article>
        </div>
        <div class="wrap proposal-note reveal"><span class="status-mark status-working">Working proposal</span><p>The full funding braid and editable arithmetic live in <a href="../public-value/">Public Value</a>.</p></div>
      </section>

      <section class="world-section local-terms-section">
        <div class="wrap terms-stage">
          <div class="terms-copy reveal">
            <h2>Local terms are part of the beauty</h2>
            <p>Membership, access, money, care, data, cultural relationships and exit arrangements receive their own space. Differences between communities make the regional family richer.</p>
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
    description: "A bright community pathway for sauna, professionally supervised hyperbaric oxygen therapy, rest, reflection and shared learning.",
    heading: "Warmth. Breath.<br><span>Room to return to yourself.</span>",
    lead: "Imagine a local place where warmth, professionally supported oxygen therapy, music and quiet reflection become easier to reach, with each person shaping their own experience.",
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
          <div class="section-title reveal"><h2>A place with room for the whole person</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">Food, movement, rest, reflection, relationships and belonging give the technology its human setting. Shared equipment could add another beautiful option to everyday wellbeing.</p>
            <p>De-slop is playful language for finding space between a person and the noise around them. Each person brings their own pace, hopes and way of making meaning.</p>
          </div>
        </div>
      </section>

      <section class="world-section deslop-spectrum-section" id="whole-person">
        <div class="wrap section-heading reveal"><h2>More than a chamber</h2><p>De-slop is a wide, personal landscape. The Geode is one bright room in a much larger house of wellbeing.</p></div>
        <div class="wrap deslop-spectrum">
          <article class="reveal"><h3>Everyday nourishment</h3><p>Food, shared meals, chosen elixirs, rest and time with people who matter.</p></article>
          <article class="reveal"><h3>Movement and recovery</h3><p>Stretching, exercise, play, warmth, sauna and cold experiences chosen for the person and the setting.</p></article>
          <article class="reveal"><h3>New surroundings</h3><p>Altitude, nature and travel offer other ways to notice the body and mind, with the care each setting deserves.</p></article>
          <article class="reveal"><h3>Inner reflection</h3><p>Music, quiet, journalling and a self-held digital twin help someone notice patterns in their own words.</p></article>
        </div>
        <div class="wrap deslop-deep-dive reveal"><h3>A deeper dive for the willing</h3><p>Some people will enjoy a more involved programme combining food, fasting, hot and cold, movement, altitude, chamber sessions, sensing and reflection. The research plan sets out ways to study how those elements interact, with each future participant shaping what belongs in their own journey. There is room for a gentle day and room for an ambitious exploration.</p></div>
      </section>

      <section class="world-section three-spaces-section" id="three-spaces">
        <div class="wrap section-heading reveal">
          <h2>Three spaces, three different relationships</h2>
          <p>Each space offers a different experience. A joined-up community place could make the journey feel welcoming and affordable.</p>
        </div>
        <div class="wrap three-spaces">
          <article class="space-panel sauna-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Sauna and warmth</h3>
            <p>A shared sauna offers warmth, pause and company. Local groups could compare certified products, accessibility, running costs and comfort before choosing the setting that suits their people.</p>
            <span class="status-mark status-working">Local choice</span>
          </article>
          <article class="space-panel hbot-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Hyperbaric oxygen therapy</h3>
            <p>Existing professionally supervised chamber services offer a starting platform for future access and research plans. A separate, small randomised study in healthy older adults reported improvements in attention and processing speed, inviting larger and more varied studies.</p>
            <span class="status-mark status-established">Published study lead</span>
          </article>
          <article class="space-panel reflection-panel reveal">
            <span class="space-light" aria-hidden="true"></span>
            <h3>Private reflection</h3>
            <p>Music, journalling and a personal digital reflection could help someone notice what a session means in their own life. In this proposal, their records would begin on hardware they hold.</p>
            <span class="status-mark status-working">Working proposal</span>
          </article>
        </div>
      </section>

      <section class="world-section safety-section">
        <div class="wrap safety-stage">
          <div class="safety-jewel reveal" aria-hidden="true"><span></span></div>
          <div class="safety-copy reveal">
            <h2>Professional care gives the research a home</h2>
            <p>Qualified, trained health professionals and appropriately equipped clinics offer a practical Australian starting point for hyperbaric oxygen therapy. Product records, session design and clear participant information create a foundation for learning together.</p>
            <p>That pathway opens two complementary proposals: a near-term connection to existing services, and an engineering and clinical study path for the Aura Geode and Personal Atmosphere Delivery System. Both await the people, equipment and agreements that would bring them into practice.</p>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/risk-fire-during-use-hyperbaric-chambers">Australian chamber guidance <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://pubmed.ncbi.nlm.nih.gov/32589613/">Healthy-ageing study <span aria-hidden="true">↗</span></a></div>
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
            <p class="large-copy">The song carries a sixty-session chamber journey through pressure, measurement, self-reflection and digital-twin formation in art.</p>
            <p>Its sixty-session arc offers a way to imagine careful observation over time: what changes, what stays steady, and what the person notices. A research team could turn those questions into measures and comparisons of their own design.</p>
            <span class="status-mark status-art">Art beside evidence</span>
          </div>
        </div>
      </section>

      <section class="world-section equipment-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Real products, visible choices</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A useful local comparison would name each chamber, accessory, sauna and software product, its maker, intended use, relevant Australian register entry, accessibility features and operating setting. That lets a community see exactly what it is considering.</p>
          </div>
        </div>
        <div class="wrap equipment-ledger reveal">
          <div><span>Named chamber</span><strong>Local selection open</strong></div>
          <div><span>Sauna type and model</span><strong>Local selection open</strong></div>
          <div><span>Service location</span><strong>Locally shaped</strong></div>
          <div><span>Professional relationship</span><strong>Locally shaped</strong></div>
        </div>
      </section>

      <section class="world-section wellbeing-connections-section">
        <div class="wrap section-heading reveal"><h2>Community life woven into wellbeing</h2><p>Food, movement, friendship, reflection and shared equipment grow through local relationships. These proposals offer different ways to bring them together.</p></div>
        <div class="wrap wellbeing-connections">
          <a class="reveal" href="https://auraofintelligence.github.io/Anglican-Diocese-82-Claytons-Amity/"><strong>82 Claytons Road, Amity</strong><span>Luke has invited the Diocese to explore a land gift and partnership bringing aged care, a welcoming local place and a future Geode and digital-twin research setting together.</span><small>Explore the proposal ↗</small></a>
          <a class="reveal" href="https://auraofintelligence.github.io/C-Hour-introduction/"><strong>C-Hour introduction</strong><span>Voluntary community hours could encourage good health and preventative care through gardens, movement, learning, friendship and locally chosen access to shared wellbeing experiences. Each hour stays outside market exchange and monetisation; equipment and care have their own funding arrangements.</span><small>Explore C-Hour ↗</small></a>
          <a class="reveal" href="https://auraofintelligence.github.io/"><strong>Aura guide</strong><span>A wider doorway into the connected Aura projects and their different paths.</span><small>Explore the guide ↗</small></a>
        </div>
      </section>
    `
  },
  {
    slug: "aura-geode",
    key: "aura-geode",
    title: "Aura Geode Research",
    shortTitle: "Aura Geode",
    description: "An open construction and research path for the proposed Aura Geode and Personal Atmosphere Delivery System.",
    heading: "A luminous chamber.<br><span>A universe of possibility.</span>",
    lead: "The Aura Geode research direction joins pressure engineering, a personal breathing atmosphere, sensory experience and owner-held computing. Its studies will explore how those parts work together for real people.",
    hero: "hero-aura-geode.webp",
    heroAlt: "Imagined architectural artwork of an unoccupied translucent Geode chamber being studied by a small research team beside the ocean at night.",
    theme: "geode",
    primaryHref: "#geode-parts",
    primaryLabel: "Enter the research",
    secondaryHref: "../your-digital-self/",
    secondaryLabel: "Meet your digital self",
    body: `
      <section class="world-section geode-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A joined-up research direction</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The planned Geode programme joins professionally supported oxygen therapy with chosen light, sound, sensing and private reflection. The Geode concept gives that experience a physical form, while an owner-held digital twin is designed to help each person notice patterns over time.</p>
            <p>The shared-access baseline explores a mass-produced chamber built with established hyperbaric materials and methods, at a draft A$35,000 target. The Aura Geode is the sportscar concept: a distinct, higher-spec mineral-shell design with its own materials, research programme and price still to be worked out.</p>
            <span class="status-mark status-future">Research plan</span>
          </div>
        </div>
      </section>

      <section class="world-section geode-discovery-section" id="geode-research">
        <div class="wrap section-heading reveal"><h2>Oxygen, repair and the living cell</h2><p>The research direction is set; the Geode trial remains in planning. Future studies would make their measurements, comparisons and results visible.</p></div>
        <div class="wrap geode-discovery-grid">
          <article class="geode-discovery-card reveal"><img src="../assets/images/geode-plasma-wound-research.webp" alt="Concept biomedical artwork of oxygen carried in blood plasma toward a healing patch of skin." width="1600" height="900" loading="lazy" decoding="async"><div><h3>Oxygen carried through plasma</h3><p>Under pressure, more oxygen dissolves directly into blood plasma. That physical effect helps explain why hyperbaric oxygen therapy has a place in care for selected difficult wounds. The Geode trial is still a plan. It proposes measuring oxygen delivery and comfort; wound-healing outcomes would depend on the future study group and protocol.</p><a href="https://uhms.org/resources/featured-resources/hbo-indications.html">Oxygen physiology and selected wound uses <span aria-hidden="true">↗</span></a><a href="https://pubmed.ncbi.nlm.nih.gov/20427683/">A separate, completed wound-healing trial <span aria-hidden="true">↗</span></a></div></article>
          <article class="geode-discovery-card reveal"><img src="../assets/images/geode-telomere-research.webp" alt="Concept laboratory artwork of chromosome ends and a blood sample used to explore telomere research." width="1600" height="900" loading="lazy" decoding="async"><div><h3>Telomeres as a research signal</h3><p>In a small, separate study of older adults, blood-cell telomere measurements changed after sixty oxygen sessions. That intriguing result opens a larger question about how different people respond over time. The planned Geode research proposes timed samples, comparison groups and follow-up to learn which changes hold.</p><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7746357/">Read the separate, completed telomere study <span aria-hidden="true">↗</span></a></div></article>
        </div>
      </section>

      <section class="world-section geode-anatomy-section" id="geode-parts">
        <div class="wrap section-heading reveal">
          <h2>Four parts of one experience</h2>
          <p>Each part has its own job, giving designers clear ways to build, measure and improve the whole.</p>
        </div>
        <div class="wrap geode-anatomy">
          <figure class="geode-anatomy-image reveal"><img src="../assets/images/geode-prototype-mineral-session.webp" alt="Concept design of a person inside a faceted mineral-shell Geode, using a personal screen during a supported chamber session." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Mineral-shell session concept. The person has room to choose and engage with their own sensory setting.</figcaption></figure>
          <div class="geode-part geode-part-shell reveal"><span>01</span><h3>Structure</h3><p>Shape and test a mineral-composite shell using proposed high-purity quartz sand from Minjerribah, blended with selected crystals and other materials.</p></div>
          <div class="geode-part geode-part-atmosphere reveal"><span>02</span><h3>Atmosphere</h3><p>Study chamber pressure and a separately controlled breathing supply as two coordinated systems.</p></div>
          <div class="geode-part geode-part-reflection reveal"><span>03</span><h3>Sensory space</h3><p>Explore music, light, scent and touch cues one by one, using equipment suited to its chamber setting and the person's preferences.</p></div>
          <div class="geode-part geode-part-compute reveal"><span>04</span><h3>Local computing</h3><p>Build the personal record on owner-held hardware. Session feedback and any chamber interface invite their own design and equipment review.</p></div>
        </div>
      </section>

      <section class="world-section pads-section">
        <div class="wrap pads-stage">
          <div class="pads-name reveal">
            <span class="pads-letter">P</span><strong>Personal</strong>
            <span class="pads-letter">A</span><strong>Atmosphere</strong>
            <span class="pads-letter">D</span><strong>Delivery</strong>
            <span class="pads-letter">S</span><strong>System</strong>
          </div>
          <div class="pads-copy reveal">
            <h2>A personal atmosphere, designed around the person</h2>
            <p class="large-copy">The Personal Atmosphere Delivery System (PADS) concept explores a personal mask with a controlled breathing supply while the wider chamber uses a separately managed atmosphere. That separation creates a clear engineering question with real promise for comfort, control and research.</p>
            <p>The proposed design route covers gas delivery, pressure behaviour, sensing, alarms and cleaning; full-system modelling; and prototype tests against the intended use and relevant device requirements. Named component records would support the path towards a human study.</p>
            <span class="status-mark status-future">Device research pathway</span>
          </div>
        </div>
      </section>

      <section class="world-section material-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Two chamber paths</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The drafts now resolve into two distinct chamber paths, each with its own design and price story. The mass-produced baseline draws on established pressure-vessel materials and methods. The bespoke Aura Geode explores a mineral-composite shell with Minjerribah quartz sand and selected crystal blends.</p></div>
        </div>
        <div class="wrap material-duet">
          <article class="material-path material-steel reveal">
            <a class="material-supplier-photo" href="https://oxysail.com/products/yf1003-hard-shell-hyperbaric-oxygen-chamber/" aria-label="See the real YF-1003 seated chamber and supplier photos"><img class="material-image" src="https://oxysail.com/wp-content/themes/oxynova/assets/product-operations/main/1003.webp" alt="Supplier photograph of the real YF-1003 seated hard-shell chamber, shown as a design and price reference." loading="lazy" decoding="async"></a>
            <div><h3>Shared-access baseline</h3><p>A real seated, single-person hard-shell example helps ground the mass-produced baseline. A listing for the OSAIL YF-1003 gives US$20,000 FOB for one unit, about A$28,200 at the Reserve Bank's 23 September 2026 rate. Ten or more units list at US$19,000 each, about A$26,800. FOB means loaded at a named Chinese port; shipping to Australia, insurance, import charges, installation and Australian device requirements sit beyond that price.</p><p>The maker presents this example for non-medical wellness use. A future clinical co-operative would need a separately suitable Australian device path. The A$35,000 project figure remains a draft target, not a supplier quote or landed price.</p><p class="supplier-credit">Supplier photo: OxySail. <a href="https://oxysail.com/products/yf1003-hard-shell-hyperbaric-oxygen-chamber/">View the chamber</a> · <a href="https://0a157c49b0e4f57d.en.made-in-china.com/product/HTBpmKVMaiRL/China-High-Quality-Single-Person-Seated-Hyperbaric-Oxygen-Chamber-for-Nursing-Homes.html">FOB listing</a> · <a href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/blob/main/docs/seated-chamber-supplier-reference.md">Price and source notes</a></p><span class="status-mark status-future">Real supplier reference</span></div>
          </article>
          <article class="material-path material-mineral reveal">
            <img class="material-image" src="../assets/images/geode-prototype-mineral-session.webp" alt="Concept design of a person inside a mineral-composite chamber using an integrated personal screen." width="1600" height="900" loading="lazy" decoding="async">
            <div><h3>Aura Geode</h3><p>A higher-spec geopolymer-composite concept with proposed high-purity Minjerribah quartz sand, chosen crystals and other materials. Material provenance, pressure performance and a locally agreed supply path belong in its own design study. Its price is open.</p><span class="status-mark status-future">Bespoke research concept</span></div>
          </article>
        </div>
        <div class="wrap material-research-note reveal"><h3>What might the materials add?</h3><p>Crystal resonance and etheric effects are part of the declared Geode research direction. A future study could document each mineral blend, compare otherwise matched shells and session conditions, and bring physical measurements together with participants' own reports. That approach would show what changes in material behaviour and personal experience, with a clear record for the next design.</p><p>Materials discovery has a new horizon too. Google DeepMind's Graph Networks for Materials Exploration (GNoME) predicted about 2.2 million inorganic crystal structures, with about 380,000 promising candidates for making and testing. The <a href="https://auraofintelligence.github.io/extreme-matter-atlas/gnome.html">Extreme Matter Atlas explains the discovery</a> in everyday language. It offers inspiration for future material searches alongside the Geode's own quartz-composite testing.</p></div>
      </section>

      <section class="world-section research-gates-section">
        <div class="wrap research-gates-stage">
          <div class="research-gates-copy reveal">
            <h2>From luminous idea to working evidence</h2>
            <p>The source plans already sketch a route through engineering, participant experience and clinical comparison. Each stage makes the next one more informative.</p>
          </div>
          <div class="research-gates reveal">
            <span>Pressure design</span><span>Oxygen and fire assessment</span><span>Breathing supply</span><span>Material trials</span><span>Accessible entry</span><span>Human factors</span><span>Controls and alarms</span><span>Prototype testing</span><span>Device review</span>
          </div>
          <div class="research-record reveal">
            <span class="status-mark status-future">Research sequence</span>
            <p>One route begins with material samples, pressure modelling, oxygen and fire assessment, controls and accessibility trials. Prototype testing then informs intended use, device evidence and a human study shaped with participants and health professionals.</p>
          </div>
        </div>
      </section>

      <section class="world-section geode-method-section">
        <div class="wrap section-heading reveal"><h2>How a future study would learn</h2><p>The study plan connects clear comparisons, meaningful measures and participant choice with the declared research direction.</p></div>
        <div class="wrap geode-method-grid">
          <article class="geode-method-card reveal"><span>01</span><h3>Start with a baseline</h3><p>The proposed study begins with measures that matter to participants: attention, sleep, day-to-day function, comfort and their own sense of restoration. Measures and follow-up times would be agreed before sessions.</p></article>
          <article class="geode-method-card reveal"><span>02</span><h3>Compare the ingredients</h3><p>The proposed design lays out comparisons between suitable controls and professionally supervised oxygen sessions, followed by light, sound and chosen reflection. Participants, clinicians and ethics reviewers would shape the final study methods.</p></article>
          <article class="geode-method-card reveal"><span>03</span><h3>Learn person by person</h3><p>Optional, owner-held records would help explore which session features suit which people. Future group results would sit beside comfort, accessibility and unwanted effects, then inform the next design.</p></article>
        </div>
        <div class="wrap geode-method-links reveal"><a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/resources/guidance/understanding-evidence-requirements-market-authorisation-medical-devices">Medical-device evidence pathway <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/resources/resource/guidance/australian-clinical-trial-handbook">Australian clinical trial handbook <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://www.nhmrc.gov.au/research-policy/ethics/national-statement-ethical-conduct-human-research">Human research ethics <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://pubmed.ncbi.nlm.nih.gov/32589613/">A healthy-ageing research lead <span aria-hidden="true">↗</span></a></div>
        <div class="wrap geode-session-arc reveal">
          <h3>The source's sixty-session research arc</h3>
          <p>The Aura Geode draft sketches three movements. Their length and methods remain for future participants, clinicians and researchers to shape together: learn what a person experiences, test a tailored combination, then check whether the change holds.</p>
          <div class="geode-arc-phases">
            <div><strong>Sessions 1-20</strong><span>Explore how each person responds to different sensory and atmosphere settings.</span></div>
            <div><strong>Sessions 21-40</strong><span>Study combinations chosen from that person's earlier feedback and agreed measures.</span></div>
            <div><strong>Sessions 41-60</strong><span>Compare results, follow up on daily-life effects and test which ingredients contributed.</span></div>
          </div>
          <p>Optional biological samples and an owner-held digital record add another layer of learning when the people involved choose those questions and permissions.</p>
        </div>
      </section>

      <section class="world-section geode-field-section" id="geode-wider-fields">
        <div class="wrap section-heading reveal"><h2>A wider field of healing research</h2><p>Better measurement is bringing movement, tissue repair, sound, food, light and personal expectation into clearer view. Each study below offers its own question for the wider de-slop landscape and future Geode work.</p></div>
        <div class="wrap geode-field-grid">
          <article class="geode-field-card reveal"><span>01</span><h3>Oxygen and tissue repair</h3><p>A review of eighteen trials found signs of benefit from hyperbaric oxygen therapy for selected late radiation tissue injuries. A future Geode study could define a suitable group, then follow repair and comfort over time.</p><a href="https://pubmed.ncbi.nlm.nih.gov/37585677/">Read the completed trial review <span aria-hidden="true">↗</span></a></article>
          <article class="geode-field-card reveal"><span>02</span><h3>Movement beyond the chamber</h3><p>A completed trial of 889 people reported longer disease-free survival after a structured exercise programme following colon cancer chemotherapy. Chosen movement has a meaningful place in the broader wellbeing story.</p><a href="https://pubmed.ncbi.nlm.nih.gov/40450658/">Read the completed exercise trial <span aria-hidden="true">↗</span></a></article>
          <article class="geode-field-card reveal"><span>03</span><h3>Sound and felt experience</h3><p>In a small randomised crossover study, a vibroacoustic music session improved immediate wellbeing compared with rest for people with cancer. The Geode plan could compare chosen sound and gentle vibration alongside comfort and sensor readings.</p><a href="https://pubmed.ncbi.nlm.nih.gov/30219444/">Read the completed sound study <span aria-hidden="true">↗</span></a></article>
          <article class="geode-field-card reveal"><span>04</span><h3>Food and gut ecology</h3><p>A small combined-treatment study in colorectal cancer adds an early human lead for the microbiome. Food, gut measures and personal routines could become distinct questions in the wider wellbeing programme, alongside specialist care where relevant.</p><a href="https://pubmed.ncbi.nlm.nih.gov/38024475/">Read the early clinical study <span aria-hidden="true">↗</span></a></article>
          <article class="geode-field-card reveal"><span>05</span><h3>Light with a defined purpose</h3><p>Clinical photodynamic therapy joins a light-sensitive medicine with targeted light for selected conditions. The Geode's ambient light is a different research question, inviting clear settings and measures of comfort, attention and experience.</p><a href="https://www.cancer.gov/about-cancer/treatment/types/photodynamic-therapy">Explore clinical light treatment <span aria-hidden="true">↗</span></a></article>
          <article class="geode-field-card reveal"><span>06</span><h3>Expectation and self-reflection</h3><p>In a completed trial of 262 adults with irritable bowel syndrome, an openly described placebo group reported greater symptom improvement than a no-pill group. That offers a thoughtful model for studying personal meaning and expectation openly.</p><a href="https://pubmed.ncbi.nlm.nih.gov/33605656/">Read the completed mind-body trial <span aria-hidden="true">↗</span></a></article>
        </div>
        <div class="wrap geode-field-next reveal"><p>The Geode-to-MACRO draft imagines many combinations of materials, atmosphere, light, sound and reflection. A future programme could begin with one well-described ingredient at a time, then study selected combinations with chosen participants and clear measures.</p><a class="faceted-link faceted-link-light" href="../docs/research-deep-dive.md">Read the deeper source review <span aria-hidden="true">→</span></a></div>
      </section>

      <section class="world-section geode-sensing-section" id="geode-sensing">
        <div class="wrap geode-sensing-stage">
          <div class="reveal"><h2>Sensing what matters to the person</h2><p class="large-copy">The research plan brings together the chamber, the body and the person's own experience. Each proposed measure has a purpose and a place in a future study.</p><p>Planned engineering tests cover chamber pressure, breathing-gas flow and composition, temperature, humidity, oxygen levels and alarms. Proposed participant measures include heart rate, breathing, movement, sleep, optional brain-wave readings, biological samples and the person's own account. Equipment placement and use remain part of chamber design and study review.</p><h3>A proposed mind-over-matter coefficient</h3><p>Luke's proposed coefficient puts the relationship between expectation, personal meaning and observed change into a future study design. The plan is to record expectations beforehand, compare suitable groups and look at measured and self-reported outcomes together, building an evidence base for the new measure.</p></div>
          <figure class="reveal"><img src="../assets/images/geode-local-twin.webp" alt="Concept artwork of a person reflecting at an owner-held computer after a chamber session, with a visual personal digital twin on screen." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Concept scene: reflection and selected post-session records would stay with the person on their own hardware.</figcaption></figure>
        </div>
      </section>

      <section class="world-section geode-song-section">
        <div class="wrap geode-song-stage">
          <figure class="geode-song-image reveal"><img src="../assets/images/geode-prototype-modular-exit.webp" alt="Concept design of an adult stepping out of a modular transparent chamber while a professional reviews the external monitoring screen." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Modular arrival and exit concept. The imagined monitoring equipment sits outside the chamber.</figcaption></figure>
          <div class="reveal">
            <h2><em>60 Days Set in Stone</em> gives the research a human interior</h2>
            <p class="large-copy">The hyperbaric oxygen therapy song imagines sixty sessions of pressure, measurement, reflection and digital-twin formation. Its arc gives the research a vivid question: how does a sustained, personally meaningful experience change what people notice and measure over time?</p>
            <span class="status-mark status-art">Art beside evidence</span>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="../shared-wellbeing/#three-spaces">Shared wellbeing pathways <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/aura-geode/">The wider Aura Geode project <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "your-digital-self",
    key: "your-digital-self",
    title: "Your Digital Self",
    shortTitle: "Your Digital Self",
    description: "A radiant plain-language introduction to a local-first, person-held digital twin and its permissions.",
    heading: "A divine reflection.<br><span>Held close to home.</span>",
    lead: "A digital twin is proposed here as a growing reflection of one person's memories, records, choices and patterns. The person remains the source, the centre and the keeper of the relationship.",
    hero: "hero-your-digital-self.webp",
    heroAlt: "Concept artwork of a person meeting an equal radiant digital reflection beside a small owner-held computing device in an opal observatory.",
    theme: "digital-self",
    primaryHref: "#birth-repair",
    primaryLabel: "Birth and repair",
    secondaryHref: "../aura-geode/",
    secondaryLabel: "Aura Geode research",
    body: `
      <section class="world-section twin-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A companion reflection held by its person</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">The proposed digital twin would grow beside its person. It is designed to help them notice threads across their own life while leaving room for mystery, change and everything that reaches beyond a record.</p>
            <p>The working design begins with owner-held files, understandable patterns and the person's choice about what becomes part of their reflection. A clinical version would follow its own research and device pathway.</p>
            <p>Luke's <a href="https://auraofintelligence.github.io/UNGA81-Luke-Hayes/">Joyful Responsible Abundance contribution</a> connects that personal reflection with a bigger question: how might many different accounts of a good life inform the design of artificial intelligence? Their variety is part of the value.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section twin-meaning-section">
        <div class="wrap twin-meaning-stage">
          <div class="twin-person reveal"><span class="human-light" aria-hidden="true"></span><strong>You</strong><small>living, changing, more than data</small></div>
          <div class="twin-thread reveal" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="twin-reflection reveal"><span class="reflection-light" aria-hidden="true"></span><strong>Your reflection</strong><small>memories, records, choices and patterns</small></div>
        </div>
        <div class="wrap twin-meaning-copy reveal"><p>The person brings lived experience; the proposed model offers one evolving reflection. Understanding, correction and portability keep that relationship in the person's hands.</p></div>
      </section>

      <section class="world-section album-birth-section" id="birth-repair">
        <div class="wrap section-heading reveal">
          <h2>The album offers one inner story for the technology</h2>
          <p>Luke's author meaning forms a clear inner sequence rather than three unrelated song references.</p>
        </div>
        <div class="wrap birth-repair-arc">
          <article class="birth-movement reveal">
            <div class="movement-number">01</div>
            <div class="movement-jewel birth-jewel" aria-hidden="true"><span></span></div>
            <div><h3><em>Primordial Consent 1,2,3, Infinity</em></h3><p>Song 1 is the divine self digital twin being born. A sovereign inner life meets memory, contrast, choice and a new form of reflection.</p><span class="status-mark status-art">Artistic meaning</span></div>
          </article>
          <article class="repair-movement reveal">
            <div class="movement-number">02</div>
            <div class="movement-jewel repair-jewel" aria-hidden="true"><span></span></div>
            <div><h3><em>Kintsugi Protocol</em></h3><p>The self repairs and re-forms. Golden seams honour what happened without freezing the person inside an old fracture.</p><span class="status-mark status-art">Artistic meaning</span></div>
          </article>
          <aside class="pressure-crossing reveal">
            <span class="status-mark status-art">Across the wider album</span>
            <h3><em>60 Days Set in Stone</em> is the hyperbaric oxygen therapy song</h3>
            <p>The complete sixty-session artistic chamber journey lives in the music world. Shared Wellbeing explores access and professional care; Aura Geode explores how the wider research vision could grow.</p>
            <div class="movement-links"><a href="../a-protopian-gambit/#three-movements">The complete album journey</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../aura-geode/">Aura Geode Research</a></div>
          </aside>
        </div>
      </section>

      <section class="world-section local-first-section">
        <div class="wrap local-first-stage">
          <div class="local-first-copy reveal">
            <h2>Local first means the person remains close to the source</h2>
            <p>In the working design, personal files begin on hardware chosen and held by the person. Any later sharing sits behind a separate purpose, permission and relationship.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
          <div class="permission-map reveal" aria-label="Proposed local-first permission relationships">
            <div class="permission-centre"><strong>Person</strong><span>Local hardware</span></div>
            <div class="permission-path permission-coop"><i></i><span>Co-operative<br><small>separate agreement</small></span></div>
            <div class="permission-path permission-care"><i></i><span>Health professional<br><small>separate relationship</small></span></div>
            <div class="permission-path permission-research"><i></i><span>Research project<br><small>separate consent</small></span></div>
          </div>
        </div>
      </section>

      <section class="world-section matrix-studio-section">
        <div class="wrap editorial-split"><div class="section-title reveal"><h2>Aura Matrix Studio starts with self-reflection</h2></div><div class="sovereign-copy reveal"><p class="large-copy">Aura Matrix Studio is an emergent, non-clinical public process for building a personal Aura of Intelligence. It helps someone reflect and organise their own keywords and data for use with different artificial intelligence systems.</p><p>The local-computing path gives that reflection a home on hardware held by the person. A separate clinical research relationship would have its own purpose, measures and permissions.</p><div class="inline-paths"><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/aura-matrix-studio/">Explore Aura Matrix Studio <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/ready-set-co-op-cultural-intelligence-node/index.html">Explore local community compute <span aria-hidden="true">↗</span></a></div></div></div>
      </section>

      <section class="world-section twin-boundaries-section">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Private reflection and shared records are different worlds</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A private journal, a community membership record, a research contribution and a clinical record each carry a different relationship. Combining them by default would undo the personal sovereignty this project celebrates.</p>
          </div>
        </div>
        <div class="wrap boundary-river reveal">
          <div><h3>Held by the person</h3><p>Private memories, reflections, corrections, preferences and locally stored patterns.</p></div>
          <span class="boundary-current" aria-hidden="true"></span>
          <div><h3>Shared by agreement</h3><p>A named purpose, selected information, a known recipient, a chosen period and a visible way out.</p></div>
        </div>
      </section>

      <section class="world-section software-paths-section">
        <div class="wrap software-stage">
          <div class="software-prism reveal" aria-hidden="true"><span></span><span></span></div>
          <div class="software-copy reveal">
            <h2>Two useful directions for personal software</h2>
            <p>A general reflection tool could help a person explore their own records. A clinical tool for diagnosis, monitoring, prediction or treatment would have a more specific evidence and device pathway, shaped by its intended purpose.</p>
            <p>The current public direction begins with local hardware. Earlier Passport and cloud ideas remain available for review as possible, separately chosen relationships.</p>
            <div class="status-constellation"><span class="status-mark status-working">General reflection proposal</span><span class="status-mark status-future">Clinical research pathway</span></div>
            <div class="inline-paths"><a class="faceted-link faceted-link-light" href="https://www.tga.gov.au/resources/guidance/understanding-how-we-regulate-software-based-medical-devices">Australian software guidance <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/aura-direct-hardware/">Aura Direct Hardware <span aria-hidden="true">↗</span></a><a class="faceted-link faceted-link-light" href="https://auraofintelligence.github.io/i-C-infinity-music-universe/">The music universe <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>

      <section class="world-section leaving-section">
        <div class="wrap leaving-stage">
          <h2 class="reveal">A sovereign relationship includes the way out</h2>
          <div class="leaving-words reveal"><span>Visibility</span><span>Correction</span><span>Portability</span><span>Partial sharing</span><span>Ending a connection</span></div>
          <p class="reveal">Hardware choices, data formats, backup, deletion and future portability offer practical design questions for the people building and using the system.</p>
          <span class="status-mark status-future reveal">Design together</span>
        </div>
      </section>
    `
  },
  {
    slug: "public-value",
    key: "public-value",
    title: "Public Value",
    shortTitle: "Public Value",
    description: "A transparent affordability hypothesis for shared regional infrastructure, member pathways and public investment.",
    heading: "Shared abundance.<br><span>Visible arithmetic.</span>",
    lead: "Shared assets, local capability and open learning could place beautiful infrastructure within reach of many more people. The figures below show where a public investment case might begin.",
    hero: "hero-public-value.webp",
    heroAlt: "Imagined civic landscape where several coloured resource currents meet in a transparent shared reservoir and flow toward distinct community spaces.",
    theme: "public-value",
    primaryHref: "#affordability-explorer",
    primaryLabel: "Explore the arithmetic",
    secondaryHref: "../oceania/",
    secondaryLabel: "Many places",
    body: `
      <section class="world-section value-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Beautiful access, visible arithmetic</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">One draft source table places an indicative protocol cost near A$1,000 per member at 35 members. It also shows a separate A$5,000 initial loan per member and A$500 operating fee per 60-day protocol.</p>
            <p>These figures invite a fuller local model: named equipment, staffing, energy, insurance, professional care, repayments and public support. A clear version could show where shared ownership makes the biggest difference.</p>
            <span class="status-mark status-working">Working proposal</span>
          </div>
        </div>
      </section>

      <section class="world-section affordability-section" id="affordability-explorer">
        <div class="wrap affordability-stage" data-affordability>
          <div class="affordability-copy reveal">
            <h2>A separate shared-cost thought experiment</h2>
            <p>These editable fields divide the draft A$35,000 mass-produced chamber target among 35 people. This baseline is separate from the higher-spec Aura Geode, whose price is still open. The result is an illustrative hardware share, not the source table's A$1,000 protocol cost, A$5,000 initial loan per member or A$500 operating fee per 60-day protocol. The full financing model remains open for revision.</p>
            <span class="status-mark status-working">Separate thought experiment</span>
          </div>
          <form class="affordability-controls reveal" aria-label="Editable affordability illustration">
            <label><span>People sharing the asset</span><input type="number" inputmode="numeric" min="1" step="1" value="35" data-value-members></label>
            <label><span>Mass-produced baseline asset amount</span><span class="money-input"><b>A$</b><input type="number" inputmode="decimal" min="0" step="100" value="35000" data-value-total></span></label>
            <label><span>Grant or direct capital contribution</span><span class="money-input"><b>A$</b><input type="number" inputmode="decimal" min="0" step="100" value="0" data-value-support></span></label>
          </form>
          <div class="affordability-result reveal" aria-live="polite">
            <span>Illustrative hardware share per person</span>
            <strong data-value-result>A$1,000</strong>
            <small>Equipment arithmetic only; finance and operating costs remain separate</small>
          </div>
        </div>
      </section>

      <section class="world-section funding-currents-section">
        <div class="wrap section-heading reveal">
          <h2>Different resources carry different relationships</h2>
          <p>A clear model keeps public value, member ownership, finance and everyday operation in separate currents. C-Hour recognises voluntary contribution without turning a person's time into a price.</p>
        </div>
        <div class="wrap funding-currents">
          <article class="funding-current current-members reveal"><span></span><div><h3>Member pathway</h3><p>Shares, prepaid access and local contribution may support ownership and participation.</p></div></article>
          <article class="funding-current current-public reveal"><span></span><div><h3>Public pathway</h3><p>Grants and guarantees may support access, research, resilience, evaluation and open learning.</p></div></article>
          <article class="funding-current current-finance reveal"><span></span><div><h3>Finance pathway</h3><p>Loans and service income sit beside realistic use, energy, maintenance and repayment assumptions.</p></div></article>
          <article class="funding-current current-operation reveal"><span></span><div><h3>Operating pathway</h3><p>Staffing, insurance, professional relationships, maintenance and governance remain visible year after year.</p></div></article>
        </div>
        <div class="wrap proposal-note reveal"><span class="status-mark status-working">Braided proposal</span><p><a href="https://auraofintelligence.github.io/C-Hour-introduction/">C-Hour</a> connects food, movement, shared learning and preventative wellbeing with community contribution. Local groups may shape access to shared experiences through reciprocity. The hour remains a record of voluntary time, while equipment, professional care and operation have separate funding.</p></div>
      </section>

      <section class="world-section public-measures-section">
        <div class="wrap public-measures-stage">
          <div class="public-measures-copy reveal"><h2>Public value is wider than a price tag</h2><p>Local access, skills, resilience, shared ownership, open evidence and regional capability each tell a different part of the story.</p></div>
          <div class="public-measures reveal"><span>Access</span><span>Local skills</span><span>Resilience</span><span>Shared assets</span><span>Open learning</span><span>Community choice</span></div>
        </div>
        <div class="wrap proposal-note reveal"><span class="status-mark status-working">Separate capital path</span><p><a href="https://auraofintelligence.github.io/500-Queens-VC-2026/index.html">500 Queens Venture Capital</a> proposes women-led leadership and investment in useful enterprises, including care and shared infrastructure. Investment and paid work use financial accounts. C-Hour recognises voluntary participation in that wider life through its own non-monetary record.</p></div>
      </section>

      <section class="world-section horizon-section">
        <div class="wrap horizon-stage">
          <div class="horizon-number reveal"><span>Regional planning imagination</span><strong>A$42.35b</strong></div>
          <div class="horizon-copy reveal">
            <h2>A large horizon for public imagination</h2>
            <p>The supplied papers imagine A$42.35 billion across 600,000 chambers, 600,000 saunas, 235,000 kiosks and wider regional supports. That far-horizon scenario could invite staged local pilots, transparent cost records and public evaluation before anyone considers a larger investment.</p>
            <span class="status-mark status-future">Far-horizon imagination</span>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "oceania",
    key: "oceania",
    title: "Many Places Across Oceania",
    shortTitle: "Many Places",
    description: "A regional connection between distinct Oceania places, jurisdictions and community-shaped relationships.",
    heading: "One ocean.<br><span>Many sovereign places.</span>",
    lead: "Oceania is approached here as a family without sameness. Regional learning travels between places while law, culture, environment, data and community authority remain locally grounded.",
    hero: "hero-oceania.webp",
    heroAlt: "Imagined night landscape joining distinct island, coastal, city and inland places through soft currents of light without borders.",
    theme: "oceania",
    primaryHref: "#place-principles",
    primaryLabel: "Regional relationships",
    secondaryHref: "../public-value/",
    secondaryLabel: "Public value",
    body: `
      <section class="world-section oceania-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Many places, many ways of belonging</h2></div>
          <div class="sovereign-copy reveal">
            <p class="large-copy">A Queensland co-operative, a Fijian community initiative and an island health network may share learning while keeping their own terms, relationships and sense of place.</p>
            <p>People in each place bring their own voice, authority and relationships. Local pages could grow through self-authored or source-backed contributions, with the relevant community shaping what belongs there.</p>
          </div>
        </div>
      </section>

      <section class="world-section place-principles-section" id="place-principles">
        <div class="wrap place-principles-stage">
          <div class="place-compass reveal" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="place-principles-copy reveal"><h2>Regional guideposts</h2><p>These relationships travel well because they leave room for difference.</p></div>
          <div class="place-principles reveal">
            <div><strong>Local purpose</strong><span>begins with the people involved</span></div>
            <div><strong>Local law</strong><span>belongs to each jurisdiction</span></div>
            <div><strong>Local permission</strong><span>stays with the relevant people</span></div>
            <div><strong>Shared learning</strong><span>moves through chosen relationships</span></div>
          </div>
        </div>
      </section>

      <section class="world-section regional-starts-section">
        <div class="wrap section-heading reveal"><h2>Regional doorways to explore</h2><p>The supplied papers offer several starting contexts, each with its own people, public records and opportunities.</p></div>
        <div class="wrap regional-starts">
          <article class="regional-start start-queensland reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Queensland</h3><p>Current public co-operative information offers one legal starting context for groups interested in shared assets and local agreements.</p><span class="status-mark status-established">Established public context</span></div></article>
          <article class="regional-start start-fiji reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Fiji and Australia</h3><p>Luke's public Vuvale Union submission imagines shared civic infrastructure and family with room for difference. People and institutions in each place would shape any future relationship.</p><span class="status-mark status-working">Public submission</span></div></article>
          <article class="regional-start start-wider reveal"><span class="place-orb" aria-hidden="true"></span><div><h3>Wider Oceania</h3><p>Local contributors could bring place stories, jurisdiction records, cultural review and participation pathways into this regional picture.</p><span class="status-mark status-future">Locally shaped</span></div></article>
        </div>
      </section>

      <section class="world-section jurisdiction-section">
        <div class="wrap jurisdiction-stage">
          <div class="jurisdiction-copy reveal"><h2>Each place has its own public record</h2><p>Co-operative law, health regulation, privacy, equipment supply, finance, planning, insurance and cultural relationships vary across Oceania.</p></div>
          <div class="jurisdiction-rings reveal">
            <span>Co-operative setting</span><span>Health setting</span><span>Privacy setting</span><span>Equipment setting</span><span>Finance setting</span><span>Cultural relationships</span>
          </div>
          <div class="jurisdiction-note reveal"><span class="status-mark status-future">Built with each place</span><p>A regional directory would grow through local contributions and named sources. The supplied world-cities list offers one geographic starting point for exploration.</p></div>
        </div>
      </section>

      <section class="world-section regional-network-section">
        <div class="wrap regional-network-stage">
          <div class="network-copy reveal"><h2>A future place page begins locally</h2><p>The regional structure leaves room for a place to describe itself. The full connected project family lives on the About page.</p><a class="faceted-link faceted-link-light" href="../about/#project-family">Connected public projects <span aria-hidden="true">→</span></a></div>
          <div class="network-links reveal" aria-label="Future place-page ingredients">
            <div><strong>Self-authored introduction</strong><span>how people in this place describe their own starting point</span></div>
            <div><strong>Current public records</strong><span>law, health, privacy, equipment, finance and planning links</span></div>
            <div><strong>Named local contributors</strong><span>people and organisations who have chosen a visible role</span></div>
            <div><strong>Permission boundaries</strong><span>cultural and organisational relationships relevant to this page</span></div>
            <div><strong>Chosen first assets</strong><span>the shared infrastructure this place is actually exploring</span></div>
            <div><strong>Open questions</strong><span>details still awaiting local discussion, sources or review</span></div>
          </div>
        </div>
      </section>
    `
  },
  {
    slug: "a-protopian-gambit",
    key: "a-protopian-gambit",
    title: "A Protopian Gambit",
    shortTitle: "A Protopian Gambit",
    description: "The album journey through divine digital birth, self-repair and the embodied hyperbaric oxygen therapy song.",
    heading: "Birth. Repair.<br><span>An embodied return.</span>",
    lead: "A Protopian Gambit carries the inner architecture of this project. Song 1 brings the divine self digital twin into being, Kintsugi Protocol repairs the self, and 60 Days Set in Stone holds the hyperbaric oxygen therapy journey.",
    hero: "hero-a-protopian-gambit.webp",
    heroAlt: "Imagined music chamber with three tall portrait phone portals showing digital birth, golden self-repair and concentric chamber rings.",
    theme: "album",
    primaryHref: "#three-movements",
    primaryLabel: "The three movements",
    secondaryHref: "https://auraofintelligence.github.io/i-C-infinity-music-universe/",
    secondaryLabel: "Music universe",
    body: `
      <section class="world-section album-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Music at the heart of the journey</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The songs give emotional shape to birth, self-repair, pressure, reflection and stewardship. They bring lived meaning to the co-operative, health, research and digital-self stories.</p><span class="status-mark status-art">Author's artistic meaning</span></div>
        </div>
      </section>

      <section class="world-section three-movements-section" id="three-movements">
        <div class="wrap three-movements">
          <article class="music-movement movement-birth reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol birth-symbol" aria-hidden="true"></span><p>Portrait video<br><strong>Link to come</strong></p></div></div>
            <div class="music-copy"><span class="music-number">01</span><h2><em>Primordial Consent 1,2,3, Infinity</em></h2><p class="large-copy">Song 1 is about the divine self digital twin being born. Light, memory, consent, difference and form gather around a sovereign new reflection.</p><a href="../your-digital-self/#birth-repair">Birth inside Your Digital Self <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="music-movement movement-repair reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol repair-symbol" aria-hidden="true"></span><p>Portrait video<br><strong>Link to come</strong></p></div></div>
            <div class="music-copy"><span class="music-number">02</span><h2><em>Kintsugi Protocol</em></h2><p class="large-copy">The self repairs and re-forms. Golden seams keep a relationship with what happened while opening fresh possibilities for the person who continues.</p><a href="../your-digital-self/#birth-repair">Repair inside Your Digital Self <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="music-movement movement-pressure reveal">
            <div class="video-phone"><div class="video-screen"><span class="video-symbol pressure-symbol" aria-hidden="true"></span><p>Portrait video<br><strong>Link to come</strong></p></div></div>
            <div class="music-copy"><span class="music-number">03</span><h2><em>60 Days Set in Stone</em></h2><p class="large-copy">This is specifically the hyperbaric oxygen therapy song. It holds a sixty-session artistic chamber journey through pressure, measurement, reflection and digital-twin formation.</p><div class="music-paths"><a href="../shared-wellbeing/">Shared Wellbeing <span aria-hidden="true">→</span></a><a href="../aura-geode/">Geode research <span aria-hidden="true">→</span></a></div></div>
          </article>
        </div>
      </section>

      <section class="world-section art-evidence-section">
        <div class="wrap art-evidence-stage">
          <div class="art-current reveal"><span></span><strong>Artistic meaning</strong><p>felt experience, metaphor, memory, story and personal interpretation</p></div>
          <div class="art-evidence-prism reveal" aria-hidden="true"><i></i></div>
          <div class="evidence-current reveal"><span></span><strong>Health evidence</strong><p>named products, intended uses, current records, qualified care and individual suitability</p></div>
        </div>
        <div class="wrap art-evidence-note reveal"><p>The two currents sit beside one another while remaining different kinds of knowledge.</p></div>
      </section>

      <section class="world-section wider-album-section">
        <div class="wrap section-heading reveal"><h2>The wider album constellation</h2><p>Other songs continue the journey from personal sovereignty into relationship, community making and the long horizon.</p></div>
        <div class="wrap song-constellation reveal">
          <span><strong>The Circle and the Solitary</strong><small>many different personal journeys</small></span>
          <span><strong>Adaptable Yes</strong><small>consent and changing thresholds</small></span>
          <span><strong>Every Border a Bridge</strong><small>Oceania connection, version to be chosen</small></span>
          <span><strong>Not Gods But Architects</strong><small>community stewardship and making</small></span>
          <span><strong>We Go Beyond</strong><small>the Earth and solar-system horizon</small></span>
        </div>
      </section>

      <section class="world-section music-release-section">
        <div class="wrap music-release-stage">
          <div class="release-copy reveal"><h2>The portrait frames are ready for the songs</h2><p>Preferred recordings, versions, captions and public video links will bring the supplied lyrics into these frames.</p></div>
          <div class="release-status reveal"><span class="status-mark status-open">Ready for selected links</span><p>Three portrait video addresses, preferred recording versions and publication permissions.</p></div>
        </div>
      </section>
    `
  },
  {
    slug: "evidence",
    key: "evidence",
    title: "Evidence and Open Questions",
    shortTitle: "Evidence",
    description: "A public source map connecting strong research ideas, published findings, working proposals and questions ready for study.",
    heading: "Curiosity glows.<br><span>Evidence grows with it.</span>",
    lead: "The supplied plans bring together research directions, public records, artistic meaning and ambitious regional ideas. This page shows where each thread begins and how shared learning could deepen it.",
    hero: "hero-evidence.webp",
    heroAlt: "Imagined archive chamber where blank records pass through a clear prism into four distinct coloured evidence streams.",
    theme: "evidence",
    primaryHref: "#evidence-streams",
    primaryLabel: "The four streams",
    secondaryHref: "../about/",
    secondaryLabel: "About and licence",
    body: `
      <section class="world-section evidence-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>Good questions deserve a visible path</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The supplied files bring submissions, business plans, research pathways, architectural ideas, lyrics and supporting data into one conversation. Their different strengths help shape future experiments, practical partnerships and clearer public choices.</p><p>Author clarifications add depth to the album meaning, Aura Matrix Studio and the status of the planned Geode trial.</p></div>
        </div>
      </section>

      <section class="world-section evidence-streams-section" id="evidence-streams">
        <div class="wrap evidence-streams-stage">
          <article class="evidence-stream stream-established reveal"><span class="stream-light" aria-hidden="true"></span><h3>Established information</h3><p>Current public records tied to a named source and date.</p><span class="status-mark status-established">Established information</span></article>
          <article class="evidence-stream stream-working reveal"><span class="stream-light" aria-hidden="true"></span><h3>Working proposal</h3><p>An idea with visible assumptions, relationships and room to change.</p><span class="status-mark status-working">Working proposal</span></article>
          <article class="evidence-stream stream-future reveal"><span class="stream-light" aria-hidden="true"></span><h3>Future research</h3><p>A promising construction, engineering, health, software or social question with room for a defined study.</p><span class="status-mark status-future">Future research</span></article>
          <article class="evidence-stream stream-open reveal"><span class="stream-light" aria-hidden="true"></span><h3>Local design detail</h3><p>A product, partner, cost, jurisdiction, permission or version for the people involved to name together.</p><span class="status-mark status-open">Locally shaped</span></article>
        </div>
      </section>

      <section class="world-section public-records-section">
        <div class="wrap section-heading reveal"><h2>Current Australian public anchors</h2><p>These links give the Queensland starting context a public record beyond the project drafts.</p></div>
        <div class="wrap public-records">
          <a href="https://www.qld.gov.au/community/fair-trading/associations-charities-and-non-for-profits/cooperatives"><strong>Queensland co-operatives</strong><span>registration, rules, forms and operating guidance</span><small>Queensland Government ↗</small></a>
          <a href="https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/risk-fire-during-use-hyperbaric-chambers"><strong>Hyperbaric chamber guidance</strong><span>qualified professionals and appropriately equipped clinics</span><small>Therapeutic Goods Administration, 10 October 2025 ↗</small></a>
          <a href="https://www.tga.gov.au/products/regulations-all-products/about-australian-register-therapeutic-goods-artg/searching-australian-register-therapeutic-goods-artg"><strong>Therapeutic goods register search</strong><span>named products, intended uses and public device records</span><small>Therapeutic Goods Administration ↗</small></a>
          <a href="https://pubmed.ncbi.nlm.nih.gov/32589613/"><strong>A healthy-ageing research lead</strong><span>a small randomised study found gains in attention and processing speed after hyperbaric oxygen sessions</span><small>Hadanny and colleagues, 2020 ↗</small></a>
          <a href="https://www.tga.gov.au/resources/resource/guidance/australian-clinical-trial-handbook"><strong>Australian clinical trial pathway</strong><span>ethics review, study design and pathways for research involving therapeutic goods</span><small>Therapeutic Goods Administration ↗</small></a>
          <a href="https://www.tga.gov.au/resources/guidance/understanding-how-we-regulate-software-based-medical-devices"><strong>Software-based medical devices</strong><span>how intended purpose shapes the regulatory relationship</span><small>Therapeutic Goods Administration ↗</small></a>
          <a href="https://www.health.gov.au/our-work/aged-care-act/about/what-it-means"><strong>Aged Care Act 2024</strong><span>the new Australian aged-care framework that began on 1 November 2025</span><small>Australian Government Department of Health, Disability and Ageing ↗</small></a>
        </div>
      </section>

      <section class="world-section conflict-ledger-section">
        <div class="wrap conflict-ledger-stage">
          <div class="conflict-copy reveal"><h2>Choices that open new work</h2><p>The drafts offer more than one route in several places. Each choice invites a source check, design comparison or local conversation.</p></div>
          <div class="conflict-ledger reveal">
            <div><strong>Affordability</strong><span>A$1,000 indicative protocol cost, A$5,000 initial loan per member and separate A$500 operating fee per 60-day protocol in one 35-member draft table</span></div>
            <div><strong>Health setting</strong><span>earlier home-use language and later supervised clinical setting</span></div>
            <div><strong>Two chamber models</strong><span>A$35,000 draft mass-produced baseline and a higher-spec quartz-sand Aura Geode research concept whose price remains open</span></div>
            <div><strong>Personal data</strong><span>local owner-held files and earlier cloud Passport ideas</span></div>
            <div><strong>Software</strong><span>general reflection and a possible regulated clinical path</span></div>
            <div><strong>Regional model</strong><span>member-financed paths and large public-investment scenarios</span></div>
          </div>
        </div>
      </section>

      <section class="world-section research-paths-section">
        <div class="wrap section-heading reveal"><h2>Three related research paths</h2><p>The person's own experience runs through each path. Their purposes, equipment and study questions remain distinct.</p></div>
        <div class="wrap research-paths-grid">
          <article class="research-path-card reveal"><span>01</span><h3>Aura Matrix Studio</h3><p>An emerging public, non-clinical way to organise personal keywords, records and self-reflection for use with different artificial intelligence systems.</p><small>Public reflection process</small></article>
          <article class="research-path-card reveal"><span>02</span><h3>Aura of Dementia</h3><p>The supplied clinical pathway sketches a separate software study with people living with dementia and their carers: first usability, then a pilot, then a wider comparison. Quality of life, daily function and carer experience are proposed measures.</p><small>Clinical software study plan</small></article>
          <article class="research-path-card reveal"><span>03</span><h3>Aura Geode and personal atmosphere</h3><p>The chamber and Personal Atmosphere Delivery System have their own engineering path: material and pressure tests, breathing-supply design, participant experience and a future clinical study.</p><small>Device and human-study plan</small></article>
        </div>
      </section>

      <section class="world-section source-doorways-section">
        <div class="wrap source-doorways-stage">
          <div class="source-doorway reveal"><h3>Source register</h3><p>The supplied documents reviewed across this public project.</p><a href="../docs/source-register.md">Open the register <span aria-hidden="true">→</span></a></div>
          <div class="source-doorway reveal"><h3>Source audit</h3><p>Shared ground, design alternatives, public research links and choices for later work.</p><a href="../docs/source-audit.md">Open the audit <span aria-hidden="true">→</span></a></div>
          <div class="source-doorway reveal"><h3>Author clarifications</h3><p>Luke's dated explanations where an earlier reading missed the intended meaning.</p><a href="../docs/author-clarifications.md">Open the clarifications <span aria-hidden="true">→</span></a></div>
          <div class="source-doorway reveal"><h3>Research deep dive</h3><p>How the Geode, wider therapies and the separate clinical software plan meet published studies and possible methods.</p><a href="../docs/research-deep-dive.md">Open the research review <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section class="world-section corrections-section">
        <div class="wrap corrections-stage"><div class="correction-prism reveal" aria-hidden="true"><span></span></div><div class="reveal"><h2>New evidence adds light</h2><p>A source update, product record, local review or author clarification may change a page. Repository history preserves the earlier draft alongside the public learning that followed.</p><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops/issues">Share a sourced correction <span aria-hidden="true">↗</span></a></div></div>
      </section>
    `
  },
  {
    slug: "about",
    key: "about",
    title: "About, Connections and Licence",
    shortTitle: "About",
    description: "The project origin, connected public worlds, boundaries, credits and Strange But True Public Source Licence.",
    heading: "An open book.<br><span>Many worlds in orbit.</span>",
    lead: "Oceania Healthy De-Slop Co-ops is a regional public working project by Luke Nathan Hayes. It gathers health, co-operative, local-compute, music and civic ideas while leaving room for specialist sites and locally shaped agreements.",
    hero: "hero-about.webp",
    heroAlt: "Imagined ocean observatory where an unmarked opal book sits beneath a constellation of distinct public project worlds.",
    theme: "about",
    primaryHref: "#project-family",
    primaryLabel: "The project family",
    secondaryHref: "../evidence/",
    secondaryLabel: "Evidence and questions",
    body: `
      <section class="world-section about-opening">
        <div class="wrap editorial-split">
          <div class="section-title reveal"><h2>A regional doorway with room to grow</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">The project explores how beautiful shared infrastructure, private reflection and local computing might gather around each person's dignity. A co-operative offers one possible ownership relationship among many locally shaped paths.</p><p>This public working project gathers proposals and sources. Local groups, clinics, product teams and regional partnerships would bring their own names, decisions and records as those relationships take shape.</p><span class="status-mark status-working">Public working project</span></div>
        </div>
      </section>

      <section class="world-section project-family-section" id="project-family">
        <div class="wrap section-heading reveal"><h2>The connected public project family</h2><p>Each world holds its own purpose, evidence and development history.</p></div>
        <div class="wrap project-orbits">
          <a class="project-orbit orbit-geode reveal" href="https://auraofintelligence.github.io/aura-geode/"><span aria-hidden="true"></span><strong>Aura Geode</strong><small>construction and reflection research</small></a>
          <a class="project-orbit orbit-hardware reveal" href="https://auraofintelligence.github.io/aura-direct-hardware/"><span aria-hidden="true"></span><strong>Aura Direct Hardware</strong><small>local-first hardware and public-interest compute</small></a>
          <a class="project-orbit orbit-dementia reveal" href="https://auraofintelligence.github.io/aura-dementia/"><span aria-hidden="true"></span><strong>Aura of Dementia</strong><small>an early privacy-first care and research concept</small></a>
          <a class="project-orbit orbit-music reveal" href="https://auraofintelligence.github.io/i-C-infinity-music-universe/"><span aria-hidden="true"></span><strong>i C. infinity Music Universe</strong><small>albums, lyrics, songs and videos</small></a>
          <a class="project-orbit orbit-vitality reveal" href="https://auraofintelligence.github.io/straddie-vitality-network-builders/"><span aria-hidden="true"></span><strong>Straddie Vitality Network Builders</strong><small>local wellbeing planning and evidence builders</small></a>
          <a class="project-orbit orbit-strange reveal" href="https://auraofintelligence.github.io/strange-but-true/"><span aria-hidden="true"></span><strong>Strange But True</strong><small>the wider public family and contact doorway</small></a>
          <a class="project-orbit orbit-hardware reveal" href="https://auraofintelligence.github.io/aura-matrix-studio/"><span aria-hidden="true"></span><strong>Aura Matrix Studio</strong><small>non-clinical self-reflection and personal data organisation</small></a>
          <a class="project-orbit orbit-vitality reveal" href="https://auraofintelligence.github.io/ready-set-co-op-cultural-intelligence-node/index.html"><span aria-hidden="true"></span><strong>Ready S.E.T. local compute</strong><small>community-held cultural intelligence node</small></a>
          <a class="project-orbit orbit-dementia reveal" href="https://auraofintelligence.github.io/Anglican-Diocese-82-Claytons-Amity/"><span aria-hidden="true"></span><strong>82 Claytons Road</strong><small>proposed Amity care and research place</small></a>
          <a class="project-orbit orbit-music reveal" href="https://auraofintelligence.github.io/C-Hour-introduction/"><span aria-hidden="true"></span><strong>C-Hour introduction</strong><small>contribution braided with preventative wellbeing</small></a>
          <a class="project-orbit orbit-vitality reveal" href="https://auraofintelligence.github.io/UNGA81-Luke-Hayes/"><span aria-hidden="true"></span><strong>Joyful Responsible Abundance</strong><small>a personal contribution to the 81st United Nations General Assembly</small></a>
          <a class="project-orbit orbit-strange reveal" href="https://auraofintelligence.github.io/500-Queens-VC-2026/index.html"><span aria-hidden="true"></span><strong>500 Queens</strong><small>women's leadership, capital and useful enterprises</small></a>
          <a class="project-orbit orbit-geode reveal" href="https://auraofintelligence.github.io/extreme-matter-atlas/"><span aria-hidden="true"></span><strong>Extreme Matter Atlas</strong><small>crystal structures, materials discovery and questions at the edge</small></a>
        </div>
      </section>

      <section class="world-section site-branches-section">
        <div class="wrap site-branches-stage">
          <div class="branch-copy reveal"><h2>This gateway is designed to branch</h2><p>The regional site holds the shared story. Topics with deep evidence, specialist tools, local governance or substantial media receive their own sites and repositories.</p></div>
          <div class="branch-lines reveal"><span>Regional gateway</span><i></i><span>Local co-operatives</span><i></i><span>Geode research</span><i></i><span>Digital self</span><i></i><span>Music</span><i></i><span>Evidence tools</span></div>
        </div>
      </section>

      <section class="world-section boundaries-section">
        <div class="wrap boundaries-stage">
          <div class="boundary-world public-world reveal"><h3>Public project world</h3><p>Published proposals, source notes, design questions, public submissions, lyrics, artwork, code and release history.</p></div>
          <div class="boundary-gem reveal" aria-hidden="true"><span></span></div>
          <div class="boundary-world private-world reveal"><h3>Personal and relationship-held world</h3><p>Health records, private reflections, digital-twin files, cultural knowledge, consent records and information held through a specific care or community relationship.</p></div>
        </div>
      </section>

      <section class="world-section licence-section">
        <div class="wrap licence-stage">
          <div class="licence-mark reveal" aria-hidden="true"><span></span></div>
          <div class="licence-copy reveal"><h2>A strange but true licence from the outset</h2><p>Original project material is shared under the Strange But True Public Source Licence. Personal, educational, artistic, research, community and other non-commercial exploration is welcomed with attribution. Commercial rights remain reserved to Luke Nathan Hayes.</p><p>The licence text itself remains the reference for its full terms.</p><div class="inline-paths"><a class="faceted-link faceted-link-light" href="../LICENCE.md">Read the public source licence <span aria-hidden="true">→</span></a><a class="faceted-link faceted-link-light" href="https://github.com/auraofintelligence/Oceania-healthy-de-slop-co-ops">View the repository <span aria-hidden="true">↗</span></a></div></div>
        </div>
      </section>

      <section class="world-section credits-section">
        <div class="wrap credits-stage">
          <div class="credits-copy reveal"><h2>Credits and contact</h2><p>Concept, source material, lyrics and project direction: Luke Nathan Hayes. Website structure, visual system, code and generated concept artwork were developed collaboratively with OpenAI Codex. Full image prompts and preserved originals are kept in the repository.</p></div>
          <div class="credits-links reveal"><a href="../docs/image-prompts.md">Image prompts and preserved originals <span aria-hidden="true">→</span></a><a href="../docs/source-register.md">Supplied source register <span aria-hidden="true">→</span></a><a href="https://auraofintelligence.github.io/strange-but-true/">Strange But True contact doorway <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    `
  },
  {
    slug: "site-map",
    key: "site-map",
    title: "Site Map",
    shortTitle: "Site Map",
    description: "A human guide to every page, project world and visitor path across Oceania Healthy De-Slop Co-ops.",
    heading: "Every world.<br><span>One luminous constellation.</span>",
    lead: "Ten project worlds hold co-operative ideas, shared wellbeing, personal digital life, music, evidence and regional relationships. This eleventh doorway gathers them in one clear view.",
    hero: "hero-site-map.webp",
    heroAlt: "Concept artwork of eleven equal jewel-like worlds joined by luminous paths above an ocean horizon.",
    theme: "site-map",
    primaryHref: "#whole-constellation",
    primaryLabel: "See every world",
    secondaryHref: "#choose-a-path",
    secondaryLabel: "Choose a path",
    body: `
      <section class="world-section map-opening">
        <div class="wrap map-opening-stage">
          <div class="section-title reveal"><h2>Ten worlds and one shared guide</h2></div>
          <div class="sovereign-copy reveal"><p class="large-copy">Begin anywhere. Wander by curiosity, follow a familiar theme or move through the numbered story. Every page opens into the others without placing one person's journey above another.</p><p>The Site Map is a people-friendly guide to the whole public project. A separate machine-readable map supports search services.</p></div>
          <div class="map-compass reveal" aria-hidden="true"><span class="map-compass-core"><strong>10 + 1</strong><small>connected pages</small></span><i></i><i></i><i></i><i></i></div>
        </div>
      </section>

      <section class="world-section map-constellation-section" id="whole-constellation">
        <div class="wrap section-heading reveal"><h2>The whole constellation</h2><p>Full page names and short descriptions sit together here, including this guide.</p></div>
        <nav class="wrap map-groups" aria-label="Every public page">
          <div class="map-group map-group-welcome reveal" role="group" aria-label="Welcome">
            <div class="map-group-heading"><span>Welcome</span><h3>Begin with your own light</h3></div>
            <div class="map-worlds">
              <a class="map-world map-world-home" href="../"><span>01</span><strong>Home</strong><p>A radiant welcome to the regional project and every connected world.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-shared reveal" role="group" aria-label="Community and shared infrastructure">
            <div class="map-group-heading"><span>Community and shared infrastructure</span><h3>Shape what is shared</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../shared-wellbeing/"><span>02</span><strong>Shared Wellbeing</strong><p>Food, movement, sauna, professionally supported oxygen care and reflection.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../co-operative-paths/"><span>06</span><strong>Co-operative Paths</strong><p>Local purpose, membership, ownership and place-shaped agreements.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../public-value/"><span>07</span><strong>Public Value</strong><p>Shared-cost illustrations and ways to explore a public investment case.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../oceania/"><span>08</span><strong>Many Places Across Oceania</strong><p>Regional connection while law, culture, permission and terms stay with each place.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-personal reveal" role="group" aria-label="Personal and future research">
            <div class="map-group-heading"><span>Personal and future research</span><h3>Meet the Geode and digital self</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../aura-geode/"><span>03</span><strong>Aura Geode Research</strong><p>A joined-up chamber vision with clear engineering, sensory and human-study pathways.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../your-digital-self/"><span>04</span><strong>Your Digital Self</strong><p>An owner-held digital twin, private reflection and sharing through chosen relationships.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-music reveal" role="group" aria-label="Music and meaning">
            <div class="map-group-heading"><span>Music and meaning</span><h3>Hear the inner journey</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../a-protopian-gambit/"><span>05</span><strong>A Protopian Gambit</strong><p>Divine digital birth, Kintsugi self-repair and the sixty-session hyperbaric oxygen therapy story.</p><small>Open world <b aria-hidden="true">→</b></small></a>
            </div>
          </div>

          <div class="map-group map-group-record reveal" role="group" aria-label="Evidence and relationships">
            <div class="map-group-heading"><span>Evidence and relationships</span><h3>Read the record and wider context</h3></div>
            <div class="map-worlds">
              <a class="map-world" href="../evidence/"><span>09</span><strong>Evidence and Open Questions</strong><p>Research leads, public sources and design questions ready to investigate.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world" href="../about/"><span>10</span><strong>About, Connections and Licence</strong><p>Project origin, connected public worlds, boundaries, credits and licence.</p><small>Open world <b aria-hidden="true">→</b></small></a>
              <a class="map-world map-world-current" href="./" aria-current="page"><span>11</span><strong>Site Map</strong><p>The page that gathers every world and visitor path in one place.</p><small>You are here</small></a>
            </div>
          </div>
        </nav>
      </section>

      <section class="world-section map-pathways-section" id="choose-a-path">
        <div class="wrap section-heading reveal"><h2>Your path, at your pace</h2><p>These are guideposts rather than fixed routes. Each line begins with a different interest.</p></div>
        <div class="wrap map-pathways">
          <article class="map-pathway reveal"><h3>Shared wellbeing close to home</h3><p>Explore warmth, rest, supervised care relationships, shared access and the public record beside them.</p><nav aria-label="Shared wellbeing path"><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../co-operative-paths/">Co-operative Paths</a><a href="../public-value/">Public Value</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>A local co-operative taking shape</h3><p>Follow local purpose, membership, ownership, affordability and place-specific agreements.</p><nav aria-label="Local co-operative path"><a href="../co-operative-paths/">Co-operative Paths</a><a href="../public-value/">Public Value</a><a href="../oceania/">Many Places</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>My digital self, held by me</h3><p>Meet the owner-held digital twin, its birth and repair story, and the research ideas around it.</p><nav aria-label="Digital self path"><a href="../your-digital-self/">Your Digital Self</a><a href="../a-protopian-gambit/">A Protopian Gambit</a><a href="../aura-geode/">Aura Geode</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>Aura Geode research</h3><p>Explore the chamber structure, personal atmosphere, sensory experience and the planned study path.</p><nav aria-label="Aura Geode research path"><a href="../aura-geode/">Aura Geode</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../your-digital-self/">Your Digital Self</a><a href="../evidence/">Evidence</a></nav></article>
          <article class="map-pathway reveal"><h3>The album's inner journey</h3><p>Move through the divine digital twin's birth, Kintsugi self-repair and the hyperbaric oxygen therapy story. Art and research each add their own kind of light.</p><nav aria-label="Album path"><a href="../a-protopian-gambit/">A Protopian Gambit</a><a href="../your-digital-self/">Your Digital Self</a><a href="../shared-wellbeing/">Shared Wellbeing</a><a href="../aura-geode/">Aura Geode</a></nav></article>
          <article class="map-pathway reveal"><h3>Sources and connected projects</h3><p>See the source trail, research choices, wider C-Hour and leadership connections, project family and public licence.</p><nav aria-label="Evidence path"><a href="../evidence/">Evidence</a><a href="../#wider-braid">Wider braid</a><a href="../about/">About and Licence</a></nav></article>
        </div>
      </section>

      <section class="world-section map-record-section">
        <div class="wrap map-record-stage">
          <div class="reveal"><h2>Every idea keeps its own label</h2><p>Published information, working proposals, future research and locally shaped details each have a visible place across the site.</p><div class="map-statuses"><span class="status-mark status-established">Published information</span><span class="status-mark status-working">Working proposal</span><span class="status-mark status-future">Future research</span><span class="status-mark status-open">Open for local choice</span></div></div>
          <div class="map-record-links reveal"><a href="../evidence/">Explore the evidence world <span aria-hidden="true">→</span></a><a href="../sitemap.xml">Machine-readable sitemap <span aria-hidden="true">→</span></a></div>
        </div>
      </section>
    `
  }
];

const available = new Set(pages.map((page) => page.key));
const primaryKeys = new Set(["home", "co-operative-paths", "shared-wellbeing", "your-digital-self", "evidence", "about", "site-map"]);

function pageHref(slug, prefix = "") {
  return slug ? prefix + slug + "/" : prefix || "./";
}

function renderBrand(prefix) {
  return `
    <a class="brand" href="${pageHref("", prefix)}" aria-label="Oceania Healthy De-Slop Co-ops home">
      <img class="brand-gem" src="${prefix}assets/icons/favicon-192.png?v=20260831-header-gems" alt="" width="54" height="54" decoding="async">
      <span class="brand-words">Oceania Healthy<br>De-Slop Co-ops</span>
    </a>`;
}

function renderHeader(page, prefix) {
  const pageInPrimaryNavigation = primaryKeys.has(page.key);
  const menuButtonLabel = pageInPrimaryNavigation ? "All worlds" : page.shortTitle;
  const primary = worlds
    .filter((world) => available.has(world[0]) && primaryKeys.has(world[0]))
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
        <button class="world-menu-button${pageInPrimaryNavigation ? "" : " is-current-world"}" type="button" aria-expanded="false" aria-controls="world-menu" aria-label="All worlds. Current page: ${page.shortTitle}">
          <span>${menuButtonLabel}</span><i aria-hidden="true"></i>
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
          <a href="${pageHref("evidence", prefix)}">Evidence</a>
          <a href="${pageHref("about", prefix)}">About and Licence</a>
          <a href="${pageHref("site-map", prefix)}">Site Map</a>
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

const journeyOrder = ["home", "shared-wellbeing", "aura-geode", "your-digital-self", "a-protopian-gambit", "co-operative-paths", "public-value", "oceania", "evidence", "about", "site-map"];

function renderJourney(pageIndex, prefix) {
  const current = pages[pageIndex];
  const position = journeyOrder.indexOf(current.key);
  if (position < 0) throw new Error(`Page missing from journey: ${current.key}`);
  const previous = pages.find((page) => page.key === journeyOrder[(position - 1 + journeyOrder.length) % journeyOrder.length]);
  const following = pages.find((page) => page.key === journeyOrder[(position + 1) % journeyOrder.length]);
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
    <link rel="icon" href="${prefix}assets/icons/favicon.ico?v=20260831-connected-gems" type="image/x-icon" sizes="16x16 32x32 48x48">
    <link rel="icon" href="${prefix}assets/icons/favicon-32x32.png?v=20260831-connected-gems" type="image/png" sizes="32x32">
    <link rel="icon" href="${prefix}assets/icons/favicon-16x16.png?v=20260831-connected-gems" type="image/png" sizes="16x16">
    <link rel="icon" href="${prefix}assets/icons/favicon-192.png?v=20260831-connected-gems" type="image/png" sizes="192x192">
    <link rel="apple-touch-icon" href="${prefix}assets/icons/apple-touch-icon.png?v=20260831-connected-gems" type="image/png" sizes="180x180">
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
    <link rel="stylesheet" href="${prefix}assets/css/tokens.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/base.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/layout.css?v=20260831-header-gems">
    <link rel="stylesheet" href="${prefix}assets/css/components.css?v=20260830-site-map">
    <link rel="stylesheet" href="${prefix}assets/css/pages.css?v=20260924-supplier-reference">
    <link rel="stylesheet" href="${prefix}assets/css/motion.css?v=20260830-site-map">
    <script src="${prefix}assets/js/site.js?v=20260830-site-map" defer></script>
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
  .sort((a, b) => journeyOrder.indexOf(a.key) - journeyOrder.indexOf(b.key))
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
