import React from 'react'
import Logo from './Assets/Logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className=' bg-[#F0F0F0] px-[5%] py-8 '>
       <div className='w-[10%] mx-auto '>
        <Image src={Logo} className=' w-full' alt='Logo Image' />
      </div>
      <hr className='border-solid border-[1px] mt-6 border-[#DBE0E2]'/>
    </div>
  )
}
