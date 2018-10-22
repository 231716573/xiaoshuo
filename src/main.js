import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.use(VueAwesomeSwiper)
Vue.use(VueQuillEditor)

import 'common/stylus/index.styl'
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$https = axios


Vue.use(VueLazyLoad, {
	loading: require('common/images/logo.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
