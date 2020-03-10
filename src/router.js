import Vue from 'vue'
import Router from 'vue-router'

import base from '@/views/base/router'
import registration from '@/views/accounts/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
  ].concat(base).concat(registration),
  scrollBehavior(){
    return { x: 0, y: 0 }
  }

})

export default router