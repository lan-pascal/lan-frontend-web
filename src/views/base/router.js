export default [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/base/BaseLayout.vue'),
        redirect: "/home",
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
                path: '/archive',
                name: 'archive',
                component: () => import('@/views/base/TheArchive.vue')
            },
            {
                path: '/faq',
                name: 'faq',
                component: () => import('@/views/base/TheFAQ.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/base/TheAbout.vue')
            },
            {
                path: '/privacy_policy',
                name: 'privacy_policy',
                component: () => import('@/views/base/ThePrivacyPolicy.vue')
            },
            {
                path: '/terms_of_use',
                name: 'terms_of_use',
                component: () => import('@/views/base/TheTermsOfUse.vue')
            },
        ]
    },
]