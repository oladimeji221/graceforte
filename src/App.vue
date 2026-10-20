<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { company } from './data/site'
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
  <a
    class="whatsapp-fab"
    :href="`https://wa.me/${company.whatsapp}`"
    target="_blank"
    rel="noopener"
    aria-label="Chat with us on WhatsApp"
  >
    <i class="bi bi-whatsapp"></i>
  </a>
</template>
