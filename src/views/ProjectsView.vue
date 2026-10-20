<script setup lang="ts">
import { computed, ref } from 'vue'
import CtaBand from '../components/CtaBand.vue'
import PageBanner from '../components/PageBanner.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, type ProjectCategory } from '../data/site'

const filters: ('All' | ProjectCategory)[] = ['All', 'Power', 'Steel & Galvanizing', 'Construction']
const active = ref<(typeof filters)[number]>('All')
const shown = computed(() => (active.value === 'All' ? projects : projects.filter((p) => p.category === active.value)))
</script>

<template>
  <PageBanner
    title="Projects"
    image="/images/work/power-project.jpg"
    subtitle="A selection of work delivered for utilities, EPC contractors and private clients."
  />

  <section class="section">
    <div class="b-container">
      <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
        <div class="d-flex flex-column gap-3">
          <span class="eyebrow align-self-start"><span class="dot"></span> Client references</span>
          <h2 class="title mb-0">{{ shown.length }} projects</h2>
        </div>
        <div class="pill-tabs" role="tablist" aria-label="Filter projects">
          <button
            v-for="f in filters"
            :key="f"
            type="button"
            role="tab"
            :aria-selected="active === f"
            :class="{ active: active === f }"
            @click="active = f"
          >
            {{ f }}
          </button>
        </div>
      </div>
      <TransitionGroup tag="div" name="page" class="row g-4">
        <div v-for="p in shown" :key="p.title" class="col-12 col-md-6 col-lg-4">
          <ProjectCard :project="p" style="height: 400px" />
        </div>
      </TransitionGroup>
    </div>
  </section>

  <CtaBand />
</template>
