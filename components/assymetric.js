import Link from "next/link"

export default function Assymetric() {
    return (

        <div className="lg:flex flex-wrap items-center mb-24 hidden">
            <div className="py-16 w-full md:w-4/12 px-4 md:px-24 lg:px-8 ml-auto mr-auto md:mt-4">
                <div className="text-deep-purple-accent-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6  rounded-full bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">LENS The Only All In One Business Suite.</h3>
                <p className="text-base text-gray-700 md:text-lg">For those who have used our LENS Suite, and for the hundreds
                    and perhaps thousands more who will, the experience most certainly
                    changes your perspective.</p>
                <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400 last:mr-0 mr-2 mt-2">Warehouse</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">Finance</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">Analytics</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">Supply Chain</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">CRM & Support</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">Projects</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">HR & Payroll</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">Assets</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  text-teal-900 uppercase rounded-full bg-teal-accent-400  last:mr-0 mr-2 mt-2">POS</span>
                </div>
                <Link href="/">
                    <a

                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="w-full md:w-5/12 px-16 md:px-4 mr-auto ml-auto ">
                <div className="relative flex flex-col min-w-0 w-full mb-48 md:mb-6 mt-48 md:mt-0">
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn.png" className="w-full align-middle rounded absolute shadow-lg" style={{ maxWidth: '100px', left: '145px', top: '-29px', zIndex: 3 }} />
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-profile-card.png" className="w-full align-middle rounded-lg absolute shadow-lg" style={{ maxWidth: '210px', left: '260px', top: '-160px' }} />
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-card.png" className="w-full align-middle rounded-lg absolute shadow-lg" style={{ maxWidth: '180px', left: '40px', top: '-225px', zIndex: 2 }} />
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-2.png" className="w-full align-middle rounded-lg absolute shadow-2xl" style={{ maxWidth: '200px', left: '-50px', top: '25px' }} />
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-menu.png" className="w-full align-middle rounded absolute shadow-lg" style={{ maxWidth: '580px', left: '-20px', top: '210px' }} />
                    <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn-pink.png" className="w-full align-middle rounded absolute shadow-xl" style={{ maxWidth: '120px', left: '195px', top: '95px' }} />
                </div>
            </div>
        </div>

    )
}