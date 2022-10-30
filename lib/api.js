const pricing = [
    {
        product: 'ERP',
        price: '899',
        plans: [
            {
                plan: 'Standard',
                price: '899',
                features: [
                    'Supply Chain',
                    'Finance',
                    'Projects',
                ],
                standout: 'Bootstrap your Business with all essential Bells and Whistles'
            },
            {
                plan: 'Premium',
                price: '749',
                features: [
                    'Analytics',
                    'Workflows',
                    'Projects',
                ],
                standout: 'Automate Processes, Shift to Next connected Industries'
                
            },
            {
                plan: 'Enterprise',
                price: '639',
                features: [
                    'Multi Company',
                    'Workflows',
                    'Projects',
                ],
                standout: "It's time to Grow non-linear with most advanced features under hood"
            },
        ]
    },
    {
        product: 'Ecommerce',
        plans: [
            {
                plan: 'Standard',
                price: '1399',
                features: [
                    'Supply Chain',
                    'Finance',
                    'Projects',
                ]
            },
            {
                plan: 'Premium',
                price: '4499',
                features: [
                    'Analytics',
                    'Workflows',
                    'Projects',
                ]
            },
            {
                plan: 'Enterprise',
                price: '17899',
                features: [
                    'Multi Company',
                    'Workflows',
                    'Projects',
                ]
            },
        ],
    },
    {
        product: 'Digital Marketing',
        plans: [
            {
                plan: 'Standard',
                price: '7399',
                features: [
                    'Website Tracking',
                    'Email, Forms',
                    'Landing Pages',
                ]
            },
            {
                plan: 'Premium',
                price: '14720',
                features: [
                    'Campaigns',
                    'Social Media',
                    'ERP Integration',
                ]
            },
            {
                plan: 'Enterprise',
                price: '24880',
                features: [
                    'A/B Testing',
                    ' Analytics',
                    'Projects',
                ]
            },
        ],
    },
]
/*
{
    erp: {
        standard: { name: 'Standard',
                    price: '899',
                    features:[  'Supply Chain',
                                'Finance',
                                'Projects',  ] },
        Premium: { price: '749',
                    features:[  'Analytics',
                                'Workflows',
                                'Projects',  ] },
        Enterprise: { price: '630',
                    features:[  'Multi Company',
                    'Workflows',
                    'Projects',  ] },
    },
    ecommerce: {},
    digiMarketing: {}
} */

export async function getPricingData() {
    return pricing
}