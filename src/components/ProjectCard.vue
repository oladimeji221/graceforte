<script setup lang="ts">
import type { Project } from '../data/site'

defineProps<{ project: Project }>()

const icons: Record<Project['category'], string> = {
  Power: 'bi-lightning-charge-fill',
  'Steel & Galvanizing': 'bi-bricks',
  Construction: 'bi-building-fill',
}
</script>

<template>
  <article class="project-card" :class="{ 'no-photo': !project.image }">
    <img v-if="project.image" :src="project.image" :alt="project.title" loading="lazy" />
    <i v-else class="bi placeholder-icon" :class="icons[project.category]" aria-hidden="true"></i>
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
