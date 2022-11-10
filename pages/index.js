
import Assymetric from '../components/assymetric'
import { Footer } from '../components/footer'
import HeroMain from '../components/heroMain'
import Homeproducts from '../components/homeProducts'
import Industries from '../components/industires'
import Modules from '../components/modules'
import { Nav } from '../components/nav'
import Pricing from '../components/views/pricing'
import { getPricingData } from '../lib/api'

export default function Home({pricingData}) {
  return (
    <>
    
      <HeroMain />
      <Homeproducts />
      <Assymetric />
      <Modules />
      <Industries />
      <Pricing pricingData={pricingData}/>
     
    </>
  )
}

export async function getStaticProps() {
  const pricingData = await getPricingData()
  return {
    props: { pricingData }
  }
}
