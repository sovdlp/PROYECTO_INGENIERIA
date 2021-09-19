import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
