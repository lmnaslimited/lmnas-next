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
const products = [
    {
        product: 'ERP',
        slug: 'erp',
        hero: {
           
                title1: 'Built for the Next Generation',
                title2: 'The Social Cloud ERP',
                cta1: 'Download Brochure',
                cta2: 'Book Demo'
                          
        },
        standouts: 
        [
            {
                standout: 'Truly International',
                subTitle: 'Use in any of the 90+ Language',
                usps: ['Multi Lingual', 'Multi Currency', 'Multi UOM']

            },
            {
                standout: 'NextGen Social Platform',
                subTitle: 'No More Bring ERP. Socialy engage along Business ',
                usps: ['Multi Lingual', 'Multi Currency', 'Multi UOM']
            },
            {
                standout: 'Customize in Minutes',
                subTitle: 'Tailor your ERP the way you like. Do It Yourself',
                usps: ['Multi Lingual', 'Multi Currency', 'Multi UOM']
            },
            {
                standout: 'Stay Relevant',
                subTitle: 'Feel Upmarket even after Decades',
                usps: ['Life Time Update', 'Modern UI', 'Latest Tech Stack']
            }
        ],
    },
    {
        product: 'E Commerce',
        slug: 'e-commerce',
        hero: {

        }
    },
    {
        product: 'Digital Marketing',
        slug: 'digital-marketing',
        hero: {

        }
    },
]
export async function getPricingData() {
    return pricing
}
export async function getProductData( slug ) {
    var index = products.findIndex(x => x.slug === slug);
    return products[index]
}
export async function getAllProductSlug() {
    const slugs = products.map((product) => (
        {
            params: { slug: product.slug },
        }
    ))
    return slugs

}