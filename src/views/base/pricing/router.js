export default [
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('@/views/base/pricing/ThePricing.vue'),
    },
    {
        path: 'pricing/success',
        name: 'pricing.success',
        component: () => import('@/views/base/pricing/ThePricingSuccess.vue')
    },
    {
        path: 'pricing/canceled',
        name: 'pricing.canceled',
        component: () => import('@/views/base/pricing/ThePricingCanceled.vue')
    },
]