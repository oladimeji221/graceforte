<script setup lang="ts">
import { clients } from '../data/site'

// Rendered twice so the -50% translate loops seamlessly.
const loop = [...clients, ...clients]
</script>

<template>
  <div class="marquee" aria-label="Clients and partners">
    <div class="marquee-track">
      <span v-for="(c, i) in loop" :key="i" class="marquee-item" :aria-hidden="i >= clients.length">
        <i class="bi bi-building-check"></i>{{ c }}
      </span>
    </div>
  </div>
</template>
