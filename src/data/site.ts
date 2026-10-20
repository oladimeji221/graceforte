// All site copy lives here so it can be updated without touching layouts.
// Source: "Graceforte Ltd Profile" deck and the client's brief (content/).

export const company = {
  name: 'Graceforte Business Links Ltd',
  shortName: 'Graceforte',
  tagline: 'Competence, Innovation & Excellence',
  sectors: 'Power, Telecom, Oil & Gas, Construction & Logistics',
  duns: '55-992-1680',
  address: '44 Godwin Omonua Way, Ire-Akari Estate, Isolo, Lagos, Nigeria',
  emails: ['info@graceforteltd.com', 'graceforteltd@gmail.com'],
  phones: [
    { label: '+234 803 571 5031', tel: '+2348035715031' },
    { label: '+234 808 500 2912', tel: '+2348085002912' },
  ],
  whatsapp: '2348035715031',
  mapQuery: '44 Godwin Omonua Way, Ire-Akari Estate, Isolo, Lagos',
}

export interface Service {
  slug: string
  title: string
  short: string
  intro: string
  icon: string
  tint: string
  image: string
  gallery: string[]
  scope: string[]
}

export const services: Service[] = [
  {
    slug: 'power',
    title: 'Power Transmission & Distribution',
    short: 'Transmission and distribution lines from 415V up to 330kV, injection substations and switchyards.',
    intro:
      'We engineer, procure and construct power infrastructure for distribution companies, developers and industrial users, from overhead lines to fully equipped injection substations.',
    icon: 'bi-lightning-charge-fill',
    tint: 'blue',
    image: '/images/work/power-project.jpg',
    gallery: [
      '/images/work/alausa-feeder-1.jpg',
      '/images/work/transmission-tower-1.jpg',
      '/images/work/injection-substation-gantry.jpg',
      '/images/work/aja-eleko-poles.jpg',
    ],
    scope: [
      'Engineering design and material procurement',
      'Transmission & distribution lines: 330kV, 132kV, 33kV, 11kV and 415V',
      'Power and injection substations, switchyards, mechanical & electrical equipment',
      'Rural electrification',
      'Street lighting',
      'Industrial & domestic electrical fittings and appliances',
      'Power generator plant installation',
    ],
  },
  {
    slug: 'solar',
    title: 'Solar & Hybrid Power',
    short: 'Solar, inverter backup and diesel–PV hybrid systems for homes, businesses and telecom sites.',
    intro:
      'As a Solar Power and Renewable Energy EPC company we design and install solar systems, inverter backup and diesel–PV hybrid solutions. Our clients range from households to telecoms, filling stations, banks, hospitals, rural communities, utilities and large-scale power users.',
    icon: 'bi-sun-fill',
    tint: 'amber',
    image: '/images/work/solar-canopy.jpg',
    gallery: ['/images/work/solar-canopy.jpg', '/images/stock/pv-engineer.jpg', '/images/stock/engineers-tablet-solar.jpg', '/images/stock/solar-plant.jpg'],
    scope: [
      'Solar system design, supply and installation',
      'Inverter and battery backup solutions',
      'Diesel–PV hybrid systems',
      'Hybrid power for telecom base stations',
      'Solar street lighting',
      'Maintenance and performance checks',
    ],
  },
  {
    slug: 'telecom',
    title: 'Telecommunication',
    short: 'Site acquisition, base station builds, hybrid power and WAN/LAN systems.',
    intro:
      'We support network operators and tower companies end to end, from finding and securing sites to building base stations and keeping them powered.',
    icon: 'bi-broadcast-pin',
    tint: 'violet',
    image: '/images/work/telecom-towers.jpg',
    gallery: ['/images/work/telecom-mast.jpg', '/images/work/telecom-rack.jpg', '/images/work/telecom-aviation-lights.jpg'],
    scope: [
      'Engineering design',
      'Material procurement and installation',
      'Site acquisition',
      'Base station site builds',
      'Hybrid power generating systems',
      'WAN & LAN systems',
    ],
  },
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    short: 'Platforms, pipeline integrity, steel profile coating, instrumentation and facility maintenance.',
    intro:
      'For upstream and downstream operators we deliver fabrication, construction and maintenance work, backed by engineers experienced in instrumentation, automation and SCADA systems.',
    icon: 'bi-fuel-pump-fill',
    tint: 'green',
    image: '/images/work/oil-gas.jpg',
    gallery: ['/images/work/pipe-coating.jpg', '/images/work/oil-gas.jpg', '/images/stock/engineers-controlling.jpg'],
    scope: [
      'Engineering design',
      'Material and equipment procurement and installation',
      'Fabrication & coating of pipes, angles and H-beam profiles',
      'Construction of platforms',
      'Pipeline integrity survey and repair',
      'Facility management and maintenance',
      'Instrumentation and automation services',
      'Project management',
    ],
  },
  {
    slug: 'instrumentation-automation',
    title: 'Instrumentation & Automation',
    short: 'Distribution & control systems, SCADA and computer-based monitoring for oil & gas, power, telecom and construction.',
    intro:
      'Graceforte has capable professionals experienced in automation and instrumentation engineering. Our team covers planning, design, applications programming, implementation, start-up and training for distribution & control systems, supervisory control and data acquisition (SCADA) systems, and computer-based monitoring and control systems.',
    icon: 'bi-cpu-fill',
    tint: 'violet',
    image: '/images/stock/engineers-controlling.jpg',
    gallery: ['/images/stock/engineers-controlling.jpg', '/images/work/telecom-rack.jpg', '/images/work/oil-gas.jpg'],
    scope: [
      'Planning and design',
      'Applications programming',
      'Implementation and start-up',
      'Training services',
      'Distribution & control systems',
      'SCADA systems',
      'Computer-based monitoring and control systems',
    ],
  },
  {
    slug: 'steel-fabrication',
    title: 'Steel Fabrication & Coating',
    short: 'Steel structures, buildings, warehouses and platforms with epoxy, red-oxide and hot-dip galvanized finishes.',
    intro:
      'Our structural engineers deliver first-class fabricated steel structures for the oil and gas, telecom and power sectors and for general industry, finished to protect against Nigerian weather for decades.',
    icon: 'bi-bricks',
    tint: 'slate',
    image: '/images/work/steel-building-frame.jpg',
    gallery: ['/images/work/steel-building-frame.jpg', '/images/work/pipe-coating.jpg', '/images/work/transmission-tower-2.jpg'],
    scope: [
      'Structural design',
      'Steel structures from pipes, H-beams and angle sections',
      'Steel buildings and warehouses',
      'Platforms',
      'Epoxy and red-oxide coating',
      'Hot-dip galvanizing (with certified partners)',
    ],
  },
  {
    slug: 'engineering-design',
    title: 'Engineering Design',
    short: 'Structural, civil and electrical design using iTower, PLS-CADD, PLS-Tower, AutoCAD, STAAD.Pro and Tekla.',
    intro:
      'Good projects start on the drawing board. Our design team produces efficient, cost-effective structural, civil and electrical designs that are ready to build.',
    icon: 'bi-rulers',
    tint: 'blue',
    image: '/images/work/engineering-design.jpg',
    gallery: ['/images/work/engineering-design.jpg', '/images/work/focus.jpg', '/images/stock/engineers-discussion.jpg'],
    scope: [
      'Transmission tower and line design (iTower, PLS-CADD, PLS-Tower)',
      'Structural steel design (STAAD.Pro, Tekla)',
      'Civil and foundation design',
      'Electrical system design',
      'Drafting and documentation (AutoCAD)',
    ],
  },
  {
    slug: 'construction',
    title: 'Civil & Building Construction',
    short: 'EPC for civil, electrical, mechanical, petroleum and marine works, from foundations to finished buildings.',
    intro:
      'We provide EPC services across engineering fields, handling site development, foundation works and building construction for commercial and residential clients.',
    icon: 'bi-building-fill',
    tint: 'amber',
    image: '/images/work/foundation-2.jpg',
    gallery: ['/images/work/foundation-1.jpg', '/images/work/building-1.jpg', '/images/work/building-2.jpg', '/images/work/foundation-3.jpg'],
    scope: [
      'Civil engineering construction',
      'Site construction and development',
      'Foundation works',
      'Residential and office buildings',
      'Mechanical, petroleum and marine engineering construction',
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics & Procurement',
    short: 'Haulage, inventory, warehousing and procurement of materials and equipment.',
    intro:
      'Projects stall when materials are late. Our logistics arm moves, stores and tracks equipment so sites keep moving.',
    icon: 'bi-truck',
    tint: 'green',
    image: '/images/work/aja-eleko-poles.jpg',
    gallery: ['/images/work/aja-eleko-poles.jpg', '/images/work/line-crew-1.jpg'],
    scope: [
      'Haulage and transportation (including 5-ton HIAB trucks)',
      'Inventory management',
      'Warehousing',
      'Procurement of materials and equipment',
    ],
  },
]

