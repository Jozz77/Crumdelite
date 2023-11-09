import React from 'react'
import YouData from './YouData'
import BreadCard from '@/app/Components/BreadCard/BreadCard'

export default function You() {
  return (
    <div className=' px-[5%]'>
      <h1>You may also like</h1>

      <section className='flex flex-wrap justify-between gap-y-20 mt-12 '>
        {YouData.map((shop) => (
          <div key={shop.id} className=" w-[22%] ">
            <BreadCard name={shop.name} price={shop.price} image={shop.img} />
          </div>
        ))}
      </section>
    </div>
  )
}
