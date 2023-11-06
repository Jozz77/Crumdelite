import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import Newletter from '@/app/Components/HomeHero/Flavour/Newletter'
import React from 'react'
import ContactForm from './Components/ContactForm'

export default function page() {
  return (
    <div>
      <Header />
      <ContactForm />
      <Newletter />
      <Footer />
    </div>
  )
}
