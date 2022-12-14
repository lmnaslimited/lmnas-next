import Link from "next/link"
import SectionContainer from "./sectionContainer"
import SectionHeader from "./sectionHeader"

export default function Industries({ industries }) {
    return (

        <SectionContainer id={'industries'}>
            <SectionHeader header={'Industries'} titleBegin={'World'} titleEnd={'Class Consulting'} subTitle={'We help turning your Industry smart with our Rich and Niche Consulting experience across funcions.'} />

            <div className="grid max-w-4xl gap-12 row-gap-10 mx-auto lg:grid-cols-2">
                <div className="lg:max-w-md">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400 sm:w-20 sm:h-20"
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
                    <h6 className="mb-3 text-xl font-bold leading-5">Smart Manufacturing</h6>
                    <p className="mb-6 text-sm text-gray-900">
                        Turn your Industry smart, with highly automated manufacturing processes. LENS Smart Manufacturing is your path from paper-based processes to digital workflows and real-time visualization.
                    </p>
                    <div className="flex items-center mb-4">
                        <div className="mr-6">
                            <svg
                                className="w-32 text-blue-gray-200 sm:w-40"
                                viewBox="0 0 103 15"
                                fill="currentColor"
                            >
                                <path d="M7.938,14.378 C8.394,14.378 8.856,14.333 9.324,14.243 C9.792,14.153 10.296,14.012 10.836,13.82 L10.836,13.82 L11.196,13.694 L11.196,9.518 C10.296,10.478 9.282,10.958 8.154,10.958 C7.638,10.958 7.158,10.862 6.714,10.67 C6.27,10.478 5.883,10.214 5.553,9.878 C5.223,9.542 4.965,9.146 4.779,8.69 C4.593,8.234 4.5,7.736 4.5,7.196 C4.5,6.668 4.593,6.176 4.779,5.72 C4.965,5.264 5.22,4.871 5.544,4.541 C5.868,4.211 6.255,3.95 6.705,3.758 C7.155,3.566 7.644,3.47 8.172,3.47 C9.372,3.47 10.38,3.968 11.196,4.964 L11.196,4.964 L11.196,0.752 C10.62,0.512 10.071,0.335 9.549,0.221 C9.027,0.107 8.496,0.05 7.956,0.05 C7.008,0.05 6.102,0.227 5.238,0.581 C4.374,0.935 3.615,1.427 2.961,2.057 C2.307,2.687 1.785,3.437 1.395,4.307 C1.005,5.177 0.81,6.134 0.81,7.178 C0.81,8.222 1.008,9.185 1.404,10.067 C1.8,10.949 2.325,11.711 2.979,12.353 C3.633,12.995 4.389,13.493 5.247,13.847 C6.105,14.201 7.002,14.378 7.938,14.378 Z M20.52,14.378 C21.612,14.378 22.62,14.195 23.544,13.829 C24.468,13.463 25.263,12.956 25.929,12.308 C26.595,11.66 27.114,10.901 27.486,10.031 C27.858,9.161 28.044,8.222 28.044,7.214 C28.044,6.206 27.858,5.267 27.486,4.397 C27.114,3.527 26.595,2.768 25.929,2.12 C25.263,1.472 24.468,0.965 23.544,0.599 C22.62,0.233 21.612,0.05 20.52,0.05 C19.416,0.05 18.405,0.233 17.487,0.599 C16.569,0.965 15.78,1.472 15.12,2.12 C14.46,2.768 13.944,3.527 13.572,4.397 C13.2,5.267 13.014,6.206 13.014,7.214 C13.014,8.222 13.2,9.161 13.572,10.031 C13.944,10.901 14.46,11.66 15.12,12.308 C15.78,12.956 16.569,13.463 17.487,13.829 C18.405,14.195 19.416,14.378 20.52,14.378 Z M20.52,10.958 C20.004,10.958 19.515,10.865 19.053,10.679 C18.591,10.493 18.186,10.232 17.838,9.896 C17.49,9.56 17.214,9.164 17.01,8.708 C16.806,8.252 16.704,7.754 16.704,7.214 C16.704,6.674 16.806,6.176 17.01,5.72 C17.214,5.264 17.49,4.868 17.838,4.532 C18.186,4.196 18.591,3.935 19.053,3.749 C19.515,3.563 20.004,3.47 20.52,3.47 C21.036,3.47 21.525,3.563 21.987,3.749 C22.449,3.935 22.857,4.196 23.211,4.532 C23.565,4.868 23.844,5.264 24.048,5.72 C24.252,6.176 24.354,6.674 24.354,7.214 C24.354,7.754 24.252,8.252 24.048,8.708 C23.844,9.164 23.565,9.56 23.211,9.896 C22.857,10.232 22.449,10.493 21.987,10.679 C21.525,10.865 21.036,10.958 20.52,10.958 Z M33.174,14 L34.344,6.188 L37.386,14 L38.79,14 L41.994,6.188 L43.164,14 L46.674,14 L44.37,0.428 L40.878,0.428 L38.178,7.664 L35.46,0.428 L31.968,0.428 L29.664,14 L33.174,14 Z M52.434,14 L52.434,9.5 L54.522,9.5 C56.046,9.5 57.213,9.104 58.023,8.312 C58.833,7.52 59.238,6.404 59.238,4.964 C59.238,3.524 58.833,2.408 58.023,1.616 C57.213,0.824 56.046,0.428 54.522,0.428 L54.522,0.428 L48.906,0.428 L48.906,14 L52.434,14 Z M53.604,6.656 L52.434,6.656 L52.434,3.272 L53.604,3.272 C54.9,3.272 55.548,3.836 55.548,4.964 C55.548,6.092 54.9,6.656 53.604,6.656 L53.604,6.656 Z M62.82,14 L63.63,11.642 L68.67,11.642 L69.48,14 L73.242,14 L68.076,0.428 L64.224,0.428 L59.058,14 L62.82,14 Z M67.734,8.96 L64.566,8.96 L66.15,4.442 L67.734,8.96 Z M78.318,14 L78.318,5.702 L84.834,14 L88.344,14 L88.344,0.428 L84.834,0.428 L84.834,8.726 L78.318,0.428 L74.79,0.428 L74.79,14 L78.318,14 Z M97.992,14 L97.992,7.484 L102.96,0.428 L98.748,0.428 L96.246,4.136 L93.726,0.428 L89.514,0.428 L94.464,7.484 L94.464,14 L97.992,14 Z" />
                            </svg>
                        </div>
                        <div>
                            <img
                                src='https://qsgb.lmnas.com/files/SGB_India_Logo_RGB.png'
                                alt="image"
                                class="w-full h-10"
                            />
                            {/**  <svg
                                className="w-32 text-blue-gray-200 sm:w-40"
                                viewBox="0 0 103 15"
                                fill="currentColor"
                            >
                                <path d="M7.938,14.378 C8.394,14.378 8.856,14.333 9.324,14.243 C9.792,14.153 10.296,14.012 10.836,13.82 L10.836,13.82 L11.196,13.694 L11.196,9.518 C10.296,10.478 9.282,10.958 8.154,10.958 C7.638,10.958 7.158,10.862 6.714,10.67 C6.27,10.478 5.883,10.214 5.553,9.878 C5.223,9.542 4.965,9.146 4.779,8.69 C4.593,8.234 4.5,7.736 4.5,7.196 C4.5,6.668 4.593,6.176 4.779,5.72 C4.965,5.264 5.22,4.871 5.544,4.541 C5.868,4.211 6.255,3.95 6.705,3.758 C7.155,3.566 7.644,3.47 8.172,3.47 C9.372,3.47 10.38,3.968 11.196,4.964 L11.196,4.964 L11.196,0.752 C10.62,0.512 10.071,0.335 9.549,0.221 C9.027,0.107 8.496,0.05 7.956,0.05 C7.008,0.05 6.102,0.227 5.238,0.581 C4.374,0.935 3.615,1.427 2.961,2.057 C2.307,2.687 1.785,3.437 1.395,4.307 C1.005,5.177 0.81,6.134 0.81,7.178 C0.81,8.222 1.008,9.185 1.404,10.067 C1.8,10.949 2.325,11.711 2.979,12.353 C3.633,12.995 4.389,13.493 5.247,13.847 C6.105,14.201 7.002,14.378 7.938,14.378 Z M20.52,14.378 C21.612,14.378 22.62,14.195 23.544,13.829 C24.468,13.463 25.263,12.956 25.929,12.308 C26.595,11.66 27.114,10.901 27.486,10.031 C27.858,9.161 28.044,8.222 28.044,7.214 C28.044,6.206 27.858,5.267 27.486,4.397 C27.114,3.527 26.595,2.768 25.929,2.12 C25.263,1.472 24.468,0.965 23.544,0.599 C22.62,0.233 21.612,0.05 20.52,0.05 C19.416,0.05 18.405,0.233 17.487,0.599 C16.569,0.965 15.78,1.472 15.12,2.12 C14.46,2.768 13.944,3.527 13.572,4.397 C13.2,5.267 13.014,6.206 13.014,7.214 C13.014,8.222 13.2,9.161 13.572,10.031 C13.944,10.901 14.46,11.66 15.12,12.308 C15.78,12.956 16.569,13.463 17.487,13.829 C18.405,14.195 19.416,14.378 20.52,14.378 Z M20.52,10.958 C20.004,10.958 19.515,10.865 19.053,10.679 C18.591,10.493 18.186,10.232 17.838,9.896 C17.49,9.56 17.214,9.164 17.01,8.708 C16.806,8.252 16.704,7.754 16.704,7.214 C16.704,6.674 16.806,6.176 17.01,5.72 C17.214,5.264 17.49,4.868 17.838,4.532 C18.186,4.196 18.591,3.935 19.053,3.749 C19.515,3.563 20.004,3.47 20.52,3.47 C21.036,3.47 21.525,3.563 21.987,3.749 C22.449,3.935 22.857,4.196 23.211,4.532 C23.565,4.868 23.844,5.264 24.048,5.72 C24.252,6.176 24.354,6.674 24.354,7.214 C24.354,7.754 24.252,8.252 24.048,8.708 C23.844,9.164 23.565,9.56 23.211,9.896 C22.857,10.232 22.449,10.493 21.987,10.679 C21.525,10.865 21.036,10.958 20.52,10.958 Z M33.174,14 L34.344,6.188 L37.386,14 L38.79,14 L41.994,6.188 L43.164,14 L46.674,14 L44.37,0.428 L40.878,0.428 L38.178,7.664 L35.46,0.428 L31.968,0.428 L29.664,14 L33.174,14 Z M52.434,14 L52.434,9.5 L54.522,9.5 C56.046,9.5 57.213,9.104 58.023,8.312 C58.833,7.52 59.238,6.404 59.238,4.964 C59.238,3.524 58.833,2.408 58.023,1.616 C57.213,0.824 56.046,0.428 54.522,0.428 L54.522,0.428 L48.906,0.428 L48.906,14 L52.434,14 Z M53.604,6.656 L52.434,6.656 L52.434,3.272 L53.604,3.272 C54.9,3.272 55.548,3.836 55.548,4.964 C55.548,6.092 54.9,6.656 53.604,6.656 L53.604,6.656 Z M62.82,14 L63.63,11.642 L68.67,11.642 L69.48,14 L73.242,14 L68.076,0.428 L64.224,0.428 L59.058,14 L62.82,14 Z M67.734,8.96 L64.566,8.96 L66.15,4.442 L67.734,8.96 Z M78.318,14 L78.318,5.702 L84.834,14 L88.344,14 L88.344,0.428 L84.834,0.428 L84.834,8.726 L78.318,0.428 L74.79,0.428 L74.79,14 L78.318,14 Z M97.992,14 L97.992,7.484 L102.96,0.428 L98.748,0.428 L96.246,4.136 L93.726,0.428 L89.514,0.428 L94.464,7.484 L94.464,14 L97.992,14 Z" />
                            </svg>*/}
                        </div>
                    </div>
                    
                    <Link  href="/" > 
                    <a
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                    </Link>
                </div>
                <div className="lg:max-w-md">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400 sm:w-20 sm:h-20"
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
                    <h6 className="mb-3 text-xl font-bold leading-5">Retail & Distribution</h6>
                    <p className="mb-6 text-sm text-gray-900">
                    Bring transparency among stakeholders on your Retail & Supply Chain. With LENS solutions optimise your planning, respond to change dynamically, execute smart logistics, and outperform customer excellence. Reduce your carbon footprint and support a Green supply chain.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 row-gap-2">
                        <li className="flex items-start">
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
                            Multi-Store POS
                        </li>
                        <li className="flex items-start">
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
                            Smart Logistics
                        </li>
                        <li className="flex items-start">
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
                            AI Demand Planning
                        </li>
                        <li className="flex items-start">
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
                            Versatile Integrations
                        </li>
                    </div>
                </div>
            </div>
        </SectionContainer>

    )
}