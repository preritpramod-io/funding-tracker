export const CATEGORIES = [
  { id: 'preseed', label: 'Pre-Seed VC', color: '#ED7C25', emoji: '🚀' },
  { id: 'nondilutive', label: 'Non-Dilutive', color: '#22c55e', emoji: '🏛️' },
  { id: 'competitions', label: 'Competitions & Prizes', color: '#F3AC41', emoji: '🏆' },
  { id: 'expertwitness', label: 'Expert Witness', color: '#a78bfa', emoji: '⚖️' },
  { id: 'consulting', label: 'Expert Networks', color: '#38bdf8', emoji: '💡' },
];

export const OPPORTUNITIES = [
  // PRE-SEED VC
  {
    id: 'starburst',
    category: 'preseed',
    name: 'Starburst Ventures',
    amount: 'Up to $1M',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Send deck to pitch@starburst.vc — no warm intro needed. Attach full deck. Subject: Pre-Seed | MSS | Propulsion and Orbital Maneuver.',
    deepResearchPrompt: 'Research Starburst Ventures (starburst.vc) in depth for 2025-2026. Find: current fund size, recent investments in the last 12 months, any new partner additions, changes to their open submission policy, portfolio companies similar to space propulsion and orbital maneuver startups, any reported changes to their investment thesis or ITAR/CFIUS stance. Also find founder testimonials and any press coverage of their accelerator cohort outcomes. Find competing aerospace-defense pre-seed funds that also accept cold pitches with no warm intro.',
    notes: 'Pitch MSS (not II LLC). Morpheus Space and Outpost are the closest portfolio analogs. Natalya Bailey (Accion Systems founder) will probe propulsion physics. Jacqueline Tame will probe dual-use and ITAR. Need: 1 provisional patent filed before pitching.',
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
    action: 'Apply via boost.vc application form. Deep tech focus, no warm intro required.',
    deepResearchPrompt: 'Research Boost.vc for 2025-2026. Find their current application process, batch schedule, check size confirmation, any portfolio companies in aerospace, defense, robotics or propulsion. Find founder reviews. What do they look for at pre-seed with no prototype? Is there a cohort model or direct investment? How fast do they move from application to decision?',
    notes: 'Deep tech generalist. Good fallback alongside Starburst.',
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
    action: 'Apply via shieldcap.com. Former military operators as GPs. Defense and national security focus.',
    deepResearchPrompt: 'Research Shield Capital (shieldcap.com) thoroughly for 2026. Find: fund size, check range at seed, portfolio companies, GP backgrounds, any public statements on what they look for in early-stage defense tech founders. Are they truly open to cold outreach or is warm intro really required? What is the fastest path to a meeting? Find any founder testimonials.',
    notes: 'Strong for the Inspired Defense vehicle once incorporated.',
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
    action: 'Submit via lockheedmartin.com/ventures. Dual-use focus, autonomous systems, advanced manufacturing.',
    deepResearchPrompt: 'Research Lockheed Martin Ventures for 2026. Find their current investment thesis, check size range, stage preference, application process. Do they truly accept cold submissions or is there a preferred pathway via their business units? Find portfolio companies in early stage propulsion, autonomy, or electric motors. What is their typical time from submission to first response?',
    notes: 'Strategic value: pilot customers and acquisition pathway potential.',
    url: 'https://www.lockheedmartin.com/en-us/who-we-are/lockheed-martin-ventures.html',
    entity: 'MSS or II LLC'
  },
  {
    id: 'silentventures',
    category: 'preseed',
    name: 'Silent Ventures',
    amount: 'Early Stage',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Research and contact via silentventures.com.',
    deepResearchPrompt: 'Research Silent Ventures for 2026. Find their fund details, check size, portfolio, application process, any public statements on what they back at pre-seed in aerospace defense and national security. Are they truly early stage? What is the founder onboarding like?',
    notes: 'Aerospace, defense, national security focus. Early stage.',
    url: 'https://silentventures.com',
    entity: 'MSS'
  },

  // NON-DILUTIVE
  {
    id: 'nsf-sbir',
    category: 'nondilutive',
    name: 'NSF SBIR Phase I',
    amount: '$300K',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'June 16, 2026 — TOMORROW',
    action: 'FINISH AND SUBMIT NOW. This is the most time-critical item in the entire document.',
    deepResearchPrompt: 'Research NSF SBIR Phase I (solicitation NSF 26-510) in depth. Find: exact submission portal, checklist of required documents, common rejection reasons, tips from funded founders, typical reviewer profiles and what they weight most. What is the fastest path from Phase I award to Phase II? Are there any extensions or grace periods?',
    notes: 'Active. Submit by June 16, 2026. Zero equity. $300K. DO NOT MISS.',
    url: 'https://seedfund.nsf.gov',
    entity: 'MSS'
  },
  {
    id: 'afwerx',
    category: 'nondilutive',
    name: 'AFWERX Open Topic SBIR',
    amount: '$250K',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Register at afsbirsttr.us. File under autonomy or perception topic using PR015 or PR041 technical basis.',
    deepResearchPrompt: 'Research AFWERX Open Topic SBIR for 2026. Find: current open topics, deadlines, submission portal, what separates funded from unfunded proposals, any tips from funded founders. Is the autonomy and perception topic still open? What is the typical Phase I award timeline? How does AFWERX differ from standard DoD SBIR process? Find any AFWERX-funded companies in autonomous systems or perception.',
    notes: 'PR015 (Visual Perception) and PR041 (Autonomous Military Vehicles) are the technical anchors.',
    url: 'https://afsbirsttr.us',
    entity: 'MSS or II LLC'
  },
  {
    id: 'diu-cso',
    category: 'nondilutive',
    name: 'DIU Commercial Solutions Opening',
    amount: '$1M–$5M',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Write a one-page white paper on autonomous perception or propulsion. Submit at diu.mil/work-with-us/open-solicitations.',
    deepResearchPrompt: 'Research DIU Commercial Solutions Opening (CSO) for 2026. Find: currently open CSOs, the fastest path to submission, what a winning white paper looks like, typical time from white paper to award, OT authority contract size ranges. Find any companies in autonomy, robotics, or propulsion that have won DIU CSOs. What is the difference between a CSO and a standard FAR contract?',
    notes: 'OT authority pathway. No prototype required. Fast decision cycle. One-page white paper first.',
    url: 'https://www.diu.mil/work-with-us/open-solicitations',
    entity: 'MSS or II LLC'
  },
  {
    id: 'deter-ara',
    category: 'nondilutive',
    name: 'DETER ARA (AFRL Directed Energy)',
    amount: 'Variable',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Open through Aug 10, 2027',
    action: 'Submit white paper via SAM.gov. White paper first, no full proposal required. Directed energy source components.',
    deepResearchPrompt: 'Research DETER ARA from AFRL Directed Energy Directorate for 2026. Find: the exact SAM.gov opportunity number, white paper template requirements, evaluation criteria, typical award size, what DE source components means technically, any awarded companies and their technology areas. How do power electronics and motor drives fit into directed energy source components? What is the typical timeline from white paper to award?',
    notes: 'Long window. White paper only to start. PR020 power electronics angle is the fit.',
    url: 'https://sam.gov',
    entity: 'II LLC'
  },
  {
    id: 'sam-validation',
    category: 'nondilutive',
    name: 'SAM.gov Validation Clearance',
    amount: 'Unlocks all above',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'ASAP — blocks everything',
    action: 'Check validation status for UEI D4YUPMXSEKJ5. There is one remaining notarization step. Find out exactly what it is and complete it. Log the answer here.',
    deepResearchPrompt: 'Research the SAM.gov external validation process for 2026. What exactly is required for the notarization step that sometimes blocks registration? What government offices or third-party notarization services are involved? How long does the typical external validation take once notarization is submitted? Is there an expedite pathway?',
    notes: 'UEI D4YUPMXSEKJ5. One notarization step outstanding. THIS BLOCKS ALL NON-DILUTIVE FUNDING.',
    url: 'https://sam.gov',
    entity: 'MSS'
  },

  // COMPETITIONS
  {
    id: 'hubspot-aIdea',
    category: 'competitions',
    name: 'HubSpot Next Big AIdea',
    amount: '$50K cash + $25K AWS',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'July 25, 2026',
    action: 'Record a 60-second video explaining your AI solution. Submit via HubSpot. Autonomy or AI-driven perception product is the angle.',
    deepResearchPrompt: 'Research HubSpot Next Big AIdea competition 2026. Find: exact submission portal, 60-second video format requirements, judging criteria, what kind of AI companies have won in prior years, whether deep tech or hardware-adjacent AI is competitive or if it skews toward SaaS. What is the profile of past winners? Is there a public application form? What does the winner presentation at INBOUND look like?',
    notes: 'Fastest $75K play. 60-second video only. Deadline July 25. Do this after NSF SBIR.',
    url: 'https://www.hubspot.com/nextbigaidea',
    entity: 'II LLC'
  },
  {
    id: 'techstars-space',
    category: 'competitions',
    name: 'Techstars Space Accelerator',
    amount: '$120K + in-kind',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Cohort-based — apply now',
    action: 'Apply at techstars.com/space. MSS orbital maneuver and propulsion thesis. Strong DoD intro network.',
    deepResearchPrompt: 'Research Techstars Space Accelerator for 2026. Find: next cohort application deadline, program structure, what $120K covers vs what is in-kind, DoD and Space Force intro opportunities, alumni outcomes and funding raised post-program, acceptance rate, what they look for in pre-revenue deep tech founders. Is there a hardware stipend? Where is the program located?',
    notes: 'MSS is the pitch entity. Cohort model means strong peer network and DoD intros.',
    url: 'https://www.techstars.com/accelerators/space',
    entity: 'MSS'
  },
  {
    id: 'arc-prize',
    category: 'competitions',
    name: 'ARC Prize 2026',
    amount: '$2M total pool',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Ongoing 2026',
    action: 'Research ARC Prize tracks. Autonomous reasoning under UDC framework may qualify for the open-source AGI track.',
    deepResearchPrompt: 'Research ARC Prize 2026 in full detail. Find: the three tracks and exact criteria for each, prize amounts per track, submission format, judging panel, whether autonomous control systems reasoning (not purely LLM-based) qualifies for any track, deadlines for each track, public leaderboard status, prior winners and their approaches.',
    notes: 'Long shot but $2M pool. UDC framework autonomous reasoning angle.',
    url: 'https://arcprize.org/competitions/2026',
    entity: 'II LLC'
  },
  {
    id: 'hyperspace',
    category: 'competitions',
    name: 'Hyperspace Challenge',
    amount: 'Contract potential',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Check hyperspacechallenge.com',
    action: 'Submit under MSS for orbital maneuver, active structures, or Space Force mission matching.',
    deepResearchPrompt: 'Research Hyperspace Challenge 2026 in depth. Find: current open challenges, Space Force and AFRL problem sets listed, typical contract award size, timeline from submission to award, format of the submission, whether a solo founder with no team can compete, any prior winners and their company profiles. How does winning translate to a program of record or SBIR bridge?',
    notes: 'Government-backed. Space Force and AFRL problem sets. SBIR to program-of-record bridge.',
    url: 'https://hyperspacechallenge.com',
    entity: 'MSS'
  },

  // EXPERT WITNESS
  {
    id: 'round-table-group',
    category: 'expertwitness',
    name: 'Round Table Group',
    amount: '$400–$800/hr',
    status: 'todo',
    priority: 1,
    warmIntro: false,
    deadline: 'Apply now — immediate income',
    action: 'Apply at roundtablegroup.com. Expert witness in motor controls, perception systems, autonomy patents, IP litigation.',
    deepResearchPrompt: 'Research Round Table Group expert witness network for 2026. Find: application process, typical onboarding time, what disciplines are most in demand, what rate range is realistic for someone with 225 granted patents and 15 years in motor controls and autonomy, how cases are assigned, what the typical expert witness engagement looks like in terms of hours and deliverables, non-compete or exclusivity clauses.',
    notes: 'Highest yield untapped channel. No deck, no pitch, no dilution. 10 hours = $5K to $8K.',
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
    deadline: 'Apply now — immediate income',
    action: 'Apply at expertinstitute.com. Same profile: motor controls, IP litigation, autonomy, perception.',
    deepResearchPrompt: 'Research Expert Institute for 2026. Find: application process, rate ranges, most common case types involving electrical engineering and IP, how cases are matched to experts, turnaround time from application to first engagement, non-compete clauses, difference between Expert Institute and Round Table Group in terms of case volume and specialization.',
    notes: 'Apply alongside Round Table Group. Two bites at the same apple.',
    url: 'https://www.expertinstitute.com',
    entity: 'II LLC'
  },

  // EXPERT NETWORKS
  {
    id: 'glg',
    category: 'consulting',
    name: 'GLG / AlphaSights / Dialectica',
    amount: '$300–$600/hr',
    status: 'active',
    priority: 1,
    warmIntro: false,
    deadline: 'Ongoing — increase call frequency',
    action: 'Accept more project matches. Target: EV motors, humanoid robotics, transfer cases, LiDAR, autonomy. Increase weekly call targets.',
    deepResearchPrompt: 'Research GLG, AlphaSights, and Dialectica expert network rates and demand areas for 2026. Which network pays the highest for electrical engineering and autonomy experts? Are there any new high-demand topics in 2026 related to humanoid robotics, rare-earth-free motors, or space propulsion? What is the realistic monthly income for someone doing 5 to 10 calls per month across these platforms at senior expert level?',
    notes: 'PR009 and PR038. Already active. Kirk Cox is a contact for transfer case thread.',
    url: 'https://glginsights.com',
    entity: 'II LLC'
  }
];

