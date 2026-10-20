<script setup lang="ts">
import CtaBand from '../components/CtaBand.vue'
import PageBanner from '../components/PageBanner.vue'
import { company, equipment, partners, team, values } from '../data/site'

const tints = ['blue', 'amber', 'violet', 'green', 'slate']
const initials = (name: string) =>
  name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
</script>

<template>
  <PageBanner
    title="About Us"
    image="/images/stock/engineers-discussion.jpg"
    subtitle="An engineering-driven company providing a wide range of products and services across Nigeria."
  />

  <!-- Intro -->
  <section class="section">
    <div class="b-container">
      <div class="row g-5 align-items-center">
        <div class="col-12 col-lg-6 d-flex flex-column gap-4" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> Our story</span>
          <h2 class="title mb-0">Competence, innovation &amp; excellence, adding value on every project.</h2>
          <p class="lead-lg mb-0">
            {{ company.name }} is an engineering-driven company with vast interests in power, telecom, oil &amp; gas, construction and logistics.
            Our services and products are all fashioned to effectively meet, and wherever possible exceed, the expectations of our clients.
          </p>
          <p class="lead-lg mb-0">
            Our commitment to service is customer focused and oriented. We are committed professionals with an excellent, innovative and
            passionate approach to what we do, delivering world-class services in record time.
          </p>
        </div>
        <div class="col-12 col-lg-6" data-aos="fade-left">
          <div class="row g-3">
            <div class="col-7"><img src="/images/work/alausa-feeder-1.jpg" alt="Injection substation construction" class="w-100 rounded-6 object-cover" style="height: 420px" /></div>
            <div class="col-5 d-flex flex-column gap-3">
              <img src="/images/work/solar-canopy.jpg" alt="Solar installation" class="w-100 rounded-6 object-cover" style="height: 202px" />
              <img src="/images/work/steel-building-frame.jpg" alt="Galvanized steel building frame" class="w-100 rounded-6 object-cover" style="height: 202px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & vision (template numbered cards) -->
  <section class="section bg-heading-color-3" id="mission">
    <div class="b-container">
      <div class="row g-4">
        <div class="col-12 col-lg-4 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow on-dark align-self-start"><span class="dot"></span> What we stand for</span>
          <h2 class="title text-white mb-0">Mission &amp; vision</h2>
        </div>
        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div class="d-flex flex-column bg-heading-color-2 padding-30 rounded-6 gap-4 h-100">
            <h2 class="mb-0 text-heading-color-1">01</h2>
            <div class="d-flex flex-column gap-3">
              <h4 class="mb-0 text-white">Our mission</h4>
              <p class="text-color-1 mb-0">To deliver efficient, reliable and cost-effective engineering solutions for the power, telecom, oil &amp; gas and construction sectors on time, safely and to the highest quality.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div class="d-flex flex-column bg-heading-color-1 padding-30 rounded-6 gap-4 h-100">
            <h2 class="mb-0 text-heading-color-3">02</h2>
            <div class="d-flex flex-column gap-3 text-heading-color-3">
              <h4 class="mb-0">Our vision</h4>
              <p class="mb-0">To be Nigeria’s most trusted engineering and EPC partner, recognised for competence, innovation and excellence in everything we build.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Values -->
  <section class="section" id="values">
    <div class="b-container">
      <div class="d-flex flex-column gap-3 mb-5" data-aos="fade-up">
        <span class="eyebrow align-self-start"><span class="dot"></span> Core values</span>
        <h2 class="title mb-0">The principles behind our work.</h2>
      </div>
      <div class="row g-4">
        <div v-for="(v, i) in values" :key="v.title" class="col-12 col-md-6 col-lg" data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="value-card" :class="`tint-${tints[i]}`">
            <span class="icon-chip lg"><i class="bi" :class="v.icon"></i></span>
            <h4>{{ v.title }}</h4>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="section bg-soft" id="team">
    <div class="b-container">
      <div class="row align-items-end mb-5 g-4">
        <div class="col-12 col-lg-7 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow align-self-start"><span class="dot"></span> Leadership</span>
          <h2 class="title mb-0">The people who deliver.</h2>
        </div>
        <div class="col-12 col-lg-5" data-aos="fade-up">
          <p class="lead-lg mb-0">Highly skilled, motivated engineers and managers across electrical, civil, procurement, HSE and logistics.</p>
        </div>
      </div>
      <div class="row g-3">
        <div v-for="(m, i) in team" :key="m.name" class="col-12 col-sm-6 col-lg-4" data-aos="fade-up" :data-aos-delay="(i % 3) * 80">
          <div class="person">
            <span class="avatar">{{ initials(m.name) }}</span>
            <div><strong>{{ m.name }}</strong><span>{{ m.role }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="section-sm">
    <div class="b-container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-4 d-flex flex-column gap-3" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> Key partners</span>
          <h2 class="title mb-0">Stronger together.</h2>
        </div>
        <div class="col-12 col-lg-8 d-flex flex-wrap gap-3" data-aos="fade-up">
          <span v-for="p in partners" :key="p" class="marquee-item"><i class="bi bi-link-45deg"></i>{{ p }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Equipment -->
  <section class="section">
    <div class="b-container">
      <div class="row g-5">
        <div class="col-12 col-lg-5 d-flex flex-column gap-4" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> Equipment capability</span>
          <h2 class="title mb-0">Equipped for the field.</h2>
          <p class="lead-lg mb-0">We own and operate the plant, tools and test equipment needed to string lines, build substations and commission systems safely.</p>
          <img src="/images/work/line-crew-1.jpg" alt="Graceforte line crew at work" class="w-100 rounded-6 object-cover" style="height: 320px" />
        </div>
        <div class="col-12 col-lg-7" data-aos="fade-up">
          <ul class="equip-list">
            <li v-for="e in equipment" :key="e"><i class="bi bi-check2-circle"></i>{{ e }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
</template>
