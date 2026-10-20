<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '../data/site'

const open = ref<number | null>(0)
</script>

<template>
  <div>
    <div v-for="(f, i) in faqs" :key="f.q" class="faq-item" :class="{ open: open === i }">
      <button type="button" :aria-expanded="open === i" :aria-controls="`faq-${i}`" @click="open = open === i ? null : i">
        {{ f.q }} <i class="bi bi-plus-lg"></i>
      </button>
      <div :id="`faq-${i}`" class="faq-body" role="region">
        <div><p>{{ f.a }}</p></div>
      </div>
    </div>
  </div>
</template>
