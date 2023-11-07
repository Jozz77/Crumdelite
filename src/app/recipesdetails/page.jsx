import React from 'react'
import RecipeDescription from './Components/RecipeDescription'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import RelatedArticles from './Components/RelatedArticles'
import Newletter from '../Components/HomeHero/Flavour/Newletter'

export default function page() {
  return (
    <div>
      <Header />
      <RecipeDescription />
      <RelatedArticles />
      <Newletter />
      <Footer />
    </div>
  )
}
