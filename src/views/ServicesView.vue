<script setup lang="ts">
import CtaBand from '../components/CtaBand.vue'
import PageBanner from '../components/PageBanner.vue'
import { services } from '../data/site'
</script>

<template>
  <PageBanner
    title="Our Services"
    image="/images/stock/engineer-maintenance.jpg"
    subtitle="Engineering design, procurement, construction and maintenance under one roof."
  />

  <!-- Template service-box cards -->
  <section class="section">
    <div class="b-container">
      <div class="row g-4">
        <div v-for="(s, i) in services" :key="s.slug" class="col-12 col-md-6 col-xl-4" data-aos="fade-up" :data-aos-delay="(i % 3) * 120">
          <RouterLink :to="`/services/${s.slug}`" class="d-block h-100">
            <div class="service-box">
              <div class="bg-overlay-2"></div>
              <img :src="s.image" :alt="s.title" class="w-100 h-100 position-absolute top-0 start-0" loading="lazy" />
              <div class="service-content">
                <div class="service-info">
                  <div class="service-wrap">
                    <h4 class="mb-3">{{ s.title }}</h4>
                    <p>{{ s.short }}</p>
                    <span class="btn-cta-secondary">Learn more<i class="bi bi-arrow-right-short"></i></span>
                  </div>
                </div>
              </div>
              <div class="icon-service">
                <div class="icon-inner bg-white">
                  <div class="icon-wrapper"><i class="bi fs-3 text-heading-color-3" :class="s.icon"></i></div>
                </div>
                <div class="spacer-top-left-25" style="box-shadow: -10px -10px 0 0 #fff"></div>
                <div class="w-100"><div class="spacer-top-left-25" style="box-shadow: -10px -10px 0 0 #fff"></div></div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
</template>
