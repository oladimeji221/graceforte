<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ to: number; duration?: number }>()
const el = ref<HTMLElement>()
const value = ref(0)
let observer: IntersectionObserver | undefined

function run() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    value.value = props.to
    return
  }
  const start = performance.now()
  const dur = props.duration ?? 1600
  const tick = (now: number) => {
    const t = Math.min((now - start) / dur, 1)
    value.value = Math.round(props.to * (1 - Math.pow(1 - t, 3)))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        run()
        observer?.disconnect()
      }
    },
    { threshold: 0.5 },
  )
  if (el.value) observer.observe(el.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <span ref="el">{{ value }}</span>
</template>
