import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { absolute, DEFAULT_IMAGE, seoPages, SITE_URL, type SeoPage } from './src/data/seo'

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headFor(page: SeoPage) {
  const url = absolute(page.path)
  const image = absolute(page.image ?? DEFAULT_IMAGE)
  return [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Graceforte Business Links Ltd">`,
    `<meta property="og:locale" content="en_NG">`,
    `<meta property="og:title" content="${escape(page.title)}">`,
    `<meta property="og:description" content="${escape(page.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escape(page.title)}">`,
    `<meta name="twitter:description" content="${escape(page.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join('\n    ')
}

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/

// Writes one static HTML file per route (so link previews and crawlers that don't run JS
// see the right title/description), plus sitemap.xml and robots.txt.
function seo(): Plugin {
  let outDir = 'dist'
  return {
    name: 'graceforte-seo',
    apply: 'build',
    configResolved: (config) => {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml: (html) => html.replace(SEO_BLOCK, `<!--seo-->\n    ${headFor(seoPages[0]!)}\n    <!--/seo-->`),
    closeBundle() {
      const write = (file: string, content: string) => {
        const full = path.join(outDir, file)
        mkdirSync(path.dirname(full), { recursive: true })
        writeFileSync(full, content)
      }
      const html = readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const page of seoPages.slice(1)) {
        write(`${page.path.slice(1)}.html`, html.replace(SEO_BLOCK, `<!--seo-->\n    ${headFor(page)}\n    <!--/seo-->`))
      }
      const today = new Date().toISOString().slice(0, 10)
      write(
        'sitemap.xml',
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          seoPages
            .map((p) => `  <url><loc>${absolute(p.path)}</loc><lastmod>${today}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`)
            .join('\n') +
          '\n</urlset>\n',
      )
      write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /contact.php\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    seo(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
