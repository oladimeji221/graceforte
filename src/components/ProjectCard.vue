<script setup lang="ts">
import type { Project } from '../data/site'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <img :src="project.image" :alt="project.title" loading="lazy" />
    <div class="meta">
      <span class="chip blue">{{ project.year }}</span>
      <span class="chip">{{ project.category }}</span>
    </div>
    <div class="info">
      <small>{{ project.client }}</small>
      <h4>{{ project.title }}</h4>
    </div>
  </article>
</template>