export interface Product {
  slug: string
  name: string
  summary: string
  points: string[]
  image: string
  tint: string
  icon: string
}

export const products: Product[] = [
  {
    slug: 'termination-joint-kits',
    name: 'Greenfield Termination & Joint Kits',
    summary: 'Cable termination and straight-through joint kits for medium-voltage power networks.',
    points: ['Indoor and outdoor terminations', 'Straight-through joints', 'Supplied with installation support'],
    image: '/images/work/substation-transformer.jpg',
    tint: 'blue',
    icon: 'bi-plug-fill',
  },
  {
    slug: 'galvanized-steel-structures',
    name: 'Fabricated Galvanized Steel Structures',
    summary: 'Substation gantries, towers, platforms and frames, designed and fabricated to project specification.',
    points: ['Designed in-house', 'Hot-dip galvanized finish', 'Delivered and erected on site'],
    image: '/images/work/injection-substation-gantry.jpg',
    tint: 'slate',
    icon: 'bi-grid-3x3-gap-fill',
  },
  {
    slug: 'galvanized-steel-profiles',
    name: 'Hot-Dip Galvanized Steel Profiles',
    summary: 'Angles, pipes, channels and H-beams galvanized for long-life corrosion protection.',
    points: ['Angle and pipe profiles', 'Channels and H-beams', 'Cut to length on request'],
    image: '/images/work/transmission-tower-2.jpg',
    tint: 'amber',
    icon: 'bi-layers-fill',
  },
]

