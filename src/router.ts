import { createRouter, createWebHistory } from 'vue-router'
import { absolute, DEFAULT_IMAGE, findSeo, SITE_NAME } from './data/seo'
import { services } from './data/site'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Engineering & EPC for Power, Telecom, Oil & Gas' } },
    { path: '/about', name: 'about', component: () => import('./views/AboutView.vue'), meta: { title: 'About Us' } },
    { path: '/services', name: 'services', component: () => import('./views/ServicesView.vue'), meta: { title: 'Our Services' } },
    {
      path: '/services/:slug',
      name: 'service',
      component: () => import('./views/ServiceDetailView.vue'),
      beforeEnter: (to) => (services.some((s) => s.slug === to.params.slug) ? true : { name: 'not-found', params: { path: to.path.split('/').slice(1) } }),
    },
    { path: '/products', name: 'products', component: () => import('./views/ProductsView.vue'), meta: { title: 'Products' } },
    { path: '/projects', name: 'projects', component: () => import('./views/ProjectsView.vue'), meta: { title: 'Projects' } },
    { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue'), meta: { title: 'Contact Us' } },
    { path: '/:path(.*)*', name: 'not-found', component: () => import('./views/NotFoundView.vue'), meta: { title: 'Page not found' } },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return { top: 0 }
  },
})

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}

router.afterEach((to) => {
  const page = findSeo(to.path)
  const title = page?.title ?? `${to.meta.title ?? 'Page not found'} | ${SITE_NAME}`
  document.title = title
  setMeta('property', 'og:title', title)
  setMeta('name', 'twitter:title', title)
  if (page) {
    const image = absolute(page.image ?? DEFAULT_IMAGE)
    setMeta('name', 'description', page.description)
    setMeta('property', 'og:description', page.description)
    setMeta('name', 'twitter:description', page.description)
    setMeta('property', 'og:url', absolute(page.path))
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:image', image)
  }
  setMeta('name', 'robots', page ? 'index, follow' : 'noindex')
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = absolute(page?.path ?? to.path)
})

export default router
