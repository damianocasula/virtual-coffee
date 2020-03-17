// Imports
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Buefy from 'buefy'
import 'bulma/css/bulma.css'
import 'buefy/dist/buefy.css'
import '@/assets/css/style.css'

// Buefy: Bulma for Vue
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