export const DEEP_RESEARCH_MASTER = `# Master Deep Research Prompt: Pre-Seed Funding Landscape 2026

Conduct a comprehensive research sweep of the pre-seed funding landscape specifically for a solo deep-tech founder in aerospace, defense, and robotics as of mid-2026. The founder has the following profile:
- US permanent resident (EB-1A), Indian citizen, based in Redmond WA
- 15+ years in motor controls, autonomy, and IP generation (225+ patents, ~150 granted)
- Running Inspired Innovation LLC (multi-vertical deep tech consultancy) and Multiscale Space Systems (space propulsion and orbital maneuver startup, co-founded)
- Active NSF SBIR Phase I in progress
- SAM.gov UEI registered (external validation pending)
- Technical areas: UDC (Universal Dynamical Control), rare-earth-free synchronous motors, visual perception systems, orbital reentry systems, aerospace active structures, autonomous military vehicles

Find:
1. All pre-seed VCs that accept cold pitches (no warm intro) in aerospace, defense, or deep tech, updated for 2026. Include check size, stage, and submission method.
2. All non-dilutive funding opportunities with rolling or near-term deadlines for the technical areas above.
3. All design competitions or prize competitions open to professional solo founders (not student-only) with prizes above $10K, in AI, autonomy, aerospace, robotics, or defense, with deadlines in the next 6 months.
4. Expert witness network opportunities for someone with this IP and domain profile.
5. Any new government programs, OTAs, or innovation funds announced in 2026 that are relevant.
6. The fastest-to-money pathway for each category above.

Output: ranked list per category with name, amount, deadline, submission method, and one-sentence on why this founder wins.`;