export type ProjectCategory = 'Power' | 'Steel & Galvanizing' | 'Construction'

export interface Project {
  client: string
  title: string
  year: number
  category: ProjectCategory
  image?: string
}

// Client reference table from the company profile, de-duplicated.
// Contact persons are deliberately omitted: they are private references, not for publication.
export const projects: Project[] = [
  { client: 'Laralek Ultimate Ltd', title: 'Relocation of sections of 11kV and 0.415kV overhead lines along Ojuwoye Street, Mushin, Lagos', year: 2026, category: 'Power', image: '/images/work/distribution-1.jpg' },
  { client: 'Laralek Ultimate Ltd', title: 'Relocation of power distribution lines in Mushin', year: 2026, category: 'Power', image: '/images/work/distribution-2.jpg' },
  { client: 'Krist Ella Nig Ltd', title: 'Ondo Town feeder reconstruction and transfer of old outgoing feeder to new bay', year: 2024, category: 'Power', image: '/images/work/substation-yard.jpg' },
  { client: 'One Source Universal Retail Supply & Trading Co. of Nigeria Ltd', title: 'Installation of transformers across business outlets, Ikeja, Lagos', year: 2024, category: 'Power', image: '/images/work/substation-transformer.jpg' },
  { client: 'Laralek Ultimate Ltd', title: 'Relocation of 11kV and 415V lines and substations at Abesan Estate, Ipaja, Lagos', year: 2023, category: 'Power', image: '/images/work/distribution-3.jpg' },
  { client: 'Prepromtech Nigeria Ltd', title: 'Construction of a 6-bedroom duplex in Okota, Lagos', year: 2023, category: 'Construction', image: '/images/work/building-2.jpg' },
  { client: 'Laralek Ultimate Ltd', title: '31km single-circuit 33kV line from Ajah Transmission Station to Eleko Junction, Lekki–Epe Expressway', year: 2022, category: 'Power', image: '/images/work/aja-eleko-2.jpg' },
  { client: 'Income Electrix Ltd', title: 'Supply and installation of steel structures and substation equipment with 15MVA transformer', year: 2022, category: 'Steel & Galvanizing', image: '/images/work/alausa-feeder-2.jpg' },
  { client: 'Cel Tech Engineering Ltd', title: 'Construction of office block, Amuwo Odofin, Lagos', year: 2022, category: 'Construction', image: '/images/work/building-1.jpg' },
  { client: 'Laralek Ultimate Ltd', title: 'Relocation of a section of 33kV line in Ajah, Lagos', year: 2021, category: 'Power', image: '/images/work/line-crew-2.jpg' },
  { client: 'Ikeja Electric', title: 'Supply and installation of control system cables at the Ikeja Injection Substation', year: 2020, category: 'Power', image: '/images/work/alausa-feeder-3.jpg' },
  { client: 'Ikeja Electric', title: 'Relocation of sections of a 33kV line in Ikeja', year: 2020, category: 'Power', image: '/images/work/distribution-line.jpg' },
  { client: 'Income Electrix Ltd', title: 'Supply and installation of steel structures and substation equipment', year: 2020, category: 'Steel & Galvanizing', image: '/images/work/injection-substation-gantry.jpg' },
  { client: 'Ikeja Electric', title: '33/11kV injection substation with associated lines at the new Alausa Transmission Substation', year: 2019, category: 'Power', image: '/images/work/alausa-feeder-1.jpg' },
  { client: 'Cel Tech Engineering Ltd', title: 'NIMASA power system and protection upgrade at the Lagos, Oron and Port Harcourt offices', year: 2019, category: 'Power', image: '/images/work/focus.jpg' },
  { client: 'Cel Tech Engineering Ltd', title: 'Civil works at Irri Gas Flow Station expansion, Delta State', year: 2019, category: 'Construction', image: '/images/work/foundation-1.jpg' },
  { client: 'Cel Tech Engineering Ltd', title: '8 × 3-bedroom flats with 3-bedroom bungalow, Ajah, Lagos', year: 2018, category: 'Construction', image: '/images/work/foundation-3.jpg' },
  { client: 'Gosslink Engineering Ltd', title: 'Construction of a section of transmission line', year: 2017, category: 'Power', image: '/images/work/transmission-tower-1.jpg' },
  { client: 'Schneider Electric Nigeria Ltd', title: 'Fabrication and hot-dip galvanizing of steel pipe profiles', year: 2016, category: 'Steel & Galvanizing', image: '/images/work/pipe-coating.jpg' },
  { client: 'Energovod Engineering Ltd', title: 'Fabrication and hot-dip galvanizing of steel angle profiles (multiple orders)', year: 2016, category: 'Steel & Galvanizing', image: '/images/work/transmission-tower-2.jpg' },
  { client: 'Income Electrix Ltd', title: 'Design, fabrication and galvanizing of steel structures', year: 2015, category: 'Steel & Galvanizing', image: '/images/work/steel-building-frame.jpg' },
  { client: 'Power System & Automation Solution Ltd', title: 'Structural design for power distribution towers', year: 2015, category: 'Steel & Galvanizing', image: '/images/work/power-project.jpg' },
]

