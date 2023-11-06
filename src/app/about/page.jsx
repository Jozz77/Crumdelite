import React from 'react'
import Header from '../Components/Header/Header'
import OurStory from '../Components/HomeHero/OurStory/OurStory'
import MeetBakers from './Components/MeetBakers/MeetBakers'
import Passion from './Components/Passion/Passion'
import BreadBake from './Components/BreadBake/BreadBake'
import Delivery from '../Components/HomeHero/Delivery/Delivery'
import Newletter from '../Components/HomeHero/Flavour/Newletter'
import Footer from '../Components/Footer/Footer'

export default function page() {
  return (
    <div className=' mt-24'>
      <Header />
      <OurStory />
      <MeetBakers />
      <Passion />
      <BreadBake />
      <Delivery />
      <Newletter />
      <Footer />
    </div>
  )
}
