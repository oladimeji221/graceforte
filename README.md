# Graceforte Business Links — website

Vue 3 + Vite rebuild of graceforteltd.com. Styling is the Auron template (`content/template`) re-themed to Graceforte blue, plus Moniepoint-style components.

## Where things live

- `src/data/site.ts` — **all copy**: company details, services, products, projects, team, FAQs. Edit here, not in the views.
- `src/views/` — pages (Home, About, Services, Service detail, Products, Projects, Contact, 404)
- `src/components/` — header, footer, scroll-story, solar estimator, marquee, FAQ, CTA band
- `src/assets/css/template.css` — the template stylesheet with its colour variables swapped
- `src/assets/css/graceforte.css` — the new components
- `public/images/work/` — real project photos from the company profile; `public/images/stock/` — template stock photos
- `public/contact.php` — contact/quote form mailer (sends to info@graceforteltd.com)
- `public/.htaccess` — clean URLs, per-page HTML, SPA fallback, 301 redirects from the old WordPress URLs
- `src/data/seo.ts` — page titles/descriptions; the build turns these into one HTML file per page (for link previews), `sitemap.xml` and `robots.txt`
- `public/favicon.svg`, `icon-*.png`, `site.webmanifest`, `images/og-image.jpg` — favicons and the social share image

## Develop

```sh
npm install --legacy-peer-deps   # plain `npm install` hits an npm 10 peer-dep bug on Node 20
npm run dev
```

Client source material (profile deck, brief, template) lives in `content/`, which is git-ignored because it contains hosting credentials.

## Deploy (cPanel)

```sh
npm run build
```

Upload the **contents** of `dist/` to `public_html/` (include the hidden `.htaccess`). The site must sit at the domain root.
After the first deploy, submit `https://www.graceforteltd.com/sitemap.xml` in Google Search Console.
For the form to deliver reliably, create the `no-reply@graceforteltd.com` mailbox in cPanel (or change `FROM` in `contact.php`).
