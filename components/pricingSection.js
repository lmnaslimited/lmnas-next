import Link from "next/link"
export default function PricingSection({ product }) {
    return (
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                    <div className="text-lg font-semibold">{product.plans[0].plan}</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">{product.plans[0].price}</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        {product.plans[0].features.map((feature) => (
                            <div className="text-gray-700">{feature}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            {'Buy ' + product.plans[0].plan}
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        {product.plans[0].standout}
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
                        Most Popular
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-semibold">{product.plans[1].plan}</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">{product.plans[1].price}</div>
                        <div className="text-gray-700">/ mo</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        {product.plans[1].features.map((feature) => (
                            <div className="text-gray-700">{feature}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            {'Buy ' + product.plans[1].plan}
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        {product.plans[1].standout}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                    <div className="text-lg font-semibold">{product.plans[2].plan}</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">{product.plans[2].price}</div>
                        <div className="text-gray-700">/ mo</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        {product.plans[2].features.map((feature) => (
                            <div className="text-gray-700">{feature}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            {'Buy ' + product.plans[2].plan}
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        {product.plans[2].standout}
                    </p>
                </div>
            </div>
        </div>
    )
}