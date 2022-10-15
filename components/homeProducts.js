import SectionContainer from "./sectionContainer"
import SectionHeader from "./sectionHeader"

export default function Homeproducts({ products }) {
  return (

    <SectionContainer>
      <SectionHeader header={'LENS Product Suits'} titleBegin={'Cloud'} titleEnd={'Expereince Products for E2E Business'}
        subTitle={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.'} />

      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              1
            </p>
            <p className="text-lg font-bold leading-5">Idea 2 Market</p>
          </div>
          <p className="text-sm text-gray-900">
            Bro ipsum dolor sit amet gaper backside single track, manny Bike
            epic clipless.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              2
            </p>
            <p className="text-lg font-bold leading-5">Market 2 Order</p>
          </div>
          <p className="text-sm text-gray-900">
            Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
            flail 180 berm.
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">Order 2 Cash</p>
          </div>
          <p className="text-sm text-gray-900">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </SectionContainer>

  )
}