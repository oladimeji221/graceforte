<script setup lang="ts">
import { company } from '../data/site'

withDefaults(defineProps<{ title?: string; text?: string }>(), {
  title: 'Have a project in mind? Let’s power it.',
  text: 'Tell us what you need built, supplied or maintained. An engineer will get back to you with next steps.',
})
</script>

<template>
  <section class="section-sm">
    <div class="b-container">
      <div class="cta-band" data-aos="zoom-in-up">
        <span class="ring"></span><span class="ring r2"></span>
        <div class="row align-items-center g-4 position-relative">
          <div class="col-12 col-lg-7 d-flex flex-column gap-3">
            <span class="eyebrow on-dark align-self-start"><span class="dot"></span> Free consultation</span>
            <h2>{{ title }}</h2>
            <p class="lead-lg mb-0">{{ text }}</p>
          </div>
          <div class="col-12 col-lg-5 d-flex flex-wrap gap-3 justify-content-lg-end">
            <RouterLink to="/contact#quote" class="btn-gf light">Request a quote <i class="bi bi-arrow-right"></i></RouterLink>
            <a :href="`tel:${company.phones[0]!.tel}`" class="btn-gf ghost text-white" style="box-shadow: inset 0 0 0 1.5px rgba(255,255,255,.3)">
              <i class="bi bi-telephone-fill"></i> Call us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
