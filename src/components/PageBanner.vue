<script setup lang="ts">
// Inner-page banner, built on the template's hero-banner + notched breadcrumb.
defineProps<{
  title: string
  image: string
  subtitle?: string
  crumbs?: { label: string; to?: string }[]
}>()
</script>

<template>
  <section class="section hero-banner position-relative" :style="{ backgroundImage: `url('${image}')` }">
    <div class="bg-overlay-5"></div>
    <div class="b-container w-100 position-relative z-2 overflow-hidden">
      <div class="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4">
        <h1 class="text-white mb-0" data-aos="fade-up">{{ title }}</h1>
        <p v-if="subtitle" class="banner-sub lead-lg mb-0" data-aos="fade-up" data-aos-delay="100">{{ subtitle }}</p>
        <div class="spacer-80"></div>
        <div class="d-flex align-items-end justify-content-center">
          <div class="spacer-bottom-right-30"></div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
              <li v-for="c in crumbs" :key="c.label" class="breadcrumb-item">
                <RouterLink v-if="c.to" :to="c.to">{{ c.label }}</RouterLink>
                <span v-else>{{ c.label }}</span>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
            </ol>
          </nav>
          <div class="spacer-bottom-left-30"></div>
        </div>
      </div>
    </div>
  </section>
</template>
