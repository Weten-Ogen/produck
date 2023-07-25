import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:'Produck | Ecommerce Store',
  description: 'A commercial online store for shopping attire,wears, clothes and accessories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div className='mt-20'>
        {children}
        </div>
        </body>
    </html>
  )
}
