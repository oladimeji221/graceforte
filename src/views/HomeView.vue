<script setup lang="ts">
import { ref } from 'vue'
import ClientMarquee from '../components/ClientMarquee.vue'
import CountUp from '../components/CountUp.vue'
import CtaBand from '../components/CtaBand.vue'
import FaqList from '../components/FaqList.vue'
import PowerEstimator from '../components/PowerEstimator.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ScrollStory from '../components/ScrollStory.vue'
import { company, products, projects, services, team } from '../data/site'

const featuredSectors = services.filter((s) => !['engineering-design', 'logistics', 'instrumentation-automation'].includes(s.slug))
const featuredProjects = projects.filter((p) => p.image).slice(0, 8)

const rail = ref<HTMLElement>()
function scrollRail(dir: 1 | -1) {
  rail.value?.scrollBy({ left: dir * rail.value.clientWidth * 0.8, behavior: 'smooth' })
}
</script>

<template>
  <!-- Hero -->
  <section class="gf-hero">
    <div class="b-container">
      <div class="row align-items-center g-5">
        <div class="col-12 col-lg-6 hero-copy">
          <h1 class="display mb-0" data-aos="fade-up" data-aos-delay="100">
            Powering Nigeria’s <span class="text-gradient">grid, towers</span> &amp; industry.
          </h1>
          <p class="lead-lg mb-0" data-aos="fade-up" data-aos-delay="200">
            Graceforte Business Links is an engineering-driven EPC company. We design, build and maintain power lines up to
            330kV, substations, solar &amp; hybrid systems, telecom sites and galvanized steel structures.
          </p>
          <div class="d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="300">
            <RouterLink to="/contact#quote" class="btn-gf">Request a quote <i class="bi bi-arrow-right"></i></RouterLink>
            <RouterLink to="/services" class="btn-gf ghost">Explore services</RouterLink>
          </div>
          <div class="trust-row" data-aos="fade-up" data-aos-delay="400">
            <span><i class="bi bi-patch-check-fill"></i> D-U-N-S® {{ company.duns }}</span>
            <span><i class="bi bi-geo-alt-fill"></i> Lagos HQ · nationwide delivery</span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="hero-visual" data-aos="fade-left" data-aos-duration="1000">
            <div class="main-img">
              <img src="/images/stock/aerial-substation.jpg" alt="Aerial view of a large solar power plant at sunset" fetchpriority="high" />
            </div>
            <div class="float-card c1">
              <span class="icon-chip tint-blue"><i class="bi bi-lightning-charge-fill"></i></span>
              <div><strong>Up to 330kV</strong><small>Transmission lines</small></div>
            </div>
            <div class="float-card c2">
              <span class="icon-chip tint-amber"><i class="bi bi-diagram-3-fill"></i></span>
              <div><strong>33/11kV substations</strong><small>Injection substations · Ikeja Electric</small></div>
            </div>
            <div class="float-card c3">
              <span class="icon-chip tint-green"><i class="bi bi-sun-fill"></i></span>
              <div><strong>Solar &amp; hybrid</strong><small>Homes · business · telecom</small></div>
            </div>
            <div class="hero-badge"><small>Sectors</small><strong>Power · Telecom · Oil &amp; Gas</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Clients -->
  <section class="py-5">
    <p class="text-center fw-medium mb-3">Trusted by utilities, EPC contractors and OEMs</p>
    <ClientMarquee />
  </section>

  <!-- Sectors -->
  <section class="section pt-5">
    <div class="b-container">
      <div class="row align-items-end mb-5 g-4">
        <div class="col-12 col-lg-7 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow align-self-start"><span class="dot"></span> What we do</span>
          <h2 class="title mb-0">One engineering partner for every part of the job.</h2>
        </div>
        <div class="col-12 col-lg-5" data-aos="fade-up" data-aos-delay="100">
          <p class="lead-lg mb-0">From design and procurement to construction and maintenance, our products and services are built to meet and exceed what our clients expect.</p>
        </div>
      </div>
      <div class="row g-4">
        <div
          v-for="(s, i) in featuredSectors"
          :key="s.slug"
          :class="i < 2 ? 'col-12 col-lg-6' : 'col-12 col-md-6 col-lg-3'"
          data-aos="fade-up"
          :data-aos-delay="(i % 4) * 100"
        >
          <RouterLink :to="`/services/${s.slug}`" class="tile" :class="`tint-${s.tint}`">
            <span class="icon-chip lg"><i class="bi" :class="s.icon"></i></span>
            <span class="go"><i class="bi bi-arrow-right"></i></span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.short }}</p>
            <div class="tile-img"><img :src="s.image" :alt="s.title" loading="lazy" /></div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- About + stats (template "who we are", reworked) -->
  <section class="section bg-soft">
    <div class="b-container">
      <div class="row g-5 align-items-center">
        <div class="col-12 col-lg-5 d-flex flex-column gap-4" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> Who we are</span>
          <h2 class="title mb-0">Customer-first engineering, since day one.</h2>
          <p class="lead-lg mb-0">
            Graceforte Business Links Ltd is a Nigerian engineering and EPC company with deep interests in power, telecom and oil &amp; gas.
            Our commitment to service is customer focused. We put clients first in all our dealings.
          </p>
          <RouterLink to="/about" class="btn-cta-primary align-self-start">
            <span class="btn-text">About Graceforte</span>
            <i class="bi bi-arrow-right-circle-fill btn-icon-primary"></i>
          </RouterLink>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row g-3">
            <div class="col-6" data-aos="fade-up">
              <div class="stat"><div class="n"><CountUp :to="30" /><sup>+</sup></div><p>Client project references</p></div>
            </div>
            <div class="col-6" data-aos="fade-up" data-aos-delay="100">
              <div class="stat"><div class="n"><CountUp :to="330" /><sup>kV</sup></div><p>Highest line voltage built</p></div>
            </div>
            <div class="col-6" data-aos="fade-up" data-aos-delay="200">
              <div class="stat"><div class="n"><CountUp :to="team.length" /></div><p>Engineers &amp; managers leading delivery</p></div>
            </div>
            <div class="col-6" data-aos="fade-up" data-aos-delay="300">
              <div class="stat"><div class="n"><CountUp :to="services.length" /></div><p>Integrated service lines</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ScrollStory />

  <!-- Products -->
  <section class="section">
    <div class="b-container">
      <div class="row align-items-end mb-5 g-4">
        <div class="col-12 col-lg-7 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow align-self-start"><span class="dot"></span> New products</span>
          <h2 class="title mb-0">Materials you can order straight from us.</h2>
        </div>
        <div class="col-12 col-lg-5 d-flex justify-content-lg-end" data-aos="fade-up" data-aos-delay="100">
          <RouterLink to="/products" class="link-arrow">View all products <i class="bi bi-arrow-right"></i></RouterLink>
        </div>
      </div>
      <div class="row g-4">
        <div v-for="(p, i) in products" :key="p.slug" class="col-12 col-md-6 col-lg-4" data-aos="fade-up" :data-aos-delay="i * 120">
          <article class="product-card">
            <div class="media">
              <img :src="p.image" :alt="p.name" loading="lazy" />
              <span class="tag">New</span>
            </div>
            <div class="body">
              <h3>{{ p.name }}</h3>
              <p>{{ p.summary }}</p>
              <RouterLink :to="{ path: '/contact', query: { product: p.slug }, hash: '#quote' }" class="link-arrow mt-auto">Request pricing <i class="bi bi-arrow-right"></i></RouterLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <PowerEstimator />

  <!-- Projects rail -->
  <section class="section">
    <div class="b-container">
      <div class="row align-items-end mb-4 g-4">
        <div class="col-12 col-lg-8 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow align-self-start"><span class="dot"></span> Track record</span>
          <h2 class="title mb-0">Recent projects for leading names.</h2>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-lg-end gap-2">
          <button type="button" class="rail-btn" aria-label="Previous projects" @click="scrollRail(-1)"><i class="bi bi-arrow-left"></i></button>
          <button type="button" class="rail-btn" aria-label="Next projects" @click="scrollRail(1)"><i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <div class="b-container px-0">
      <div ref="rail" class="rail">
        <ProjectCard v-for="p in featuredProjects" :key="p.title" :project="p" />
      </div>
    </div>
    <div class="b-container text-center mt-3">
      <RouterLink to="/projects" class="link-arrow">See all {{ projects.length }} projects <i class="bi bi-arrow-right"></i></RouterLink>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section bg-soft">
    <div class="b-container">
      <div class="row g-5">
        <div class="col-12 col-lg-5 d-flex flex-column gap-3" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> FAQ</span>
          <h2 class="title mb-0">Questions clients often ask.</h2>
          <p class="lead-lg mb-0">Can’t find what you’re looking for? <RouterLink to="/contact" class="link-arrow">Talk to us</RouterLink></p>
        </div>
        <div class="col-12 col-lg-7" data-aos="fade-up">
          <FaqList />
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
</template>
