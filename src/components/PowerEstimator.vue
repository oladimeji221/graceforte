<script setup lang="ts">
// Indicative solar/backup sizing: the Graceforte take on Moniepoint's savings calculator.
import { computed, ref } from 'vue'

const presets = [
  { label: 'Home', load: 2, hours: 8 },
  { label: 'Business', load: 10, hours: 10 },
  { label: 'Telecom site', load: 3, hours: 24 },
]
const preset = ref(0)
const load = ref(2) // kW
const hours = ref(8) // backup hours per day

const SUN_HOURS = 5 // typical peak sun hours across southern Nigeria
const PANEL_W = 550
const INVERTER_SIZES = [1.5, 2.5, 3.5, 5, 7.5, 10, 15, 20, 30, 40, 50, 60, 80, 100]

function choose(i: number) {
  preset.value = i
  load.value = presets[i]!.load
  hours.value = presets[i]!.hours
}

const inverter = computed(() => {
  const need = (load.value / 0.8) * 1.25
  return INVERTER_SIZES.find((s) => s >= need) ?? Math.ceil(need)
})
const battery = computed(() => Math.round(((load.value * hours.value) / 0.8) * 10) / 10)
const arrayKwp = computed(() => Math.round(((load.value * hours.value) / (SUN_HOURS * 0.75)) * 10) / 10)
const panels = computed(() => Math.ceil((arrayKwp.value * 1000) / PANEL_W))

const pct = (v: number, min: number, max: number) => `${((v - min) / (max - min)) * 100}%`

const quoteLink = computed(() => ({
  path: '/contact',
  query: {
    service: 'solar',
    note: `Estimator: ${load.value} kW load, ${hours.value} h backup → ~${inverter.value} kVA inverter, ${battery.value} kWh battery, ${panels.value} × ${PANEL_W}W panels.`,
  },
  hash: '#quote',
}))
</script>

<template>
  <section class="section bg-soft" id="estimator">
    <div class="b-container">
      <div class="row align-items-end mb-5 g-4">
        <div class="col-12 col-lg-7 d-flex flex-column gap-3" data-aos="fade-up">
          <span class="eyebrow align-self-start"><span class="dot"></span> Solar & backup estimator</span>
          <h2 class="title mb-0">How much solar do you need?</h2>
        </div>
        <div class="col-12 col-lg-5" data-aos="fade-up" data-aos-delay="100">
          <p class="lead-lg mb-0">Slide to match your load and backup needs and get an instant ballpark. Our engineers will refine it after a site survey.</p>
        </div>
      </div>

      <div class="estimator" data-aos="fade-up">
        <div class="row g-0">
          <div class="col-12 col-lg-7">
            <div class="inputs">
              <div class="pill-tabs align-self-start" role="tablist">
                <button
                  v-for="(p, i) in presets"
                  :key="p.label"
                  type="button"
                  role="tab"
                  :aria-selected="preset === i"
                  :class="{ active: preset === i }"
                  @click="choose(i)"
                >
                  {{ p.label }}
                </button>
              </div>
              <div class="range-row">
                <label for="est-load">Average running load <output>{{ load }} kW</output></label>
                <input id="est-load" v-model.number="load" class="gf-range" type="range" min="0.5" max="50" step="0.5" :style="{ '--pct': pct(load, 0.5, 50) }" />
                <small>Roughly: a fridge, TV, fans and lights ≈ 1–2 kW; a small office ≈ 5–10 kW.</small>
              </div>
              <div class="range-row">
                <label for="est-hours">Backup hours per day <output>{{ hours }} h</output></label>
                <input id="est-hours" v-model.number="hours" class="gf-range" type="range" min="1" max="24" step="1" :style="{ '--pct': pct(hours, 1, 24) }" />
                <small>How long you need power when the grid is off.</small>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="outputs" aria-live="polite">
              <span class="text-color-1">Recommended inverter</span>
              <div class="result-big">{{ inverter }}<small>kVA</small></div>
              <div class="result-grid">
                <div><strong>{{ battery }} kWh</strong><span>Battery storage</span></div>
                <div><strong>{{ arrayKwp }} kWp</strong><span>Solar array</span></div>
                <div><strong>{{ panels }}</strong><span>× {{ PANEL_W }}W panels</span></div>
                <div><strong>{{ (load * hours).toFixed(1) }} kWh</strong><span>Daily backup energy</span></div>
              </div>
              <RouterLink :to="quoteLink" class="btn-gf light align-self-start">Get an exact quote <i class="bi bi-arrow-right"></i></RouterLink>
              <p class="note">Indicative only. Assumes {{ SUN_HOURS }} peak sun hours, 80% battery depth of discharge and a 25% inverter margin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
