export default [
    {
      path:'/',
      name: 'Layout',
      component: () => import('@/views/base/Layout.vue'),
      redirect : "/home",
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/base/Home.vue')
        },
        {
            path: '/event',
            name: 'event',
            component: () => import('@/views/base/Event.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/base/About.vue')
        },
        {
            path: '/ranking',
            name: 'ranking',
            component:  () => import('@/views/base/Ranking.vue')
        },
        {
            path: '/poll-survey',
            name: 'poll-survey',
            component: () => import('@/views/base/PollSurvey.vue')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import('@/views/base/Gallery.vue')
        },
      ]
    },
  ]