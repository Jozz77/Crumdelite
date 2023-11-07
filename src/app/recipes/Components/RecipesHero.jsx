import Button from '@/app/Components/HomeHero/Button/Button'
import React from 'react'
import Hero from '../Assets/Hero.png'
import Image from 'next/image'

export default function RecipesHero() {
  return (
    <div className='recipes-hero flex gap-[5%] items-center py-20 px-[5%] h-[100vh] '>
      <section className=' w-[50%] '>
      <h1 className='font-sacramento text-[4rem] leading-[120%]'>Our Amazing Sweet Crumdelite Recipes</h1>
      <p className=" font-quicksand text-[1.05rem] leading-[120%]  text-[#2C2E33] mt-4 ">Made with love and care, our Crumdelite recipes are sure to satisfy your sweet tooth.</p>
      <div className="mt-6">
          <Button text="Read Now" />
        </div>
      </section>
      <section className='w-[40%] '>
        <Image src={Hero} className=' w-full' alt='Bread' />
      </section>
    </div>
  )
}
