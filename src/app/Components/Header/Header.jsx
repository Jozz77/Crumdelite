import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Assets/Logo.png'

export default function Header() {
  return (
    <header className=' fixed z-[10] top-0 w-full flex justify-between items-center py-2 px-[5%] '>
      <nav className='w-[15%] flex justify-between '>
        <Link href="">
            Home
        </Link>
src/app/contact/page.jsx        <Link href="">
            Home
        </Link>
        <Link href="">
            Home
        </Link>
      </nav>
      <div className='w-[10%] '>
        <Image src={Logo} className=' w-full' alt='Logo Image' />
      </div>
      <nav className='w-[15%] flex justify-between '>
      <Link href="/contact">
            Contact
        </Link>
        <Link href="/about">
            About
        </Link>
        <Link href="">
            Home
        </Link>
      </nav>
    </header>
  )
}
