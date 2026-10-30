// Per-page SEO metadata. Used by the router (client-side updates) and by the
// build plugin in vite.config.ts (static HTML per route, sitemap.xml, robots.txt).
import { company, services } from './site'

export const SITE_URL = 'https://www.graceforteltd.com'
export const SITE_NAME = company.name
export const DEFAULT_IMAGE = '/images/og-image.jpg'

export interface SeoPage {
  path: string
  title: string
  description: string
  image?: string
  priority: number
}

export const seoPages: SeoPage[] = [
  {
    path: '/',
    title: `${SITE_NAME} | Engineering & EPC for Power, Telecom, Oil & Gas`,
    description:
      'Lagos-based engineering and EPC company delivering power lines up to 400kV, injection substations, solar and hybrid systems, telecom sites, oil and gas services and galvanized steel structures across Nigeria.',
    priority: 1.0,
  },
  {
    path: '/about',
    title: `About Us | ${SITE_NAME}`,
    description:
      'Graceforte Business Links Ltd is an engineering-driven company serving the power, telecom, oil & gas, construction and logistics sectors. Meet our team, values and equipment capability.',
    image: '/images/stock/engineers-discussion.jpg',
    priority: 0.8,
  },
  {
    path: '/services',
    title: `Our Services | ${SITE_NAME}`,
    description:
      'Engineering design, procurement, construction and maintenance under one roof: power transmission and distribution, solar, telecom, oil & gas, steel fabrication, instrumentation, civil works and logistics.',
    image: '/images/stock/engineer-maintenance.jpg',
    priority: 0.9,
  },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    title: `${s.title} | ${SITE_NAME}`,
    description: `${s.short} ${company.shortName} delivers ${s.title.toLowerCase()} across Nigeria.`,
    image: s.image,
    priority: 0.8,
  })),
  {
    path: '/products',
    title: `Products | ${SITE_NAME}`,
    description:
      'Greenfield termination and joint kits, fabricated galvanized steel structures and hot-dip galvanized steel profiles, supplied direct or with installation.',
    image: '/images/work/transmission-tower-2.jpg',
    priority: 0.8,
  },
  {
    path: '/projects',
    title: `Projects | ${SITE_NAME}`,
    description:
      'Selected projects for Ikeja Electric, Schneider Electric, Income Electrix, Energovod and others: 33kV lines, injection substations, galvanized steel and building construction.',
    image: '/images/work/power-project.jpg',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: `Contact Us | ${SITE_NAME}`,
    description: `Request a quote or talk to an engineer. ${company.address}. Call ${company.phones[0]!.label} or email ${company.emails[0]}.`,
    image: '/images/stock/young-engineers.jpg',
    priority: 0.7,
  },
]

export function findSeo(path: string): SeoPage | undefined {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return seoPages.find((p) => p.path === clean)
}

export const absolute = (p: string) => (p.startsWith('http') ? p : SITE_URL + p)
