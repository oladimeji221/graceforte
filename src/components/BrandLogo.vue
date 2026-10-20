<script setup lang="ts">
// Vector take on the Graceforte folded-diamond mark, so it stays crisp on light and dark backgrounds.
defineProps<{ light?: boolean }>()
</script>

<template>
  <RouterLink to="/" class="gf-logo" :class="{ light }" aria-label="Graceforte Business Links Ltd home page">
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="gf-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#7FD3FA" />
          <stop offset="1" stop-color="#1E6FE8" />
        </linearGradient>
        <linearGradient id="gf-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1E6FE8" />
          <stop offset="1" stop-color="#0D2F80" />
        </linearGradient>
      </defs>
      <path d="M24 2 L46 24 L24 46 L2 24 Z" fill="url(#gf-a)" />
      <path d="M24 2 L46 24 L24 46 L18 34 L38 24 L20 10 Z" fill="url(#gf-b)" />
      <path d="M20 10 L38 24 L18 34 L10 24 Z" fill="#fff" opacity=".95" />
    </svg>
    <span>
      <span class="name">GRACEFORTE</span>
      <span class="sub">BUSINESS LINKS LTD</span>
    </span>
  </RouterLink>
</template>
