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
    name: 'NSF SBIR Phase I — Project Pitch',
    amount: '$305K Phase I / $1.25M Phase II',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'Pitch portal OPEN NOW. Full proposal due July 27, 2026',
    action: 'MSS Project Pitch (REV07) is nearly done — only two blanks remain: three partner names in Q15 and two advisor names in Q16 (Shardul fills these). Once filled, submit pitch at seedfund.nsf.gov. If invited, full proposal due July 27. Solicitation NSF 26-510.',
    deepResearchPrompt: 'Research NSF SBIR Phase I solicitation NSF 26-510 in depth for 2026. Find: current Project Pitch window open/close dates, what the four narrative questions Q13-Q16 require, common rejection reasons for pitches, what percentage of pitches receive invitations, how long invitation review takes, tips from funded founders on the commercialization narrative, and the fastest path from pitch to full proposal to award. Also research the new Strategic Breakthrough Awards tier (up to $30M) and whether a Phase I applicant can position toward it.',
    notes: 'MSS pitch is at REV07. Shardul (CEO, PI) fills Q15 partner names and Q16 advisor names. Strongest topic: Space (SP) for orbital reentry platform. BESM rare-earth-free drives also fits Power Management topic under II LLC separately. No prior NSF award. No cost share required.',
    url: 'https://seedfund.nsf.gov',
    entity: 'MSS (and II LLC separately for BESM topic)'
  },
  {
    id: 'doe-sbir',
    category: 'nondilutive',
    name: 'DOE SBIR — VTO + AMMTO Topics',
    amount: '$200K',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Watch for Release 3 — expected mid-2026',
    action: 'Monitor energy.gov/sbir for Release 3 opening. VTO topic = electric motors, non-rare-earth magnets, traction drives, power electronics (perfect fit for BESM/PR020). AMMTO topic = advanced manufacturing, AI for manufacturing, critical materials. Free Phase 0 application assistance available for first-timers.',
    deepResearchPrompt: 'Research DOE SBIR for 2026 in depth. Find: when Release 3 FY2026 is expected to open, the exact VTO and AMMTO topic numbers most relevant to rare-earth-free synchronous motors and power electronics, the free Phase 0 assistance program details, what a winning DOE SBIR proposal looks like vs NSF, typical timeline from submission to award, and any DOE SBIR awardees in electric motor or rare-earth-free machine space.',
    notes: '5/5 topic match for BESM (PR020) and USM framework. Free Phase 0 assistance for first-timers. Apply under II LLC. DOE pays after deliverable acceptance — plan 2-3 months self-funding.',
    url: 'https://www.energy.gov/science/sbir/sbir-sttr',
    entity: 'II LLC'
  },
  {
    id: 'activate-fellowship',
    category: 'nondilutive',
    name: 'Activate Fellowship (Cyclotron Road)',
    amount: '$300K+ over 2 years',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Next deadline ~Oct 2026',
    action: 'Apply at activate.org. Two-year embedded fellowship at a national lab (LBNL or other). No equity, no cost share. Deep tech hardware focus. Apply as II LLC founder with MSS as the vehicle.',
    deepResearchPrompt: 'Research Activate Fellowship (Cyclotron Road) for 2026. Find: exact application deadline for the next cohort, what the fellowship provides beyond cash (lab access, mentorship, industry connections), acceptance rate, profile of recent fellows in motor controls or aerospace, whether a non-US citizen with US PR qualifies, how to position a rare-earth-free motor drives project for selection, and what distinguishes accepted vs rejected applications.',
    notes: '5/5 priority rating from March 2026 deep research. Hardware-forward, national lab embedded. Patience required — fall 2026 deadline. No equity. Best for BESM/USM framework.',
    url: 'https://www.activate.org',
    entity: 'II LLC'
  },
  {
    id: 'innovation-crossroads',
    category: 'nondilutive',
    name: 'Innovation Crossroads (ORNL/DOE)',
    amount: '$350K+ over 2 years',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Fall 2026',
    action: 'Apply at innovationcrossroads.ornl.gov. Oak Ridge National Lab embedded fellowship. Highest total value of all fellowships. Energy and manufacturing focus aligns with BESM and rare-earth-free motors.',
    deepResearchPrompt: 'Research Innovation Crossroads at Oak Ridge National Lab for 2026. Find: exact application deadline, what lab access is provided, stipend details, whether the fellow keeps IP, past cohort profiles especially in motor drives or power electronics, and how to position a rare-earth-free synchronous machine project for selection. Compare to Activate Fellowship in terms of total value and timeline.',
    notes: 'Highest total value of all fellowships per March 2026 analysis. ORNL has world-class manufacturing and materials capabilities that directly support BESM fabrication.',
    url: 'https://innovationcrossroads.ornl.gov',
    entity: 'II LLC'
  },
  {
    id: 'darpa-baa',
    category: 'nondilutive',
    name: 'DARPA TTO Office-Wide BAA',
    amount: '$500K–$5M',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Rolling through Jun 2026',
    action: 'Submit white paper to DARPA TTO BAA HR001120S0021 or equivalent current BAA. UDC framework + autonomous systems angle. Check sam.gov for current open DARPA BAAs.',
    deepResearchPrompt: 'Research current DARPA open BAAs for 2026 relevant to autonomous systems, control theory, power electronics, and space propulsion. Find: currently open office-wide BAAs, technical focus areas, white paper format requirements, typical time from white paper to proposal invitation to award, what DARPA program managers look for vs NSF, and whether a solo founder with no institutional affiliation can win a DARPA contract.',
    notes: '4/5 priority. High risk high reward. UDC framework is genuinely DARPA-grade. White paper first, no full proposal until invited.',
    url: 'https://www.darpa.mil/work-with-us/opportunities',
    entity: 'II LLC or MSS'
  },
  {
    id: 'afwerx',
    category: 'nondilutive',
    name: 'AFWERX Open Topic SBIR',
    amount: '$75K–$150K',
    status: 'todo',
    priority: 6,
    warmIntro: false,
    deadline: 'Rolling',
    action: 'Register at afsbirsttr.us. File under autonomy or perception topic using PR015 or PR041 technical basis.',
    deepResearchPrompt: 'Research AFWERX Open Topic SBIR for 2026. Find: current open topics, deadlines, submission portal, what separates funded from unfunded proposals, any tips from funded founders. Is the autonomy and perception topic still open? What is the typical Phase I award timeline? How does AFWERX differ from standard DoD SBIR process? Find any AFWERX-funded companies in autonomous systems or perception.',
    notes: 'PR015 (Visual Perception) and PR041 (Autonomous Military Vehicles) are the technical anchors. Faster turnaround than standard DoD SBIR.',
    url: 'https://afsbirsttr.us',
    entity: 'MSS or II LLC'
  },
  {
    id: 'diu-cso',
    category: 'nondilutive',
    name: 'DIU Commercial Solutions Opening',
    amount: '$1M–$5M',
    status: 'todo',
    priority: 7,
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
    priority: 8,
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
    amount: 'Unlocks ALL non-dilutive funding',
    status: 'inprogress',
    priority: 1,
    warmIntro: false,
    deadline: 'ASAP — blocks everything above',
    action: 'Check validation status for UEI D4YUPMXSEKJ5. One notarization step outstanding. Find out exactly what it is, complete it, and log the result here.',
    deepResearchPrompt: 'Research the SAM.gov external validation process for 2026. What exactly is required for the notarization step that sometimes blocks registration? What government offices or third-party notarization services are involved? How long does the typical external validation take once notarization is submitted? Is there an expedite pathway? What is the difference between the external validation step and the standard E-Verify step?',
    notes: 'UEI D4YUPMXSEKJ5. Blocks every SBIR, DOE, DARPA, DIU submission. Highest leverage single action.',
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
    action: 'Record a 60-second video explaining your AI solution. Submit via HubSpot. UDC-based autonomous perception or control AI is the angle. This is literally a phone recording.',
    deepResearchPrompt: 'Research HubSpot Next Big AIdea competition 2026. Find: exact submission portal URL, 60-second video format requirements, judging criteria, what kind of AI companies have won in prior years, whether deep tech or hardware-adjacent AI is competitive or if it skews toward SaaS. What is the profile of past winners? Is there a public application form? What does the winner presentation at INBOUND look like?',
    notes: 'Fastest $75K play in the entire tracker. 60-second phone video. Deadline July 25. Do this the week after NSF pitch is submitted.',
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
    deadline: 'Recurring — check now',
    action: 'Go to arl.army.mil/xtech. Find the current open competition. Robotics, AI, power, autonomous systems all fit. No prototype required for initial submission.',
    deepResearchPrompt: 'Research Army xTech competitions open in 2026. Find: currently open competition tracks, prize amounts per phase, submission format for the first phase, judging criteria, what technical domains are prioritized, whether solo founders without teams can compete, and timeline from submission to prize award. Find examples of past winners in robotics, power electronics, or autonomous systems.',
    notes: '$25K to $275K range across phases. Recurring competitions. No prototype for phase 1. Perfect for UDC, autonomous systems, or BESM angle.',
    url: 'https://www.arl.army.mil/about/small-business-programs/xtech/',
    entity: 'II LLC'
  },
  {
    id: 'doe-american-made',
    category: 'competitions',
    name: 'DOE American-Made Prize',
    amount: '$50K–$500K per phase',
    status: 'todo',
    priority: 3,
    warmIntro: false,
    deadline: 'Multiple open — check americanmadechallenges.org',
    action: 'Go to americanmadechallenges.org. Find open competitions in manufacturing, energy, motors, or propulsion. Multiple prizes open simultaneously. Submit to whichever has closest deadline.',
    deepResearchPrompt: 'Research DOE American-Made Challenges open in 2026. Find: all currently open prize competitions, especially any related to electric motors, rare-earth-free materials, advanced manufacturing, space propulsion, or power electronics. For each: prize amount, submission format, eligibility, deadline, and judging criteria. Which ones can a solo founder with an LLC enter without a prototype?',
    notes: 'Multiple competitions run simultaneously. Energy and manufacturing angle fits BESM, USM, PR020 perfectly.',
    url: 'https://americanmadechallenges.org',
    entity: 'II LLC'
  },
  {
    id: 'techstars-space',
    category: 'competitions',
    name: 'Techstars Space Accelerator',
    amount: '$120K + in-kind',
    status: 'todo',
    priority: 4,
    warmIntro: false,
    deadline: 'Cohort-based — apply now',
    action: 'Apply at techstars.com/space. MSS orbital maneuver and propulsion thesis. Strong DoD intro network.',
    deepResearchPrompt: 'Research Techstars Space Accelerator for 2026. Find: next cohort application deadline, program structure, what $120K covers vs what is in-kind, DoD and Space Force intro opportunities, alumni outcomes and funding raised post-program, acceptance rate, what they look for in pre-revenue deep tech founders. Is there a hardware stipend? Where is the program located?',
    notes: 'MSS is the pitch entity. Cohort model means strong peer network and DoD intros.',
    url: 'https://www.techstars.com/accelerators/space',
    entity: 'MSS'
  },
  {
    id: 'hyperspace',
    category: 'competitions',
    name: 'Hyperspace Challenge',
    amount: 'Contract potential',
    status: 'todo',
    priority: 5,
    warmIntro: false,
    deadline: 'Check hyperspacechallenge.com',
    action: 'Submit under MSS for orbital maneuver, active structures, or Space Force mission matching.',
    deepResearchPrompt: 'Research Hyperspace Challenge 2026 in depth. Find: current open challenges, Space Force and AFRL problem sets listed, typical contract award size, timeline from submission to award, format of the submission, whether a solo founder with no team can compete, and any prior winners. How does winning translate to a program of record or SBIR bridge?',
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
    deadline: 'Apply NOW — fastest cash in this entire tracker',
    action: 'Apply at roundtablegroup.com. 10 minutes. Expert witness profile: motor controls, EPS, perception systems, autonomy patents, IP litigation, power electronics. 225+ patents, 15 years Nexteer R&D.',
    deepResearchPrompt: 'Research Round Table Group expert witness network for 2026. Find: application process, typical onboarding time, what disciplines are most in demand, what rate range is realistic for someone with 225 granted patents and 15 years in motor controls and autonomy, how cases are assigned, what the typical expert witness engagement looks like in terms of hours and deliverables, non-compete or exclusivity clauses. Compare to Expert Institute.',
    notes: 'No deck, no pitch, no prototype, no dilution. 10 hours = $5K to $8K cash. Apply tonight.',
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
    deadline: 'Apply NOW — alongside Round Table Group',
    action: 'Apply at expertinstitute.com. Same 10-minute application. Motor controls, IP litigation, autonomy, power electronics profile.',
    deepResearchPrompt: 'Research Expert Institute for 2026. Find: application process, rate ranges, most common case types involving electrical engineering and IP, how cases are matched to experts, turnaround time from application to first engagement, non-compete clauses, difference between Expert Institute and Round Table Group in terms of case volume and specialization.',
    notes: 'Apply same night as Round Table Group. Two bites at the same apple.',
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
    deadline: 'Ongoing — increase call frequency NOW',
    action: 'Accept more project matches immediately. High-demand topics: EV motors, humanoid robotics, transfer cases, LiDAR, autonomy, rare-earth supply chain, space propulsion. Target 5-10 calls/month minimum.',
    deepResearchPrompt: 'Research GLG, AlphaSights, and Dialectica expert network rates and demand areas for 2026. Which network pays the highest for electrical engineering and autonomy experts? What are the highest-demand topics in 2026 related to humanoid robotics, rare-earth-free motors, EV powertrains, or space propulsion? What is the realistic monthly income for someone doing 5 to 10 calls per month at senior expert level? Are there any new high-value niches opened up by the humanoid robotics boom?',
    notes: 'Already active. Kirk Cox contact for transfer case thread. Humanoid robotics is a new high-demand topic given 2025-2026 boom. Increase frequency immediately.',
    url: 'https://glginsights.com',
    entity: 'II LLC'
  },
  {
    id: 'alien-tech-transfer',
    category: 'consulting',
    name: 'Alien Technology Transfer (SBIR Consultant)',
    amount: 'Success fee only — no upfront cost',
    status: 'todo',
    priority: 2,
    warmIntro: false,
    deadline: 'Contact before submitting NSF pitch',
    action: 'Contact Alien Technology Transfer (Austin TX) for a free Funding Opportunity Assessment (FOA). They work on pure success fee — you pay nothing unless they help you win. They specialize in NSF, DOE, and EIC SBIR. Could boost NSF pitch quality significantly.',
    deepResearchPrompt: 'Research Alien Technology Transfer SBIR consulting firm for 2026. Find: current client reviews and success rate, specific agencies they have won grants from, whether they have experience with rare-earth-free motor or aerospace propulsion topics, how their success fee is structured (percentage of award), how they work with founders during proposal writing, and whether engaging them would conflict with NSF\'s indirect cost rules.',
    notes: 'Vetted in March 2026 session. Success fee model = zero risk. Particularly strong for EIC Accelerator (European) in addition to US SBIR.',
    url: 'https://www.alientechnologytransfer.com',
    entity: 'II LLC or MSS'
  }
];

