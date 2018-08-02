import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import _ from 'lodash'
import rem from './assets/remSupport/index.js'
import Scroller from './assets/ui/scroller'
import './assets/css/base.css'
import './assets/css/reset.css'
require('swiper/dist/css/swiper.css')

Vue.use(_)
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(Scroller)
Vue.config.productionTip = false
// TODO  X
function deviceForiPhoneX() {
  if (window.cordova) {
      let device = window.device.model
      if (device === 'iPhone10,3') {
          window.localStorage.setItem('iPhoneX', 'mobile-iPhone10')
      } else {
          window.localStorage.setItem('iPhoneX', '')
      }
  }
}

deviceForiPhoneX()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rem,
  render: h => h(App)
})
