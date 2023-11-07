import BreadCard from '@/app/Components/BreadCard/BreadCard'
import React from 'react'
import ShopThingsData from './ShopThingsData'

export default function ShopThings() {
  return (
    <div className='flex flex-wrap justify-between gap-y-20 px-[5%] py-12 '>
         {/* <BreadCard name="name  ndhhdg"  />     q */}
        {
            ShopThingsData.map((shop) => (
                <div key={shop.id} className=' w-[22%] '>
                    <BreadCard name={shop.name} price={shop.price} image={shop.img} />
                </div>
            ))
        }
      
    </div>
  )
}
