<script setup lang="ts">
import CtaBand from '../components/CtaBand.vue'
import PageBanner from '../components/PageBanner.vue'
import { products } from '../data/site'
</script>

<template>
  <PageBanner
    title="Products"
    image="/images/work/transmission-tower-2.jpg"
    subtitle="Power-network materials and galvanized steel, supplied direct or with installation."
  />

  <section class="section">
    <div class="b-container d-flex flex-column gap-5">
      <article
        v-for="(p, i) in products"
        :id="p.slug"
        :key="p.slug"
        class="row g-0 rounded-6 overflow-hidden align-items-stretch"
        :class="`tint-${p.tint}`"
        data-aos="fade-up"
      >
        <div class="col-12 col-lg-6 position-relative" :class="{ 'order-lg-2': i % 2 }" style="min-height: 340px">
          <img :src="p.image" :alt="p.name" class="position-absolute top-0 start-0 w-100 h-100 object-cover" loading="lazy" />
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center gap-4 padding-50">
          <span class="icon-chip lg bg-white"><i class="bi" :class="p.icon"></i></span>
          <h2 class="title mb-0" style="font-size: clamp(28px, 3vw, 40px)">{{ p.name }}</h2>
          <p class="lead-lg mb-0">{{ p.summary }}</p>
          <ul class="check-list">
            <li v-for="pt in p.points" :key="pt"><i class="bi bi-check-circle-fill"></i>{{ pt }}</li>
          </ul>
          <RouterLink :to="{ path: '/contact', query: { product: p.slug }, hash: '#quote' }" class="btn-gf align-self-start">
            Request pricing <i class="bi bi-arrow-right"></i>
          </RouterLink>
        </div>
      </article>
    </div>
  </section>

  <CtaBand title="Need materials in bulk?" text="Share quantities and specifications and we’ll prepare a quotation with delivery timelines." />
</template>
