<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
import { company, services } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer bg-heading-color-3">
    <div class="b-container">
      <div class="row g-5">
        <div class="col-12 col-lg-4 d-flex flex-column gap-4">
          <BrandLogo light />
          <p class="text-color-1 mb-0">
            An engineering-driven EPC company serving the {{ company.sectors.toLowerCase() }} sectors across Nigeria.
          </p>
          <div class="d-flex gap-3 align-items-center">
            <span class="icon-contact" style="width: 52px; height: 52px"><i class="bi bi-patch-check-fill fs-5"></i></span>
            <div>
              <small class="text-color-1 d-block">D&amp;B D-U-N-S® Number</small>
              <strong class="text-white">{{ company.duns }}</strong>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Company</h6>
          <ul>
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/projects">Projects</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h6>Services</h6>
          <ul>
            <li v-for="s in services.slice(0, 6)" :key="s.slug">
              <RouterLink :to="`/services/${s.slug}`">{{ s.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3">
          <h6>Get in touch</h6>
          <ul>
            <li class="text-color-1 d-flex gap-2"><i class="bi bi-geo-alt-fill text-heading-color-1"></i>{{ company.address }}</li>
            <li v-for="p in company.phones" :key="p.tel">
              <a :href="`tel:${p.tel}`"><i class="bi bi-telephone-fill text-heading-color-1 me-2"></i>{{ p.label }}</a>
            </li>
            <li v-for="e in company.emails" :key="e">
              <a :href="`mailto:${e}`"><i class="bi bi-envelope-fill text-heading-color-1 me-2"></i>{{ e }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {{ year }} {{ company.name }}. All rights reserved.</span>
        <span>{{ company.tagline }}</span>
      </div>
    </div>
  </footer>
</template>
