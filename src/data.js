export const CATEGORIES = [
  { id: 'preseed', label: 'Pre-Seed VC', color: '#ED7C25', emoji: '🚀' },
  { id: 'nondilutive', label: 'Non-Dilutive (US)', color: '#22c55e', emoji: '🏛️' },
  { id: 'fellowships', label: 'Fellowships', color: '#818cf8', emoji: '🎓' },
  { id: 'awards', label: 'Awards & Nominations', color: '#f472b6', emoji: '🏅' },
  { id: 'competitions', label: 'Prizes & Competitions', color: '#F3AC41', emoji: '🏆' },
  { id: 'india', label: 'India Track (INSPIN)', color: '#fb923c', emoji: '🇮🇳' },
  { id: 'canada', label: 'Canada Track', color: '#ef4444', emoji: '🍁' },
  { id: 'expertwitness', label: 'Expert Witness', color: '#a78bfa', emoji: '⚖️' },
  { id: 'consulting', label: 'Expert Networks', color: '#38bdf8', emoji: '💡' },
];

export const OPPORTUNITIES = [

  // ── PRE-SEED VC ──────────────────────────────────────────────────────────
  {
    id: 'starburst',
    category: 'preseed',
    name: 'Starburst Ventures',
    amount: 'Up to $1M',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Send deck to pitch@starburst.vc — no warm intro needed. Subject: Pre-Seed | MSS | Propulsion and Orbital Maneuver. Pitch MSS, not II LLC.',
    deepResearchPrompt: 'Research Starburst Ventures (starburst.vc) for 2026. Fund size, recent investments, open submission policy, portfolio companies in space propulsion or orbital maneuver, ITAR/CFIUS stance. Find competing A&D pre-seed funds that accept cold pitches.',
    notes: 'Morpheus Space and Outpost are closest portfolio analogs. Natalya Bailey (Accion Systems) probes propulsion physics. Jacqueline Tame probes ITAR. File one provisional patent before pitching.',
    url: 'https://www.starburst.vc',
    entity: 'MSS'
  },
  {
    id: 'boost',
    category: 'preseed',
    name: 'Boost.vc',
    amount: '$500K',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Apply via boost.vc. Deep tech, no warm intro.',
    deepResearchPrompt: 'Research Boost.vc for 2026. Application process, batch schedule, portfolio in aerospace/defense/robotics/propulsion. What do they look for pre-prototype?',
    notes: 'Good fallback alongside Starburst.',
    url: 'https://www.boost.vc',
    entity: 'MSS or II LLC'
  },
  {
    id: 'shieldcapital',
    category: 'preseed',
    name: 'Shield Capital',
    amount: 'Seed+',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Apply via shieldcap.com. Former military GPs. Defense and national security.',
    deepResearchPrompt: 'Research Shield Capital 2026. Fund size, check range, portfolio, GP backgrounds, cold outreach policy.',
    notes: 'Best for Inspired Defense vehicle once incorporated.',
    url: 'https://shieldcap.com',
    entity: 'Inspired Defense (to be formed)'
  },
  {
    id: 'lockheedventures',
    category: 'preseed',
    name: 'Lockheed Martin Ventures',
    amount: 'Variable',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Submit via lockheedmartin.com/ventures. Autonomous systems, advanced manufacturing.',
    deepResearchPrompt: 'Research Lockheed Martin Ventures 2026. Investment thesis, check size, cold submission process. Portfolio in propulsion, autonomy, electric motors.',
    notes: 'Strategic: pilot customers and acquisition pathway.',
    url: 'https://www.lockheedmartin.com/en-us/who-we-are/lockheed-martin-ventures.html',
    entity: 'MSS or II LLC'
  },
  {
    id: 'inqtel',
    category: 'preseed',
    name: 'In-Q-Tel (CIA Venture Fund)',
    amount: 'Variable',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Submit via iqt.org/submit-your-technology. Dual-use angle: UDC framework for intelligence/defense autonomy. ITAR-safe entity required.',
    deepResearchPrompt: 'Research In-Q-Tel for 2026. Investment thesis, check size, technology areas of current interest, how they evaluate dual-use deep tech, whether a solo founder LLC is competitive, portfolio companies in autonomy or motor controls.',
    notes: 'CIA-backed. Dual-use autonomy and perception angle. Very patient capital, long evaluation.',
    url: 'https://www.iqt.org',
    entity: 'II LLC'
  },

  // ── NON-DILUTIVE (US) ────────────────────────────────────────────────────
  {
    id: 'sam-validation',
    category: 'nondilutive',
    name: 'SAM.gov Validation — BLOCKS EVERYTHING',
    amount: 'Unlocks all federal funding',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'ASAP — do this today',
    action: 'Check UEI D4YUPMXSEKJ5 at sam.gov. One notarization step outstanding. Complete it immediately. This blocks every SBIR, DOE, DARPA, NASA, DIU submission.',
    deepResearchPrompt: 'Research SAM.gov external validation notarization step 2026. What is required, which government office, how long, is there an expedite pathway?',
    notes: 'HIGHEST LEVERAGE SINGLE ACTION. Nothing federal moves without this.',
    url: 'https://sam.gov',
    entity: 'MSS'
  },
  {
    id: 'nsf-sbir',
    category: 'nondilutive',
    name: 'NSF SBIR Phase I — Project Pitch',
    amount: '$305K → $1.25M Phase II',
    status: 'inprogress',
    priority: 2,
    warmIntro: false,
    deadline: 'Pitch portal open NOW. Full proposal: July 27, 2026',
    action: 'MSS pitch REV07 nearly done. Shardul fills Q15 (3 partner names) and Q16 (2 advisor names). Submit at seedfund.nsf.gov. If invited, full proposal due July 27. Solicitation NSF 26-510.',
    deepResearchPrompt: 'Research NSF SBIR 26-510 2026. Current pitch window open/close dates, Q13-Q16 narrative requirements, rejection reasons, invitation rate, time from pitch to invite. Research the new Strategic Breakthrough Awards tier (up to $30M).',
    notes: 'No prior NSF award. No cost share. Strongest topic: Space (SP). BESM also fits Power Management under II LLC separately.',
    url: 'https://seedfund.nsf.gov',
    entity: 'MSS (+ II LLC separately for BESM)'
  },
  {
    id: 'doe-sbir',
    category: 'nondilutive',
    name: 'DOE SBIR — VTO + AMMTO Topics',
    amount: '$200K Phase I',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Release 3 expected mid-2026 — watch energy.gov/sbir',
    action: 'Monitor energy.gov/sbir for Release 3. VTO = electric motors, non-rare-earth magnets, traction drives (perfect for BESM/PR020). AMMTO = advanced manufacturing, AI for manufacturing. Free Phase 0 assistance for first-timers.',
    deepResearchPrompt: 'Research DOE SBIR 2026 Release 3. Expected opening date, exact VTO and AMMTO topic numbers for rare-earth-free motors, Phase 0 assistance program details, winning proposal characteristics, timeline to award.',
    notes: '5/5 topic match for BESM. Apply under II LLC. Plan 2-3 months self-funding before first payment.',
    url: 'https://www.energy.gov/science/sbir',
    entity: 'II LLC'
  },
  {
    id: 'arpa-e',
    category: 'nondilutive',
    name: 'ARPA-E OPEN Program',
    amount: '$1M–$10M',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Periodic FOAs — register at arpa-e-foa.energy.gov',
    action: 'Register at arpa-e-foa.energy.gov. Watch for OPEN solicitation. Position QESM rare-earth-free motor as disruptive transportation electrification technology. Bar is high but concept is genuinely DARPA-grade.',
    deepResearchPrompt: 'Research ARPA-E OPEN program 2026. When is the next OPEN solicitation expected, what are current focused program areas, how does a solo LLC compete against universities, what is the typical award size and timeline, any recent awardees in electric machines or rare-earth alternatives.',
    notes: 'Highest dollar non-dilutive opportunity. ~5% success rate. QESM/rare-earth-free is exactly the transformative energy tech ARPA-E funds.',
    url: 'https://arpa-e.energy.gov',
    entity: 'II LLC'
  },
  {
    id: 'darpa-baa',
    category: 'nondilutive',
    name: 'DARPA Office-Wide BAA',
    amount: '$500K–$5M',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Rolling — check sam.gov for open DARPA BAAs',
    action: 'Submit white paper to current DARPA TTO or I2O BAA. UDC framework + autonomous systems angle. White paper first, no full proposal until invited.',
    deepResearchPrompt: 'Research open DARPA BAAs 2026 for autonomous systems, control theory, power electronics, space propulsion. White paper format, PM expectations vs NSF, solo founder competitiveness, typical timeline from white paper to award.',
    notes: 'UDC framework is genuinely DARPA-grade. High risk high reward.',
    url: 'https://www.darpa.mil/work-with-us/opportunities',
    entity: 'II LLC or MSS'
  },
  {
    id: 'doe-sbv',
    category: 'nondilutive',
    name: 'DOE Small Business Vouchers (SBV)',
    amount: '$50K–$300K + lab access',
    status: 'todo',
    priority: 6,
    warmIntro: false,
    deadline: 'Periodic solicitations — check sbv.org',
    action: 'Apply at sbv.org. Fund small business collaborations with national labs. Partner with Argonne or Oak Ridge for BESM motor design simulation and testing.',
    deepResearchPrompt: 'Research DOE Small Business Vouchers 2026. Next solicitation opening, application process, which national labs are accessible, what kind of work qualifies, whether simulation-only work (no hardware) qualifies, timeline from application to award.',
    notes: 'Unlocks national lab equipment and expertise without equity. ORNL and Argonne are perfect for BESM characterization.',
    url: 'https://sbv.org',
    entity: 'II LLC'
  },
  {
    id: 'afwerx',
    category: 'nondilutive',
    name: 'AFWERX Open Topic SBIR',
    amount: '$75K–$150K',
    status: 'todo',
    priority: 7,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Register at afsbirsttr.us. Autonomy or perception topic via PR015 or PR041.',
    deepResearchPrompt: 'Research AFWERX Open Topic SBIR 2026. Current open topics, deadlines, what separates funded vs unfunded proposals, typical timeline.',
    notes: 'Faster turnaround than standard DoD SBIR.',
    url: 'https://afsbirsttr.us',
    entity: 'MSS or II LLC'
  },
  {
    id: 'diu-cso',
    category: 'nondilutive',
    name: 'DIU Commercial Solutions Opening',
    amount: '$1M–$5M',
    status: 'todo',
    priority: 8,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'One-page white paper on autonomous perception or propulsion. Submit at diu.mil/work-with-us/open-solicitations.',
    deepResearchPrompt: 'Research DIU CSO 2026. Currently open CSOs, winning white paper characteristics, time from paper to award, OT authority contract ranges.',
    notes: 'No prototype required. Fast decision cycle.',
    url: 'https://www.diu.mil/work-with-us/open-solicitations',
    entity: 'MSS or II LLC'
  },
  {
    id: 'deter-ara',
    category: 'nondilutive',
    name: 'DETER ARA (AFRL Directed Energy)',
    amount: 'Variable',
    status: 'todo',
    priority: 9,
    warmIntro: false,
    deadline: 'Open through Aug 10, 2027',
    action: 'Submit white paper via SAM.gov. White paper first. DE source components angle fits PR020 power electronics.',
    deepResearchPrompt: 'Research DETER ARA AFRL 2026. SAM.gov opportunity number, white paper template, evaluation criteria, typical award size, how power electronics fits DE source components.',
    notes: 'Long window. Low friction entry.',
    url: 'https://sam.gov',
    entity: 'II LLC'
  },
  {
    id: 'cloud-credits',
    category: 'nondilutive',
    name: 'Corporate Cloud Credits (NVIDIA, AWS, Google, Microsoft)',
    amount: '$100K–$350K each',
    status: 'todo',
    priority: 10,
    warmIntro: false,
    deadline: 'Rolling — apply to all simultaneously',
    action: 'Apply to: NVIDIA Inception (inception.nvidia.com), AWS Activate (aws.amazon.com/activate), Google for Startups (cloud.google.com/startup), Microsoft for Startups (microsoft.com/startups). All free, all rolling, all give compute credits.',
    deepResearchPrompt: 'Research startup cloud credit programs 2026 for NVIDIA Inception, AWS Activate, Google for Startups, Microsoft for Startups. What does each give, what are eligibility requirements, how long does approval take, can a solo founder LLC get the highest tier?',
    notes: 'Zero equity, zero cost share. Immediate. $100K-350K in compute per program. Apply to all four this week.',
    url: 'https://inception.nvidia.com',
    entity: 'II LLC'
  },

  // ── FELLOWSHIPS ──────────────────────────────────────────────────────────
  {
    id: 'activate',
    category: 'fellowships',
    name: 'Activate Fellowship (Cyclotron Road / LBNL)',
    amount: '$300K+ over 2 years',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: '~Oct 2026',
    action: 'Apply at activate.org. Two-year embedded fellowship at national lab. No equity, no cost share. Position BESM/QESM rare-earth-free motor as the core technology.',
    deepResearchPrompt: 'Research Activate Fellowship 2026. Exact deadline, what fellowship provides beyond cash (lab access, mentorship, industry connections), acceptance rate, recent fellows in motor controls or aerospace, PR (non-citizen) eligibility, how to position rare-earth-free motor project.',
    notes: '5/5 priority. Hardware-forward. Best for BESM/USM framework.',
    url: 'https://www.activate.org',
    entity: 'II LLC'
  },
  {
    id: 'innovation-crossroads',
    category: 'fellowships',
    name: 'Innovation Crossroads (ORNL/DOE)',
    amount: '$350K+ over 2 years',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Fall 2026',
    action: 'Apply at innovationcrossroads.ornl.gov. Oak Ridge embedded fellowship. Highest total value of all fellowships. Energy and manufacturing focus aligns perfectly with BESM.',
    deepResearchPrompt: 'Research Innovation Crossroads ORNL 2026. Exact deadline, lab access, stipend, IP ownership, past cohort profiles in motor drives or power electronics, how to position rare-earth-free synchronous machine.',
    notes: 'ORNL has world-class manufacturing and materials capabilities for BESM fabrication. Highest total value fellowship.',
    url: 'https://innovationcrossroads.ornl.gov',
    entity: 'II LLC'
  },
  {
    id: 'chain-reaction',
    category: 'fellowships',
    name: 'Chain Reaction Innovations (Argonne/DOE)',
    amount: '$300K+ over 2 years',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Fall 2026',
    action: 'Apply at chainreaction.anl.gov. Argonne National Lab embedded. Manufacturing and energy focus.',
    deepResearchPrompt: 'Research Chain Reaction Innovations Argonne 2026. Deadline, program structure, what Argonne lab access provides for electric machine development, past fellows, PR eligibility.',
    notes: 'Argonne has EV and advanced manufacturing divisions directly relevant to BESM.',
    url: 'https://chainreaction.anl.gov',
    entity: 'II LLC'
  },
  {
    id: 'breakthrough-energy',
    category: 'fellowships',
    name: 'Breakthrough Energy Fellows (Gates)',
    amount: '$500K–$3M',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: '~Fall 2026',
    action: 'Apply at breakthroughenergy.org/our-work/fellows. Bill Gates philanthropic fund. Rare-earth-free motors as critical materials alternative for clean energy is the angle.',
    deepResearchPrompt: 'Research Breakthrough Energy Fellows program 2026. Exact deadline, what the fellowship funds vs what requires cost share, Innovator vs Business vs Explorer tracks, acceptance rate, past fellows in electric machines or critical materials, PR eligibility.',
    notes: 'Highest dollar fellowship. Critical materials angle (rare-earth-free) maps directly to their energy security thesis.',
    url: 'https://breakthroughenergy.org/our-work/fellows',
    entity: 'II LLC'
  },
  {
    id: 'west-gate',
    category: 'fellowships',
    name: 'West Gate Fellowship (NREL/DOE)',
    amount: '$300K+ over 2 years',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Spring 2026 — check now, may be open',
    action: 'Apply at westgatefellows.org or nrel.gov. NREL (Golden, CO) embedded. Renewable energy and transportation focus.',
    deepResearchPrompt: 'Research West Gate Fellowship NREL 2026. Is it currently open, deadline, program structure, what NREL lab access provides for EV motor research, past fellows, PR eligibility.',
    notes: 'NREL has EV and grid research directly relevant to UTEI and BESM.',
    url: 'https://www.nrel.gov',
    entity: 'II LLC'
  },

  // ── AWARDS & NOMINATIONS ─────────────────────────────────────────────────
  {
    id: 'macarthur',
    category: 'awards',
    name: 'MacArthur Fellowship (Genius Grant)',
    amount: '$800K over 5 years',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Nomination only — cannot apply',
    action: 'Build visibility. Publish more. Give keynotes. Engage science journalists. The 225-patent profile plus rare-earth-free machine work is nomination-worthy. Identify who in your network can nominate (MIT Media Lab, IEEE leadership, former Nexteer executives).',
    deepResearchPrompt: 'Research MacArthur Fellowship nomination process 2026. Who can nominate, what increases nomination likelihood, what profile of engineers and inventors have been selected in the last 5 years, how to increase anonymous nominator visibility.',
    notes: 'Cannot apply. Build the profile. US PR qualifies. One of the highest-value awards in existence.',
    url: 'https://www.macfound.org/programs/fellows/',
    entity: 'Prerit individually'
  },
  {
    id: 'lemelson-mit',
    category: 'awards',
    name: 'Lemelson-MIT Prize',
    amount: '$500K',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Nomination-based — build pipeline now',
    action: 'Contact MIT alumni network and IEEE IAS leadership about nomination. 225+ patents is exceptional and exactly the Lemelson profile. Seek nominators from UMich, MIT, or Nexteer leadership.',
    deepResearchPrompt: 'Research Lemelson-MIT Prize 2026. Nomination process, nominator criteria, recent winners and their patent/invention profiles, whether solo founders without university affiliation are competitive, how to build a nomination pipeline.',
    notes: '225+ patents is the strongest possible Lemelson profile. Seek nomination from UMich EE faculty or MIT network.',
    url: 'https://lemelson.mit.edu/prize',
    entity: 'Prerit individually'
  },
  {
    id: 'earthshot',
    category: 'awards',
    name: 'Earthshot Prize (Royal Foundation)',
    amount: '£1M',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Via Official Nominator — 2026 ceremony in Mumbai',
    action: 'Find an Official Nominator in your network. Category: Fix Our Climate. Rare-earth-free motors reducing critical material dependence for EV and clean energy is the angle. 2026 ceremony is in Mumbai — strong India connection.',
    deepResearchPrompt: 'Research Earthshot Prize 2026. Who are the Official Nominators, how to reach them, what the Fix Our Climate category values, whether a US/India dual-presence company qualifies, 2026 ceremony location and timeline, past winners profile.',
    notes: '2026 ceremony in Mumbai! REE-free motors = Fix Our Climate. Strong India angle via INSPIN.',
    url: 'https://earthshotprize.org',
    entity: 'II LLC or INSPIN'
  },
  {
    id: 'ieee-tesla',
    category: 'awards',
    name: 'IEEE Nikola Tesla Award',
    amount: 'Medal + honorarium',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: '~Dec 2026 nomination for 2027 award',
    action: 'Contact IEEE IAS leadership and IEEE PES colleagues about nomination. Domain: electric power generation and utilization. Perfect fit for BESM/QESM and motor drives portfolio.',
    deepResearchPrompt: 'Research IEEE Nikola Tesla Award 2026. Nomination process and deadline, who nominates, recent recipients and their profiles, whether a researcher outside academia can win, how to build a nomination package.',
    notes: 'Perfect domain match. IEEE Senior Member status helps. Build via IAS connections.',
    url: 'https://www.ieee.org/about/awards/ieee-nikola-tesla-award.html',
    entity: 'Prerit individually'
  },
  {
    id: 'cii-ip',
    category: 'awards',
    name: 'CII Industrial IP Awards (India)',
    amount: 'Recognition + visibility',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Annual — 2026 cycle ongoing',
    action: 'Apply through INSPIN Private Limited. 225+ patents is strongest IP portfolio among small companies. Self-nomination accepted.',
    deepResearchPrompt: 'Research CII Industrial IP Awards 2026. Application process, deadline, categories, whether a company with primarily US patents qualifies via Indian entity, past winners, what the award provides beyond recognition.',
    notes: 'Apply through INSPIN. 225+ patents makes this the strongest possible submission.',
    url: 'https://www.cii.in',
    entity: 'INSPIN'
  },

  // ── PRIZES & COMPETITIONS ────────────────────────────────────────────────
  {
    id: 'hubspot-aIdea',
    category: 'competitions',
    name: 'HubSpot Next Big AIdea',
    amount: '$50K cash + $25K AWS',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'July 25, 2026',
    action: '60-second phone video. UDC-based autonomous AI control system is the angle. Submit at hubspot.com/nextbigaidea. Do this the week NSF pitch is submitted.',
    deepResearchPrompt: 'Research HubSpot Next Big AIdea 2026. Exact submission portal, video format, judging criteria, past winner profiles, whether deep tech hardware-adjacent AI is competitive vs SaaS.',
    notes: 'Fastest $75K play in this entire tracker. Phone video. Deadline July 25.',
    url: 'https://www.hubspot.com/nextbigaidea',
    entity: 'II LLC'
  },
  {
    id: 'army-xtech',
    category: 'competitions',
    name: 'Army xTech Competition',
    amount: '$25K–$275K',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Recurring — check arl.army.mil/xtech now',
    action: 'Find currently open xTech track at arl.army.mil/xtech. Robotics, AI, power, autonomous systems all fit. White paper only for Phase 1.',
    deepResearchPrompt: 'Research Army xTech competitions open June 2026. Currently open tracks, prize amounts per phase, Phase 1 submission format, judging criteria, solo founder competitiveness, past winners in robotics or power electronics.',
    notes: '$25K-$275K across phases. No prototype Phase 1. Perfect for UDC, autonomous systems, or BESM.',
    url: 'https://www.arl.army.mil/about/small-business-programs/xtech/',
    entity: 'II LLC'
  },
  {
    id: 'doe-american-made',
    category: 'competitions',
    name: 'DOE American-Made Prizes',
    amount: '$50K–$500K per phase',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Multiple open now — check americanmadechallenges.org',
    action: 'Go to americanmadechallenges.org. Find open competitions in manufacturing, energy, motors, propulsion. Multiple prizes open simultaneously. Submit to whatever has nearest deadline.',
    deepResearchPrompt: 'Research DOE American-Made Challenges open June 2026. All currently open competitions especially in electric motors, rare-earth-free materials, advanced manufacturing, space propulsion, or power electronics. For each: prize amount, deadline, eligibility, judging criteria.',
    notes: 'Multiple run simultaneously. BESM, USM, PR020 all fit energy and manufacturing themes.',
    url: 'https://americanmadechallenges.org',
    entity: 'II LLC'
  },
  {
    id: 'nasa-centennial',
    category: 'competitions',
    name: 'NASA Centennial Challenges',
    amount: '$50K–$300K+',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Multiple active — check nasa.gov/prize-challenges',
    action: 'Check nasa.gov/prize-challenges for currently open challenges. NASA explicitly welcomes individual inventors. Space propulsion, active structures, orbital systems all fit MSS.',
    deepResearchPrompt: 'Research NASA Centennial Challenges open June 2026. All currently open challenges, prize amounts, submission requirements, whether individuals and solo LLCs can compete without university affiliation, timeline from submission to award.',
    notes: 'NASA explicitly targets independent inventors. MSS orbital reentry and active structures are direct fits.',
    url: 'https://www.nasa.gov/prize-challenges',
    entity: 'MSS'
  },
  {
    id: 'techstars-space',
    category: 'competitions',
    name: 'Techstars Space Accelerator',
    amount: '$120K + in-kind',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Cohort-based — apply now',
    action: 'Apply at techstars.com/space. MSS orbital maneuver and propulsion thesis.',
    deepResearchPrompt: 'Research Techstars Space Accelerator 2026. Next cohort deadline, program structure, DoD and Space Force intro opportunities, alumni outcomes, acceptance rate.',
    notes: 'Strong DoD intro network post-program.',
    url: 'https://www.techstars.com/accelerators/space',
    entity: 'MSS'
  },
  {
    id: 'hyperspace',
    category: 'competitions',
    name: 'Hyperspace Challenge',
    amount: 'Contract potential',
    status: 'todo',
    priority: 6,
    warmIntro: false,
    deadline: 'Check hyperspacechallenge.com',
    action: 'Submit under MSS for orbital maneuver, active structures, or Space Force mission matching.',
    deepResearchPrompt: 'Research Hyperspace Challenge 2026. Currently open challenges, Space Force/AFRL problem sets, typical contract award size, submission format, solo founder competitiveness.',
    notes: 'Government-backed. Space Force and AFRL problem sets.',
    url: 'https://hyperspacechallenge.com',
    entity: 'MSS'
  },

  // ── INDIA TRACK ──────────────────────────────────────────────────────────
  {
    id: 'idex',
    category: 'india',
    name: 'iDEX Open Challenge (India Defense)',
    amount: 'Up to ₹1.5 crore (~$180K)',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'Rolling — check idex.gov.in',
    action: 'Submit via idex.gov.in. QESM (rare-earth-free motor) for UAV/defense propulsion is the primary submission. Exoskeleton for military/defense is the secondary. 4 PDFs each under 200KB: Problem Statement, Technical Solution, Benefits, Resume. No prototype required.',
    deepResearchPrompt: 'Research iDEX Open Challenge current cycle 2026. Current open problem statements, Open Challenge requirements, submission deadline for current cycle, matching contribution rules (50% cash minimum, founder salary counts), SPARK grant agreement terms.',
    notes: 'QESM for UAV propulsion hits autonomous vehicles, eVTOL, naval systems. Multiple proposals already submitted under PR013. Ashutosh Lal as ops lead.',
    url: 'https://idex.gov.in',
    entity: 'INSPIN'
  },
  {
    id: 'nidhi-prayas',
    category: 'india',
    name: 'NIDHI-PRAYAS (DST India)',
    amount: 'Up to ₹10 lakhs (~$12K)',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Rolling via DST-approved incubators',
    action: 'Apply through DST-approved PRAYAS Center — SINE at IIT Bombay or IIT Delhi incubator. Concept-to-prototype grant. Sector-agnostic.',
    deepResearchPrompt: 'Research NIDHI-PRAYAS DST India 2026. List of approved PRAYAS centers that accept external applicants, application process, what prototype support is provided, timeline from application to grant, whether an NRI/OCI-held company qualifies.',
    notes: 'Fastest-turnaround Indian funding for concept-stage work. Apply through IIT Delhi incubator given Delhi proximity.',
    url: 'https://dst.gov.in/nidhi',
    entity: 'INSPIN'
  },
  {
    id: 'abdul-kalam',
    category: 'india',
    name: 'Abdul Kalam Technology Innovation Fellowship (INAE-SERB)',
    amount: '₹25K/mo + ₹15L/yr research',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: '~June 2026 — check serb.gov.in',
    action: 'Requires adjunct appointment at IIT or NIT. Contact IIT Delhi or IIT Bombay EE department for adjunct/visiting faculty role, then apply at serb.gov.in.',
    deepResearchPrompt: 'Research Abdul Kalam Technology Innovation Fellowship INAE-SERB 2026. Exact deadline, adjunct requirement details (how formal must the appointment be), whether an NRI with US PR qualifies, application process, what the fellowship funds.',
    notes: 'Most aligned India fellowship. Needs IIT/NIT adjunct appointment — this is the first step.',
    url: 'https://serb.gov.in',
    entity: 'Prerit individually via INSPIN'
  },
  {
    id: 'iete-pr001',
    category: 'india',
    name: 'IETE National Engineering Excellence Initiative (PR001)',
    amount: '~₹40 crore over 3 years',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'Financial documentation required — active',
    action: 'Pre-approval received ~May 29, 2026. Next steps: financial documentation and India travel for in-person meetings. This is tonight priority.',
    deepResearchPrompt: 'Research IETE India engineering initiative grant structure 2026. What financial documentation is typically required for pre-approved government initiatives at this scale, what the standard milestone and disbursement structure looks like for ₹40 crore 3-year programs.',
    notes: 'LARGEST SINGLE OPPORTUNITY IN THIS TRACKER. Pre-approved. Financial docs are the blocker. India travel needed.',
    url: 'https://www.iete.org',
    entity: 'INSPIN'
  },
  {
    id: 'usistef',
    category: 'india',
    name: 'USISTEF (US-India Science and Technology Fund)',
    amount: '~$500K',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Periodic — check usistef.org',
    action: 'Apply at usistef.org. Requires joint US-India team. II LLC (US) + INSPIN (India) is the perfect joint entity structure. Rare-earth-free motors for energy security is the angle.',
    deepResearchPrompt: 'Research USISTEF 2026. Next solicitation opening, joint team requirements, eligible technology areas, whether the II LLC + INSPIN structure satisfies the bilateral requirement, typical award size and timeline.',
    notes: 'II LLC + INSPIN structure is purpose-built for this. Bilateral nature is a strength not a barrier.',
    url: 'https://www.usistef.org',
    entity: 'II LLC + INSPIN'
  },

  // ── CANADA TRACK ─────────────────────────────────────────────────────────
  {
    id: 'nrc-irap',
    category: 'canada',
    name: 'NRC-IRAP Canada',
    amount: 'Up to CAD $500K',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Requires Canadian incorporation. You hold Canadian PR (2021). Incorporate a Canadian entity (1 day online via Ownr or Ownr.co). Then apply at nrc-cnrc.gc.ca/irap. Clean Tech stream fits BESM.',
    deepResearchPrompt: 'Research NRC-IRAP Canada 2026. Clean Tech stream details, Canadian incorporation requirements for a US-based PR holder, application process, what the industrial technology advisor (ITA) role is, typical award timeline, whether a solo founder with no Canadian employees qualifies.',
    notes: 'You have Canadian PR since 2021. One-day incorporation unlocks this. Clean Tech stream = BESM/rare-earth-free motors.',
    url: 'https://nrc.canada.ca/en/support-technology-innovation/nrc-industrial-research-assistance-program',
    entity: 'New Canadian entity (1 day to incorporate)'
  },
  {
    id: 'nrc-killam',
    category: 'canada',
    name: 'Killam NRC / Paul Corkum Fellowship',
    amount: 'R&D funding + NRC lab access',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Check nrc.canada.ca — was Jun 9, 2026',
    action: 'Check if current cycle is still open at nrc.canada.ca. Open to non-Canadians. Need NRC co-PI. Clean energy, AI, manufacturing focus.',
    deepResearchPrompt: 'Research NRC Killam / Paul Corkum Fellowship 2026. Whether current cycle is still accepting applications, NRC co-PI requirement details, what lab access is provided, whether a US PR holder with Canadian PR qualifies, what technology areas are prioritized.',
    notes: 'Open to international scholars. You have Canadian PR which strengthens eligibility.',
    url: 'https://nrc.canada.ca',
    entity: 'Prerit individually'
  },

  // ── EXPERT WITNESS ───────────────────────────────────────────────────────
  {
    id: 'round-table-group',
    category: 'expertwitness',
    name: 'Round Table Group',
    amount: '$400–$800/hr',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Apply TONIGHT — fastest cash in this tracker',
    action: 'Apply at roundtablegroup.com. 10 minutes. Profile: motor controls, EPS, perception, autonomy patents, IP litigation, power electronics. 225+ patents, 15 years Nexteer.',
    deepResearchPrompt: 'Research Round Table Group 2026. Application process, onboarding time, rate range for 225-patent motor controls profile, case assignment process, non-compete clauses.',
    notes: 'No deck, no pitch, no dilution. 10 hours = $5K-8K cash. Apply tonight.',
    url: 'https://roundtablegroup.com',
    entity: 'II LLC'
  },
  {
    id: 'expert-institute',
    category: 'expertwitness',
    name: 'Expert Institute',
    amount: '$400–$800/hr',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Apply TONIGHT — same night as Round Table',
    action: 'Apply at expertinstitute.com. Motor controls, IP litigation, autonomy, power electronics.',
    deepResearchPrompt: 'Research Expert Institute 2026. Application, rate ranges, most common case types for EE and IP, case matching process, non-compete clauses, comparison to Round Table Group.',
    notes: 'Two bites at the same apple. Apply both tonight.',
    url: 'https://www.expertinstitute.com',
    entity: 'II LLC'
  },
  {
    id: 'tasa',
    category: 'expertwitness',
    name: 'TASA (Technical Advisory Service for Attorneys)',
    amount: '$300–$600/hr',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Apply now',
    action: 'Apply at tasanet.com. One of the largest expert witness networks. Motor controls, automotive, robotics, power electronics profile.',
    deepResearchPrompt: 'Research TASA expert witness network 2026. Application process, rate ranges, case types in electrical engineering and automotive, how cases are matched, exclusivity requirements, comparison to Round Table Group and Expert Institute.',
    notes: 'Third expert witness network to apply to. More case volume than boutique networks.',
    url: 'https://www.tasanet.com',
    entity: 'II LLC'
  },

  // ── EXPERT NETWORKS ──────────────────────────────────────────────────────
  {
    id: 'glg',
    category: 'consulting',
    name: 'GLG / AlphaSights / Dialectica',
    amount: '$300–$600/hr',
    status: 'active',
    priority: 1,
    warmIntro: false,
    deadline: 'Ongoing — increase call frequency NOW',
    action: 'Accept more project matches. High-demand topics: EV motors, humanoid robotics, transfer cases, LiDAR, autonomy, rare-earth supply chain, space propulsion. Target 5-10 calls/month minimum.',
    deepResearchPrompt: 'Research GLG, AlphaSights, Dialectica expert network rates 2026. Highest-demand topics for electrical engineering and autonomy. Realistic monthly income at 5-10 calls/month senior level. New high-value niches from humanoid robotics boom.',
    notes: 'Already active. Kirk Cox for transfer case thread. Humanoid robotics is booming demand topic.',
    url: 'https://glginsights.com',
    entity: 'II LLC'
  },
  {
    id: 'alien-tech-transfer',
    category: 'consulting',
    name: 'Alien Technology Transfer (SBIR Consultant)',
    amount: 'Success fee only — zero upfront',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Contact before next NSF/DOE submission',
    action: 'Contact Alien Technology Transfer (Austin TX) for free Funding Opportunity Assessment. Pure success fee — you pay nothing unless they help you win. Strong for NSF, DOE, and EIC Accelerator (Europe).',
    deepResearchPrompt: 'Research Alien Technology Transfer SBIR consulting 2026. Client reviews, success rate, agencies they have won grants from, experience with rare-earth-free motor or aerospace propulsion topics, success fee percentage, whether engaging them conflicts with NSF indirect cost rules.',
    notes: 'Zero risk engagement. Vetted March 2026. Also covers EIC Accelerator for European funding.',
    url: 'https://www.alientechnologytransfer.com',
    entity: 'II LLC or MSS'
  }

];

