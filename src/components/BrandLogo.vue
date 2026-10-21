<script setup lang="ts">
// Client's full logo (public/images/logo.png, trimmed from logo-full.png) with the wordmark set beside it.
defineProps<{ light?: boolean }>()
</script>

<template>
  <RouterLink to="/" class="gf-logo" :class="{ light }" aria-label="Graceforte Ltd home page">
    <span class="logo-img"><img src="/images/logo.png" alt="Graceforte Business Links Ltd logo" width="262" height="342" /></span>
    <span>
      <span class="name">GRACEFORTE LTD</span>
      <span class="sub">COMPETENCE, INNOVATION, EXCELLENCE.</span>
    </span>
  </RouterLink>
</template>
