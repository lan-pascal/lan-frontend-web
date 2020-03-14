import pricing from '@/views/base/pricing/router'

import Home from '@/views/base/TheHome.vue'
import BaseLayout from '@/views/base/BaseLayout.vue'

export default [
    {
        path: '/',
        name: 'layout',
        component: BaseLayout,
        redirect: {name: "home"},
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
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
        ].concat(pricing)
    },
]