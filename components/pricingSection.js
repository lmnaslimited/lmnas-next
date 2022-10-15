import Link from "next/link"
export default function PricingSection() {

    return (
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                    <div className="text-lg font-semibold">Start</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">Free</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        <div className="text-gray-700">10 deploys per day</div>
                        <div className="text-gray-700">10 GB of storage</div>
                        <div className="text-gray-700">20 domains</div>
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            Start for free
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        Sed ut unde omnis iste natus accusantium doloremque.
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
                    <div className="text-lg font-semibold">Pro</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">$38</div>
                        <div className="text-gray-700">/ mo</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        <div className="text-gray-700">200 deploys per day</div>
                        <div className="text-gray-700">80 GB of storage</div>
                        <div className="text-gray-700">Global CDN</div>
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Buy Pro
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        Sed ut unde omnis iste natus accusantium doloremque.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div className="text-center">
                    <div className="text-lg font-semibold">Business</div>
                    <div className="flex items-center justify-center mt-2">
                        <div className="mr-1 text-5xl font-bold">$78</div>
                        <div className="text-gray-700">/ mo</div>
                    </div>
                    <div className="mt-2 space-y-3">
                        <div className="text-gray-700">50 GB of storage</div>
                        <div className="text-gray-700">Unlimited domains</div>
                        <div className="text-gray-700">24/7 Support</div>
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            Buy Business
                        </a>
                    </Link>
                    <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                        Sed ut unde omnis iste natus accusantium doloremque.
                    </p>
                </div>
            </div>
        </div>
    )
}