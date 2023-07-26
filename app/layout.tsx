import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar';
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:'Produck | Ecommerce Store',
  description: 'A commercial online store for shopping attire,wears, clothes and accessories.',
}

interface PageProp{
  children : ReactNode,
  product: ReactNode
}

export default function RootLayout({
  children,product
}:PageProp) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div className='mt-20'>
        {children}
        {product}
        </div>
        </body>
    </html>
  )
}
