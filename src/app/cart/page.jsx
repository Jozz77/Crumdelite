import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import CartHero from './Components/CartHero'
import You from './Components/You'


export default function page() {
  return (
    <div>
      <Header />
      <CartHero />
      <You />
      <Footer />
    </div>
  )
}
