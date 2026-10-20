import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/bootstrap.min.css'
import './assets/css/template.css'
import './assets/css/graceforte.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Reduced-motion users are handled in CSS (graceforte.css) so late-mounted views are covered too.
AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic', offset: 60 })
router.afterEach(() => {
  // Newly mounted views need AOS to pick up their elements.
  setTimeout(() => AOS.refreshHard(), 300)
})