export const clients = [
  'Ikeja Electric',
  'Schneider Electric Nigeria',
  'Income Electrix',
  'Energovod Engineering',
  'Laralek Ultimate',
  'Cel Tech Engineering',
  'Gosslink Engineering',
  'Power System & Automation',
  'Krist Ella Nig',
  'PowerProjects Ltd',
  'One Source Universal',
  'Prepromtech Nigeria',
]

// Headings from the profile deck; wording expanded from the current site's "Our Core Values" page.
export const values = [
  {
    title: 'Commitment',
    text: 'To our customers and partners. Our dedicated professionals are readily available to address the dynamic needs of our customers.',
    icon: 'bi-hand-thumbs-up-fill',
  },
  {
    title: 'Quality',
    text: 'Through a strategic fusion of independent business units, we deliver quality, efficient products and services on time.',
    icon: 'bi-patch-check-fill',
  },
  {
    title: 'Passion',
    text: 'For customer satisfaction, driven by a strong desire to add value to our clients and society at large.',
    icon: 'bi-heart-fill',
  },
  {
    title: 'Innovation',
    text: 'Innovation is our lifestyle. We use cutting-edge systems and technology to serve all our stakeholders.',
    icon: 'bi-lightbulb-fill',
  },
  {
    title: 'Professionalism',
    text: 'Highly skilled, motivated employees who bring an excellent, innovative and passionate approach to every job.',
    icon: 'bi-person-badge-fill',
  },
]

