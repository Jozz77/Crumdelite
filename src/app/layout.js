import { Inter } from 'next/font/google'
import './globals.css'
import { Montserrat, Sacramento, Quicksand } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const sacramento = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sacramento',
  weight: ["400"],
})
const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  // weight: ["400"],
})

export const metadata = {
  title: 'Crumdelite',
  description: 'Your one-time bread stop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sacramento.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  )
}
