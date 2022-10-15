export default function SectionHeader({ header, titleBegin, titleEnd, subTitle }) {
    return (
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    {header}
                </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                            width="52"
                            height="24"
                        />
                    </svg>
                    <span className="relative">{titleBegin}</span>
                </span>{' '}
                {titleEnd}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
                {subTitle}
            </p>
        </div>
    )
}