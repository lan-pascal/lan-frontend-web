export default [
    {
      path:'/',
      name: 'layout',
      component: () => import('@/views/base/BaseLayout.vue'),
      redirect : "/home",
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/base/TheHome.vue')
        },
        {
            path: '/event',
            name: 'event',
            component: () => import('@/views/base/TheEvent.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/base/TheAbout.vue')
        },
        {
            path: '/ranking',
            name: 'ranking',
            component:  () => import('@/views/base/TheRanking.vue')
        },
        {
            path: '/poll-survey',
            name: 'poll-survey',
            component: () => import('@/views/base/ThePollSurvey.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/views/base/TheFAQ.vue')
        },
      ]
    },
  ]