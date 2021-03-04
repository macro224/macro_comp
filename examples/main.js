import Vue from 'vue'
import App from './App.vue'
import SlideSwitch from './../packages/index'

Vue.use(SlideSwitch)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
