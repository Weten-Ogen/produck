import React from 'react'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='flex fixed top-0 left-0 w-full bg-muted z-[20] items-center justify-between py-2 px-4'>
    <Link href='/'>
      <div className='cursor-pointer uppercase tracking-wider font-bold text-red-500'>Produck</div>
    </Link>
      <div>
        <Avatar className='cursor-pointer  ' >
            <AvatarImage></AvatarImage>
            <AvatarFallback className='bg-red-600 text-white font-bold'>M</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
