export default function SectionContainer({ children, id }) {
    return (
        <div id={id} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {children}
        </div>
    )
}