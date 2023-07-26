import { fetchProduct } from '@/lib/api'
import Image from 'next/image';
import React from 'react'
import Modal from '@/components/layout/Modal';


export default async function page({params}:any) {
    const {id} = params;
    const product = await fetchProduct(id).then(res => res.json())
    const {image,title,description,rating,price} = product;

  return (
    <Modal >
        <div className='border w-[60%] min-h-screen border-muted mx-auto'>
            <h1>{title}</h1>
            <div className='w-full h-auto object-contain'>
            <Image 
            className='object-cover h-100'
            src={image} 
            height="400"
            width="400"
            alt={title}/>
            </div>
        </div>
    </Modal>
  )
}
