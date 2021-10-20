import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Event bus
import EventBus from './plugins/event-bus'
// Custom directives
import dirscroll from './directives/scroll'
Vue.use(VueAxios, axios)
Vue.use(EventBus)
Vue.use(dirscroll)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
