import Vue from 'vue'
import App from './App.vue'

import { store } from './services/vuex'

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
