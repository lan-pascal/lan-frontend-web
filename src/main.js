import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

//import auth from './plugins/auth'
import VueCookies from 'vue-cookies'

import i18n from './i18n'

Vue.config.productionTip = false
VueCookies.config('7d')

new Vue({
  router,
  vuetify,
  VueCookies,
  i18n,

  //auth,
  render: h => h(App)
}).$mount('#app')
