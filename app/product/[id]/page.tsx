import ErrorButtons from '@/components/client/ErrorButtons';
import { fetchProduct } from '@/lib/api'
import Image from 'next/image'
import React from 'react'

export default async function page({params}:any) {
  const {id} = params;
  const product = await fetchProduct(id).then(res=> res.json())
  const {image,title,description,price,rating} = product
  return (
    <div className='mt-5 min-h-screen'>
      <div className=''>
        <div className='flex justify-center gap-4 w-[80%] mx-auto'>
          <div className='flex items-center  object-contain'>
            <Image
              className='object-cover'
              width="500"
              height="500"
             src={image} 
            alt={title}/>
          </div>
          <div className='object-contain'>
            <p>{title}</p>
            <div className='flex'>
            <h2 className='capitalize'>price:</h2>
            <p>{price}</p>
            </div>
            <div>
              <h2>description</h2>
              <p className=''>{description}</p>
            </div>
            <div>
              <h2>rating</h2>
              <p>{rating.rate}</p>
            </div>
            <ErrorButtons/>
          </div>
        </div>
      </div>
    </div>
  )
}
