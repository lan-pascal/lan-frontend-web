import Vue from 'vue'
import Router from 'vue-router'

import base from '@/views/base/router'
import registration from '@/views/accounts/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  ].concat(base).concat(registration)

})
