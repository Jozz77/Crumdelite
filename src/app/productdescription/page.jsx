import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import DescriptionHero from './Components/DescriptionHero'
import Newletter from '../Components/HomeHero/Flavour/Newletter'
import DescriptionReviews from './DescriptionReviews'

export default function page() {
  return (
    <div>
      <Header />
      <DescriptionHero />
      <DescriptionReviews />
      <Newletter />
      <Footer />
    </div>
  )
}