export const partners = [
  'PowerProjects Limited',
  'Income Electrix Ltd',
  'Power System & Automation Ltd',
  'Energovod S.R.',
  'Gosslink Engineering Ltd',
]

export const team = [
  { name: 'Onuoha Okpo', role: 'MD / CEO' },
  { name: 'Blessing Oyiza Okpo', role: 'Executive Director' },
  { name: 'Ngwoke F. Chidiebere', role: 'Director of Projects' },
  { name: 'Ichie Chukwumaobi Ichie', role: 'Senior Project Manager, Electrical' },
  { name: 'Bitrus Oziok', role: 'Senior Project Manager, Civil' },
  { name: 'Christian Emenike', role: 'Project Manager, Civil' },
  { name: 'Shedrach Asiki', role: 'Head of Procurement' },
  { name: 'Ezinne Hannah Okocha', role: 'Head of Admin & HR' },
  { name: 'Uchenna Nwokocha', role: 'Finance Manager' },
  { name: 'Chinecherem Ojukwu', role: 'HSE Coordinator' },
  { name: 'Moses Okocha', role: 'Head of Marketing' },
  { name: 'Enock Okorie', role: 'Logistics Manager' },
]

// Full "Equipment Capabilities" list from the profile deck (slides 7–8).
export const equipment = [
  'HIAB trucks (5 tons)', 'Concrete mixers', 'Mobile generators (5/10kVA)', 'Drilling machines',
  'Pulling machines', 'Welding machines (3-phase)', 'Welding transformers (3-phase)', 'AVO Megger',
  'Insulation resistance tester (Megger)', 'Multimeter', 'Clamp meter', 'Earth resistance tester',
  'Phase-sequence tester', 'Voltage detector', 'Mechanical crimping tools', 'Complete tool box',
  'First aid box', 'Cable cutters', 'Cable / rope rollers', 'Conductor pulling winch',
  'Tensioner', 'Cable drum stands', 'Pulling ropes', 'Conductor grips',
  'Swivels and shackles', 'Come-alongs', 'Sagging equipment', 'Climbing belts',
  'Torque wrench', 'HT and LT ladders', 'Safety gear', 'High-voltage grounding rods with earth clamp',
]

export const process = [
  {
    step: '01',
    title: 'Design',
    text: 'Our engineers survey the site and produce structural, civil and electrical designs with iTower, PLS-CADD, STAAD.Pro and Tekla, optimised for cost and safety.',
    image: '/images/work/engineering-design.jpg',
  },
  {
    step: '02',
    title: 'Procure',
    text: 'We source certified materials and equipment, fabricate and galvanize steel in-house with partners, and move it all to site with our own logistics fleet.',
    image: '/images/work/aja-eleko-poles.jpg',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Experienced crews erect lines, substations, structures and buildings with full HSE supervision and the right equipment for the job.',
    image: '/images/work/alausa-feeder-2.jpg',
  },
  {
    step: '04',
    title: 'Maintain',
    text: 'After handover we test, commission and maintain, so your infrastructure keeps performing long after the ribbon is cut.',
    image: '/images/work/substation-transformer.jpg',
  },
]

export const faqs = [
  {
    q: 'Which sectors does Graceforte work in?',
    a: 'Power (transmission, distribution and substations), solar and hybrid energy, telecommunications, oil & gas, steel fabrication, civil construction and logistics.',
  },
  {
    q: 'What voltage levels can you build?',
    a: 'We construct transmission and distribution lines from 415V up to 330kV, as well as 33/11kV injection substations and switchyards.',
  },
  {
    q: 'Do you handle projects outside Lagos?',
    a: 'Yes. We are headquartered in Isolo, Lagos and have delivered projects in Ondo, Delta, Akwa Ibom (Oron) and Rivers (Port Harcourt), among others.',
  },
  {
    q: 'Can you supply galvanized steel without installation?',
    a: 'Yes. Our fabricated galvanized structures and hot-dip galvanized steel profiles can be supplied on their own or with installation.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Send us your project details through the contact form, by email or on WhatsApp. An engineer will review your requirements and get back to you.',
  },
]
