import Image from 'next/image'
import Header from './Components/Header/Header'
import HomeHero from './Components/HomeHero/HomeHero'
import BrowseCategory from './Components/HomeHero/BrowseCategory'
import BestSelling from './Components/HomeHero/BestSelling'
import Flavour from './Components/HomeHero/Flavour/Flavour'
import Delivery from './Components/HomeHero/Delivery/Delivery'
import LetVideo from './Components/HomeHero/Flavour/LetVideo/LetVideo'
import ChildVideo from './Components/HomeHero/ChildVideo/ChildVideo'
import Newletter from './Components/HomeHero/Flavour/Newletter'
import Footer from './Components/Footer/Footer'

export default function Home() {
  return (
    <body className="">
      <Header />
      <HomeHero />
      <BrowseCategory />
      <BestSelling />
      <Flavour />
      <Delivery />
      <LetVideo />
      {/* <ChildVideo /> */}
      <Newletter />
      <Footer />
    </body>
  )
}
