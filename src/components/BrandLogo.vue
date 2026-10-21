<script setup lang="ts">
// Client's own diamond mark (cut from the original logo file) with the wordmark set beside it.
defineProps<{ light?: boolean }>()
</script>

<template>
  <RouterLink to="/" class="gf-logo" :class="{ light }" aria-label="Graceforte Ltd home page">
    <img src="/images/logo-mark.png" alt="" width="46" height="46" />
    <span>
      <span class="name">GRACEFORTE LTD</span>
      <span class="sub">COMPETENCE, INNOVATION, EXCELLENCE.</span>
    </span>
  </RouterLink>
</template>