export const DEEP_RESEARCH_MASTER = `# Master Deep Research Prompt: Funding Landscape 2026

Conduct a comprehensive research sweep of ALL funding pathways for a solo deep-tech founder in motor controls, autonomy, aerospace, and robotics as of mid-2026. The founder has the following profile:
- US permanent resident (EB-1A), Indian citizen, based in Redmond WA
- 15+ years in motor controls, autonomy, and IP generation (225+ patents, ~150 granted)
- Platinum IP Hall of Fame (youngest/fastest ever), IEEE Senior Member, Melvin Wilcox Innovation Award
- Running Inspired Innovation LLC (multi-vertical deep tech entity) and Multiscale Space Systems (space propulsion + orbital reentry startup, co-founded with Shardul Singh Panwar)
- NSF SBIR Project Pitch at REV07 for MSS (nearly ready to submit)
- SAM.gov UEI D4YUPMXSEKJ5 registered (external validation pending)
- IETE PR001 initiative (~₹40cr/3yr, pre-approved)
- BESM rare-earth-free synchronous machine: ITEC 2026 papers accepted, NC State collaboration
- Technical areas: UDC (Universal Dynamical Control framework), USM (Universal Synchronous Machine), BESM/QESM, visual perception systems, orbital reentry vehicles, aerospace active structures, autonomous military vehicles, humanoid actuators

Find ALL of the following:
1. Pre-seed VCs accepting cold pitches in aerospace, defense, or deep tech (2026). Check size, stage, submission method, ITAR compliance.
2. Non-dilutive federal funding: SBIR across all agencies (NSF, DOE, DoD, NASA, NIST, DOT), DARPA BAAs, DIU CSOs, AFRL ARAs. Rolling and near-term deadlines only.
3. Fellowship programs: Activate, Innovation Crossroads, Chain Reaction Innovations, West Gate, Breakthrough Energy. Next deadlines and eligibility.
4. Prize competitions open to professional founders (not student-only): DOE American-Made, Army xTech, HubSpot AIdea, ARC Prize, Hyperspace Challenge, Air Force Tech Connect opportunities. Prizes above $10K, deadlines in next 6 months.
5. Expert witness networks: Round Table Group, Expert Institute, TASA, and any others. Application process and realistic earnings for the founder profile above.
6. Expert network consulting demand: highest-paying topics in 2026 for electrical engineering, autonomy, humanoid robotics, space propulsion, rare-earth supply chain.
7. SBIR consulting firms that work on success fee with no upfront cost.
8. Any India-US bilateral funding (USISTEF, DST, iDEX) relevant to the INSPIN entity.
9. Any new 2026 government programs, OTAs, or innovation funds announced since January 2026.

Output: ranked list per category with name, amount, deadline, submission method, and one-sentence on why this specific founder wins.`;
