<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import { services } from '../data/site'

const route = useRoute()
const scrolled = ref(false)
const megaOpen = ref(false)
const drawerOpen = ref(false)
const drawerServices = ref(false)
let closeTimer: number | undefined

const links = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 8
}
function openMega() {
  window.clearTimeout(closeTimer)
  megaOpen.value = true
}
function closeMegaSoon() {
  closeTimer = window.setTimeout(() => (megaOpen.value = false), 120)
}

watch(
  () => route.fullPath,
  () => {
    megaOpen.value = false
    drawerOpen.value = false
  },
)
watch(drawerOpen, (open) => document.body.classList.toggle('overflow-hidden', open))

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="gf-header" :class="{ scrolled: scrolled || drawerOpen }">
    <div class="b-container bar">
      <BrandLogo />

      <nav aria-label="Main">
        <ul class="gf-nav">
          <li><RouterLink to="/" class="top" exact-active-class="router-link-active">Home</RouterLink></li>
          <li><RouterLink to="/about" class="top">About</RouterLink></li>
          <li :class="{ open: megaOpen }" @mouseenter="openMega" @mouseleave="closeMegaSoon">
            <button
              type="button"
              class="top"
              :class="{ 'router-link-active': route.path.startsWith('/services') }"
              :aria-expanded="megaOpen"
              aria-controls="services-menu"
              @click="megaOpen = !megaOpen"
            >
              Services <i class="bi bi-chevron-down"></i>
            </button>
            <div id="services-menu" class="gf-mega">
              <RouterLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`">
                <span class="icon-chip" :class="`tint-${s.tint}`"><i class="bi" :class="s.icon"></i></span>
                <span>
                  <strong>{{ s.title }}</strong>
                  <small>{{ s.short }}</small>
                </span>
              </RouterLink>
            </div>
          </li>
          <li v-for="l in links.slice(1)" :key="l.to"><RouterLink :to="l.to" class="top">{{ l.label }}</RouterLink></li>
        </ul>
      </nav>

      <div class="d-flex align-items-center gap-2">
        <RouterLink to="/contact#quote" class="btn-gf sm header-cta">Request a quote <i class="bi bi-arrow-right"></i></RouterLink>
        <button
          type="button"
          class="gf-burger"
          :aria-expanded="drawerOpen"
          aria-controls="mobile-menu"
          :aria-label="drawerOpen ? 'Close menu' : 'Open menu'"
          @click="drawerOpen = !drawerOpen"
        >
          <i class="bi" :class="drawerOpen ? 'bi-x-lg' : 'bi-list'"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="mobile-menu" class="gf-drawer" :class="{ open: drawerOpen }" :aria-hidden="!drawerOpen">
    <RouterLink to="/" class="item">Home <i class="bi bi-arrow-right"></i></RouterLink>
    <RouterLink to="/about" class="item">About <i class="bi bi-arrow-right"></i></RouterLink>
    <a href="#" class="item" @click.prevent="drawerServices = !drawerServices">
      Services <i class="bi" :class="drawerServices ? 'bi-dash-lg' : 'bi-plus-lg'"></i>
    </a>
    <div v-show="drawerServices" class="sub-list py-2">
      <RouterLink to="/services"><span class="icon-chip tint-slate"><i class="bi bi-grid-fill"></i></span> All services</RouterLink>
      <RouterLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`">
        <span class="icon-chip" :class="`tint-${s.tint}`"><i class="bi" :class="s.icon"></i></span>{{ s.title }}
      </RouterLink>
    </div>
    <RouterLink v-for="l in links.slice(1)" :key="l.to" :to="l.to" class="item">{{ l.label }} <i class="bi bi-arrow-right"></i></RouterLink>
    <RouterLink to="/contact#quote" class="btn-gf w-100 mt-4">Request a quote <i class="bi bi-arrow-right"></i></RouterLink>
  </div>
</template>
