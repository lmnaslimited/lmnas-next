import Link from "next/link"
export const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link href="/">
                        <a

                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <svg
                                className="w-10 text-deep-purple-accent-400"
                                viewBox="0 0 1000 1000"
                                strokeLinejoin="round"
                                strokeWidth="48"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="206.81" y="113.09" width="208.48" height="489.24" />
                                <rect x="415.3" y="600.48" width="357.51" height="219.91" />
                                <polygon points="415.3 600.17 206.81 600.17 415.3 820.39 415.3 600.17" />
                                <rect x="566.9" y="260.93" width="205.91" height="205.91" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                LMNAs
                            </span>
                        </a>
                    </Link>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            LMNAs, the most adaptable and accessible digital business solution providers for growing organizations.

                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            We don’t think of it as just a digital transformation.
                            We’re driving an end-to-end business transformation.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <Link href="tel:+919884044470">
                            <a

                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                +91 98840 4470
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <Link href="mailto:hello@lmnas.com">
                            <a

                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                hello@lmnas.com
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Address:</p>
                        <Link href="https://www.google.com/maps">
                            <a

                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                #B202 Radiance Royal, Poonthalmalle CH-59
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        {/** HIde face book
                        <Link href="">
                            <a
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                        </Link>
                         */}
                        <Link href="https://twitter.com/lmnaslimited" >
                            <a
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                        </Link >
                        <Link href="https://www.instagram.com/lmnaslimited/" >
                            <a
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a >
                        </Link >
                        <Link href="https://in.linkedin.com/company/lmnaslimited" >
                            <a
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >

                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </Link >
                    </div >
                    <p className="mt-4 text-sm text-gray-500">
                        Stay Connected. Subscribe to our social handles to get bored.
                    </p>
                </div >
            </div >
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © Copyright 2022 LMNAs Cloud Solutions LLP. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <Link href="/">
                            <a
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                F.A.Q
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <a
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Privacy Policy
                            </a>
                        </Link >
                    </li >
                    <li>
                        <Link href="/" >
                            <a
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Terms &amp; Conditions
                            </a>
                        </Link >
                    </li >
                </ul >
            </div >
        </div >
    );
};