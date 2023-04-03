export default function WhyIsItGreat() {
    return (
        <>
            {/* Section: Design Block */}
            <section className="mb-32 text-gray-800 text-center lg:text-left">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n\n      /* These are the KEY styles - you can add them directly to any object you want in your project */\n      .fancy-border-radius {\n        border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;\n      }\n    "
                    }}
                />
                {/* Jumbotron */}
                <div className="container mx-auto xl:px-32 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 flex items-center">
                        <div className="mb-12 lg:mb-0">
                            <div
                                className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                style={{
                                    background: "hsla(0, 0%, 100%, 0.55)",
                                    backdropFilter: "blur(30px)",
                                    zIndex: 1
                                }}
                            >
                                <h2 className="text-3xl font-bold mb-4 display-5">
                                    Why is it so great?
                                </h2>
                                <p className="text-gray-500 mb-12">
                                    Start lauching your business on day 1 with interactive on-boarding Kit. Save Money from multiple Subscrption to a Single subscription with the All in one Business Suite  
                                </p>
                                <div className="grid md:grid-cols-3 gap-x-6">
                                    <div className="mb-12 md:mb-0">
                                        <h2 className="text-3xl font-bold text-dark mb-4">10%</h2>
                                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                                            Easy To Use
                                        </h5>
                                    </div>
                                    <div className="mb-12 md:mb-0">
                                        <h2 className="text-3xl font-bold text-dark mb-4">70%</h2>
                                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                                            1 Day Launch
                                        </h5>
                                    </div>
                                    <div className="">
                                        <h2 className="text-3xl font-bold text-dark mb-4">0%</h2>
                                        <h5 className="text-lg font-medium text-gray-500 mb-0">
                                            
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                                className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
        </>
    )
}