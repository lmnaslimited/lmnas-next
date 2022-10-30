import SectionContainer from "./sectionContainer"
import SectionHeader from "./sectionHeader"
export function ProductCard({step, title, subTitle}) {
  return (
   
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              {step}
            </p>
            <p className="text-lg font-bold leading-5">{title}</p>
          </div>
          <p className="text-sm text-gray-900">{subTitle}</p>
        </div>
  )
}

export default function Homeproducts({ products }) {
  return (
     
    <SectionContainer id = {'products'}>
      <SectionHeader header={'LENS Product Suits'} titleBegin={'Cloud'} titleEnd={'Expereince Products for E2E Business'}
        subTitle={'Win Competition, Sell ideas over products, With LENS fullfilment will be an experience for Your Partners'} />

      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <ProductCard step = {'1'}title={'Idea 2 Market'} subTitle={'LMNAs Unified Marketing Platform(LUMP), A Real Time Digital Marketing Cloud.'}/>
        <ProductCard step = {'2'}title={'Market 2 Order'} subTitle={'A blazing fast commerce platform with minimal design language for a greater shopping experience.'}/>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">Order 2 Cash</p>
          </div>
          <p className="text-sm text-gray-900">
          Lightweight, Easy to Integrate, Multi-Lingual ERP with NextGen Social Experience Framework.

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