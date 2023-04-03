export default function HeroBackgroundWithCard({heroInfo}) {
    console.log('heroinfo from herosection', heroInfo)
    return(
        <div>
            <section className="mb-40">
                
                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%', backgroundImage: 'url("https://erpnext.com/files/erpnext-hero-compressed.png")',     height: '500px' }} />
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="text-center">
                        <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{ marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(10px)' }}>
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12  text-th-secondary-accent-dark">{heroInfo.title1} <br /><span className="text-th-primary">{heroInfo.title2}</span></h1>
                            <a className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-th-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-th-primary-accent hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{heroInfo.cta1}</a>
                            <a className="inline-block px-7 py-3 bg-transparent text-th-primary font-medium text-xs leading-tight uppercase rounded hover:text-th-primay-accent hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">{heroInfo.cta2}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}