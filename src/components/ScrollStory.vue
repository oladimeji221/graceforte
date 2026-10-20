<script setup lang="ts">
// Sticky scroll-telling: the image panel stays pinned while the steps scroll past.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { process } from '../data/site'

const active = ref(0)
const steps = ref<HTMLElement[]>([])
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = Number((e.target as HTMLElement).dataset.index)
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  steps.value.forEach((s) => observer!.observe(s))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section class="section bg-heading-color-3 story">
    <div class="b-container">
      <div class="row mb-4">
        <div class="col-12 col-lg-8 d-flex flex-column gap-3">
          <span class="eyebrow on-dark align-self-start"><span class="dot"></span> How we deliver</span>
          <h2 class="title text-white mb-0">From drawing board to <span class="text-gradient">energised line</span>.</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-5 story-steps">
          <div
            v-for="(p, i) in process"
            :key="p.step"
            ref="steps"
            :data-index="i"
            class="story-step"
            :class="{ active: active === i }"
          >
            <span class="num">STEP {{ p.step }}</span>
            <h3>{{ p.title }}</h3>
            <p class="lead-lg">{{ p.text }}</p>
            <div class="mobile-img"><img :src="p.image" :alt="p.title" loading="lazy" /></div>
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="story-sticky">
            <div class="story-frame">
              <img v-for="(p, i) in process" :key="p.step" :src="p.image" :alt="p.title" :class="{ active: active === i }" />
              <div class="story-progress">
                <span v-for="(p, i) in process" :key="p.step" :class="{ done: i <= active }"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
