
import SectionContainer from "../../components/sectionContainer";
import CallOut from "../../components/views/callOut";
import Feature2x2SubList from "../../components/views/feature2x2SubList";
import Feature3x1Card from "../../components/views/feature3x1Card";
import Feature3x2Right from "../../components/views/feature3x2Right";
import Feature3x3 from "../../components/views/feature3x3";
import FeatureWithSubList from "../../components/views/featureWithSubList";
import HeroBackgroundWithCard from "../../components/views/heroBackgroundWithCard";
import WhyIsItGreat from "../../components/views/whyIsItGreat";
import { getProductData, getAllProductSlug } from "../../lib/api"
const heroInfo = {
    title1: 'Built for the Next Generation',
    title2: 'The Social Cloud ERP',
    cta1: 'Download Brochure',
    cta2: 'Book Demo'
}
export function FeatureBottomImage({ feature = {} }) {

    return (
        <div className="text-center">

            <h6 className="mb-2 font-semibold leading-5 mt-10">{feature.standout}</h6>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mt-10 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                >
                    <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                </svg>
            </div>
        </div>
    )
}
export function FetureCard({ feature = {} }) {
    console.log(feature.standout)
    return (
        <div className=" mt-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                >
                    <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                </svg>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                {feature.standout}
            </h6>
            <div className="mb-2 text-gray-700">
                {feature.subTitle}
            </div>
            <div className="flex items-center justify-center my-4">
                <ul className="mb-4 -ml-1 space-y-2">
                    {feature.usps.map((usp) => (
                        <li key={usp} className="flex items-start">
                            <span className="mr-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                            {usp}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
export function FeatureGrid({product, cardPos}) {
    var classLgColStart
    if(cardPos==1){
        classLgColStart = 'lg:col-start-1'
    } else if(cardPos==2) {
        classLgColStart = 'lg:col-start-3'
    } else if(cardPos==3) {
        classLgColStart = 'lg:col-start-5'
    }
    
    return(
        <SectionContainer>
        <div className="grid grid-rows-1 lg:grid-rows-5  grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 lg:grid-flow-col gap-4">
            <div className={"shadow-lg  text-center p-10 rounded-lg lg:row-start-1 bg-gradient-radial from-violet-200/70   to-white hover:from-deep-purple-100 sm:col-span-4 lg:row-end-6 col-span-2 lg:col-span-3 " + classLgColStart } >

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div className="max-w-lg sm:text-center sm:mx-auto">
                        <a
                            href="/"
                            aria-label="Go Home"
                            title="Logo"
                            className="inline-block mb-4"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-16 bg-indigo-50">
                                <svg
                                    className="w-16 h-16 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">LENS Core</span>
                            </span>{' '}

                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            By LMNAs
                        </p>
                        <hr className="my-8 border-gray-300" />
                        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
                            Sed ut unde omnis iste natus accusantium doloremque laudantium omnis
                            iste.
                        </p>
                        <div className="flex items-center my-10 sm:justify-center">
                            <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </a>
                            <a href="/" className="transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="shadow-lg bg-gray-50   text-center rounded-lg lg:row-span-3  col-span-2 " >
                <FetureCard feature={product.standouts[0]} />
            </div>
            <div class="shadow-lg bg-gray-100 rounded-lg  row-span-2 col-span-2">
                <FeatureBottomImage feature={product.standouts[1]} />
            </div>
            <div class="shadow-lg bg-gray-100 rounded-lg row-span-2 col-span-2">
                <FeatureBottomImage feature={product.standouts[2]} />
            </div>
            <div class="shadow-lg bg-gray-50 rounded-lg lg:row-span-3  col-span-2">
                <FetureCard feature={product.standouts[3]} />
            </div>

        </div>




    </SectionContainer>
    )
}
export default function Products({ product, preview }) {
    return (
        <div>
            <HeroBackgroundWithCard heroInfo={product.hero} />
            <FeatureGrid product={product} cardPos={1}/>
            <SectionContainer>
                <WhyIsItGreat/>
            </SectionContainer>
            <FeatureGrid product={product} cardPos={3}/>
            <SectionContainer>
                <Feature3x1Card/>
            </SectionContainer>
            <SectionContainer>
                <Feature3x2Right/>
            </SectionContainer>
            <SectionContainer>
                <Feature2x2SubList />
            </SectionContainer>
            <SectionContainer>
                <CallOut />
            </SectionContainer>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                            Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha
                            forage.
                        </h1>
                        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                            Button
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps({ params, preview = null }) {
    const product = await getProductData(params.slug)
    return {
        props: {
            preview,
            product: {
                ...product
            },
        },
    }
}
export async function getStaticPaths() {
    const slugs = await getAllProductSlug()
    return {
        paths: slugs?.map((slug) => `/products/${slug.params.slug}`) || [],
        fallback: false,
    }

}