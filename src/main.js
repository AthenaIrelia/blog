import Vue from 'vue'
import App from './App.vue'
import 'common/stylus/index.styl'
import axios from 'axios'
Vue.config.productionTip = false
import router from './Router'


Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')