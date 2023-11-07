import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import React from 'react'
import RecipesHero from './Components/RecipesHero'
import RecipesThings from './Components/RecipesThings'
import Newletter from '../Components/HomeHero/Flavour/Newletter'

export default function page() {
  return (
    <div>
      <Header />
      <RecipesHero />
      <RecipesThings />
      <Newletter />
      <Footer />
    </div>
  )
}
