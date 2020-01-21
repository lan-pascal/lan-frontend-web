import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

//import auth from './plugins/auth'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
VueCookies.config('7d')

new Vue({
  router,
  vuetify,
  VueCookies,

  //auth,
  render: h => h(App)
}).$mount('#app')
