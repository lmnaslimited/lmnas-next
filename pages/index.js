
import Assymetric from '../components/assymetric'
import { Footer } from '../components/footer'
import HeroMain from '../components/heroMain'
import Homeproducts from '../components/homeProducts'
import Industries from '../components/industires'
import Modules from '../components/modules'
import { Nav } from '../components/nav'
import Example from '../components/tabExample'
import Pricing from '../components/views/pricing'

export default function Home() {
  return (
    <>
      <Nav />
      <HeroMain />
      <Homeproducts />
      <Assymetric />
      <Modules />
      <Industries />
      <Pricing/>
      <Footer />
    </>
  )
}
