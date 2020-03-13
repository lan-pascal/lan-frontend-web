import Vue from 'vue'
import App from './App.vue'
import router from './router'

//plugins
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'
import {InlineSvgPlugin} from 'vue-inline-svg';

Vue.config.productionTip = false

VueCookies.config('7d')
Vue.use(InlineSvgPlugin);

new Vue({
  router,
  vuetify,
  VueCookies,
  //auth,
  render: h => h(App)
}).$mount('#app')
