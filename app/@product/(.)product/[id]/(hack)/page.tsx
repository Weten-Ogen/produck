import { fetchProduct } from '@/lib/api'
import Image from 'next/image';
import React from 'react'
import Modal from '@/components/layout/Modal';
import {FolderCog} from 'lucide-react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { StarHalf } from 'lucide-react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ErrorButtons from '@/components/client/ErrorButtons';


export default async function page({params}:any) {
    const {id} = params;
    const product = await fetchProduct(id).then(res => res.json())
    const {image,title,description,rating,price} = product;

  return (
    <Modal >
        <div className='border  mx-auto'>
            <div className='max-w-full object-contain overflow-none bg-black  px-4'>
          <h2 className='text-center text-2xl text-red-600 font-bold bg-black w-full'>{title}</h2>  
          <div className='block md:flex bg-black  gap-4'>
            <Image 
              className='object-cover  max-w-full h-auto'
              src={image} 
              height={500}
              width={200}
              alt={title}/>
            <div className='text-white mx-auto w-[98%] '>
              <div className='flex items-center  justify-between space-y-3'>
                <p className='capitalize tracking-wider font-bold'>price:</p>
                <p className='text-slate-400'>${price}</p>
              </div>

              <div className='flex items-center  justify-between'>
                <p className='font-bold capitalize '>rating count:</p>
                <p className='text-slate-400'>{rating.count}</p>
              </div>
              <div className="flex justify-between items-center">
              <p className="capitalize tracking-wider font-bold ">rating:</p>
              <p  className="flex items-center text-slate-400">{rating.rate}
              
              {
                rating.rate >= 4? 
                <Star fill="yellow" className="h-5 text-yellow-500"/>:
                <StarHalf fill="yellow" className="h-5 text-yellow-500"/>
              }</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-bold capitalize tracking-wider '>description</p>
              <p className='line-clamp-2 text-slate-400'>
                {description}</p>
            </div>'
            <ErrorButtons/>
            </div>
          </div>
            </div>
            
          
        </div>
    </Modal>
  )
}
