import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ShopHero from './Components/ShopHero'
import Newletter from '../Components/HomeHero/Flavour/Newletter'
import Reviews from '../Components/HomeHero/Flavour/Reviews'
import ShopThings from './Components/ShopThings'

export default function page() {
  return (
    <div>
      <Header />
      <ShopHero />
      <ShopThings />
      <Reviews />
      <Newletter />
      <Footer />
    </div>
  )
}
