import Vue from 'vue'
import App from './App.vue'
import 'common/stylus/index.styl'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'font-awesome/css/font-awesome.css'

// use
Vue.use(mavonEditor)


Vue.config.productionTip = false
import router from './Router'


Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')