export const DEEP_RESEARCH_MASTER = `# Master Deep Research Prompt: Complete Funding Landscape 2026

Conduct an exhaustive research sweep of ALL funding pathways for the following founder profile as of June 2026:

FOUNDER: Prerit Pramod
- US PR (EB-1A 2024), Indian citizen, Canadian PR (2021), based Redmond WA
- 225+ global patents (~150 granted), 40+ publications, ~900 citations
- IEEE Senior Member, IEEE IAS Andrew W. Smith Young Member Award 2024
- Nexteer Automotive Platinum IP Hall of Fame (youngest/fastest ever), Melvin Wilcox Award
- MS EE Systems/Control, University of Michigan 2012

ENTITIES:
- Inspired Innovation LLC (US, Redmond WA) — multi-vertical deep tech, solo operator
- Multiscale Space Systems LLC (US) — space propulsion + orbital reentry, co-founded with Shardul Singh Panwar
- INSPIN Private Limited (India) — defense and manufacturing focus
- Canadian entity: none yet, but PR held since 2021 (one-day incorporation possible)

TECHNICAL AREAS:
UDC/UDCF (Universal Dynamical Control Framework), USM (Universal Synchronous Machine), BESM/QESM (rare-earth-free synchronous motors), visual perception systems, orbital reentry vehicles, aerospace active structures, autonomous military vehicles, humanoid actuators, EPS/steer-by-wire, power electronics, LiDAR, UTEI (energy intelligence), exoskeletons

NSF SBIR STATUS: Project Pitch nearly ready for MSS (REV07). SAM.gov UEI D4YUPMXSEKJ5 in external validation (one notarization step outstanding).

SEARCH SCOPE — search ALL of these:
1. Pre-seed VCs accepting cold pitches: A&D, deep tech, space, autonomy
2. Federal SBIR/STTR: NSF, DOE (VTO+AMMTO), DoD all branches, NASA, NIST, DOT, DHS
3. DARPA BAAs (all offices), DIU CSOs, AFRL ARAs
4. ARPA-E OPEN and focused programs
5. DOE Small Business Vouchers, national lab partnerships
6. DOE American-Made Prizes, Army xTech, Navy challenges, NASA Centennial Challenges
7. Fellowships: Activate, Innovation Crossroads, Chain Reaction, West Gate, Breakthrough Energy
8. Nomination-only awards: MacArthur, Lemelson-MIT, Earthshot, IEEE medals
9. India: iDEX, NIDHI-PRAYAS, DST SERB, Abdul Kalam Fellowship, USISTEF bilateral
10. Canada: NRC-IRAP, NRC Killam, SDTC, NSERC for industry
11. Expert witness networks: Round Table Group, Expert Institute, TASA, others
12. Expert consulting networks and highest-paying 2026 topics
13. Corporate cloud credits: NVIDIA, AWS, Google, Microsoft, Oracle
14. SBIR consulting firms on success fee
15. European: EIC Accelerator, Horizon Europe, ESA BIC

For each: name, amount, deadline, entity vehicle, eligibility, submission method, one sentence on why this specific founder wins.
Output ranked by: (1) fastest to cash, (2) highest amount, (3) lowest friction.`;
