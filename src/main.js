import Vue from 'vue'
import App from './App.vue'
import debug from '@/assets/css/debug.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
