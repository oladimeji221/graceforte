<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import { company, products, services } from '../data/site'

const route = useRoute()
const q = (k: string) => (typeof route.query[k] === 'string' ? (route.query[k] as string) : '')

const productName = products.find((p) => p.slug === q('product'))?.name
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  topic: productName ? `Product: ${productName}` : services.find((s) => s.slug === q('service'))?.title ?? '',
  message: q('note'),
  website: '', // honeypot
})
const status = ref<'idle' | 'sending' | 'ok' | 'err'>('idle')

const topics = [...services.map((s) => s.title), ...products.map((p) => `Product: ${p.name}`), 'Other']
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=15&output=embed`

async function submit() {
  status.value = 'sending'
  try {
    const res = await fetch('/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json().catch(() => ({}))
    status.value = res.ok && data.ok ? 'ok' : 'err'
    if (status.value === 'ok') Object.assign(form, { name: '', email: '', phone: '', company: '', message: '' })
  } catch {
    status.value = 'err'
  }
}
</script>

<template>
  <PageBanner title="Contact Us" image="/images/stock/young-engineers.jpg" subtitle="Tell us about your project. We usually respond within one business day." />

  <section class="section">
    <div class="b-container d-flex flex-column gap-5">
      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up">
          <a class="contact-card" :href="`https://maps.google.com/?q=${encodeURIComponent(company.mapQuery)}`" target="_blank" rel="noopener">
            <span class="icon-chip tint-blue"><i class="bi bi-geo-alt-fill"></i></span>
            <span><small>Visit us</small><strong>{{ company.address }}</strong></span>
          </a>
        </div>
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="80">
          <div class="contact-card">
            <span class="icon-chip tint-green"><i class="bi bi-telephone-fill"></i></span>
            <span>
              <small>Call us</small>
              <a v-for="p in company.phones" :key="p.tel" :href="`tel:${p.tel}`" class="d-block text-heading-color-3"><strong>{{ p.label }}</strong></a>
            </span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="160">
          <div class="contact-card">
            <span class="icon-chip tint-violet"><i class="bi bi-envelope-fill"></i></span>
            <span>
              <small>Email us</small>
              <a v-for="e in company.emails" :key="e" :href="`mailto:${e}`" class="d-block text-heading-color-3"><strong>{{ e }}</strong></a>
            </span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="240">
          <a class="contact-card" :href="`https://wa.me/${company.whatsapp}`" target="_blank" rel="noopener">
            <span class="icon-chip tint-green"><i class="bi bi-whatsapp"></i></span>
            <span><small>Chat on WhatsApp</small><strong>{{ company.phones[0]!.label }}</strong></span>
          </a>
        </div>
      </div>

      <div class="row g-5" id="quote">
        <div class="col-12 col-lg-5 d-flex flex-column gap-4" data-aos="fade-right">
          <span class="eyebrow align-self-start"><span class="dot"></span> Request a quote</span>
          <h2 class="title mb-0">Let’s talk about your project.</h2>
          <p class="lead-lg mb-0">Share as much detail as you can, such as location, scope, voltage level, quantities or drawings, and an engineer will follow up.</p>
          <iframe :src="mapSrc" class="map-frame" loading="lazy" title="Graceforte office location" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-12 col-lg-7" data-aos="fade-up">
          <form class="gf-form bg-soft rounded-6 padding-50 card-form position-relative" @submit.prevent="submit">
            <div>
              <label for="c-name">Full name *</label>
              <input id="c-name" v-model="form.name" required autocomplete="name" />
            </div>
            <div>
              <label for="c-email">Email *</label>
              <input id="c-email" v-model="form.email" type="email" required autocomplete="email" />
            </div>
            <div>
              <label for="c-phone">Phone</label>
              <input id="c-phone" v-model="form.phone" type="tel" autocomplete="tel" />
            </div>
            <div>
              <label for="c-company">Company</label>
              <input id="c-company" v-model="form.company" autocomplete="organization" />
            </div>
            <div class="full">
              <label for="c-topic">What do you need?</label>
              <select id="c-topic" v-model="form.topic">
                <option value="">Select a service or product</option>
                <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
            <div class="full">
              <label for="c-msg">Project details *</label>
              <textarea id="c-msg" v-model="form.message" required></textarea>
            </div>
            <input v-model="form.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" name="website" />
            <div class="full d-flex flex-column flex-sm-row gap-3 align-items-sm-center">
              <button type="submit" class="btn-gf" :disabled="status === 'sending'">
                {{ status === 'sending' ? 'Sending…' : 'Send message' }} <i class="bi bi-send-fill"></i>
              </button>
              <div v-if="status === 'ok'" class="form-msg ok" role="status">Thank you, your message has been sent.</div>
              <div v-if="status === 'err'" class="form-msg err" role="alert">
                Sorry, something went wrong. Please email
                <a :href="`mailto:${company.emails[0]}`">{{ company.emails[0] }}</a>.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
