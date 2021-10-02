import Vue from 'vue'
import App from './App.vue'
//import store from './store'
import storeitems from './store'
import vuetify from './plugins/vuetify'
import router from './router'


//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./plugins/vuetify-money.js";

Vue.config.productionTip = false
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

new Vue({
 // store,
  storeitems,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
