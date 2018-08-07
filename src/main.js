import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import _ from 'lodash'
import rem from './assets/remSupport/index.js'
import './common/js/comaxios.js'
import './common/js/filter.js'
import Scroller from './assets/ui/scroller'
import './assets/css/base.css'
import './assets/css/reset.css'
import '@/common/mrHeader/components.js'
import { Indicator, Toast, MessageBox, DatetimePicker, Field, CellSwipe, Actionsheet, Switch } from 'mint-ui'
require('swiper/dist/css/swiper.css')
require('@/mock/mock')
Vue.use(_)
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(Scroller)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Switch.name, Switch)
Vue.component(Field.name, Field)
Vue.prototype.$indicator = Indicator
Vue.prototype.$toast = Toast
Vue.prototype.$messageBox = MessageBox
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
  store,
  render: h => h(App)
})
