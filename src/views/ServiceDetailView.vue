<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CtaBand from '../components/CtaBand.vue'
import PageBanner from '../components/PageBanner.vue'
import PowerEstimator from '../components/PowerEstimator.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { company, projects, services } from '../data/site'

const route = useRoute()
// The router guard guarantees the slug exists.
const service = computed(() => services.find((s) => s.slug === route.params.slug)!)

const gallery = computed(() => service.value.gallery.map((g) => (typeof g === 'string' ? { src: g } : g)))

const related = computed(() => {
  const cat =
    service.value.slug === 'steel-fabrication' ? 'Steel & Galvanizing'
    : service.value.slug === 'construction' ? 'Construction'
    : service.value.slug === 'power' ? 'Power'
    : null
  // Prefer projects that have photos; photo-less ones only fill remaining slots.
  const matches = cat ? projects.filter((p) => p.category === cat) : []
  return [...matches.filter((p) => p.image), ...matches.filter((p) => !p.image)].slice(0, 3)
})
</script>

<template>
  <PageBanner :title="service.title" :image="service.image" :subtitle="service.short" :crumbs="[{ label: 'Services', to: '/services' }]" />

  <section class="section">
    <div class="b-container">
      <div class="row g-5">
        <div class="col-12 col-lg-8 d-flex flex-column gap-5">
          <div class="d-flex flex-column gap-4" data-aos="fade-up">
            <span class="icon-chip lg align-self-start" :class="`tint-${service.tint}`"><i class="bi" :class="service.icon"></i></span>
            <h2 class="title mb-0">{{ service.title }}</h2>
            <p class="lead-lg mb-0">{{ service.intro }}</p>
          </div>

          <div v-if="service.groups" class="d-flex flex-column gap-3">
            <h4 class="text-heading-color-3 mb-1">What we do</h4>
            <div v-for="(g, i) in service.groups" :key="g.title" class="scope-group" data-aos="fade-up">
              <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="d-flex flex-column gap-2">
                <h5>{{ g.title }}</h5>
                <span v-if="g.subtitle" class="subtitle">{{ g.subtitle }}</span>
                <p v-if="g.text" class="mb-0">{{ g.text }}</p>
                <ul v-if="g.items" class="check-list mt-1">
                  <li v-for="item in g.items" :key="item"><i class="bi bi-check-circle-fill"></i>{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-if="service.scope.length" class="rounded-6 padding-50 bg-heading-color-3 card-cta" data-aos="fade-up">
            <h4 class="text-white mb-4">{{ service.groups ? 'Also included' : 'What’s included' }}</h4>
            <ul class="check-list on-dark">
              <li v-for="item in service.scope" :key="item"><i class="bi bi-check-circle-fill"></i>{{ item }}</li>
            </ul>
          </div>

          <div v-if="gallery.length" class="d-flex flex-column gap-4" data-aos="fade-up">
            <h4 class="text-heading-color-3 mb-0">From the field</h4>
            <div class="gallery">
              <figure v-for="g in gallery" :key="g.src">
                <img :src="g.src" :alt="g.caption ?? service.title" loading="lazy" />
                <figcaption v-if="g.caption">{{ g.caption }}</figcaption>
              </figure>
            </div>
          </div>

          <div v-if="related.length" class="d-flex flex-column gap-4">
            <h4 class="text-heading-color-3 mb-0">Related projects</h4>
            <div class="row g-3">
              <div v-for="p in related" :key="p.title" class="col-12 col-md-4"><ProjectCard :project="p" style="height: 340px" /></div>
            </div>
          </div>
        </div>

        <aside class="col-12 col-lg-4">
          <div class="d-flex flex-column gap-4 position-sticky" style="top: 100px">
            <div class="side-card">
              <h6 class="text-heading-color-3 mb-3 px-2">All services</h6>
              <RouterLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`" class="svc">
                {{ s.title }} <i class="bi bi-arrow-right"></i>
              </RouterLink>
            </div>
            <div class="side-card bg-heading-color-2 text-white d-flex flex-column gap-3">
              <h4 class="text-white mb-0">Need this service?</h4>
              <p class="text-color-1 mb-0">Send us your requirements and we’ll respond with next steps.</p>
              <RouterLink :to="{ path: '/contact', query: { service: service.slug }, hash: '#quote' }" class="btn-gf light">Request a quote <i class="bi bi-arrow-right"></i></RouterLink>
              <a :href="`tel:${company.phones[0]!.tel}`" class="text-white fw-semibold"><i class="bi bi-telephone-fill me-2"></i>{{ company.phones[0]!.label }}</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <PowerEstimator v-if="service.slug === 'solar'" />
  <CtaBand />
</template>
