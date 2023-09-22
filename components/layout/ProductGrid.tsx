import React from 'react'
import { ProductCardProps } from './ProductCard'
import ProductCard from './ProductCard';

interface ProductGridProp{
    data:ProductCardProps[] 
}


export default function ProductGrid({data}:ProductGridProp) {
  return (
    <div className='w-[90%] sm:grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md: items-start  md:justify-center mx-auto mt-10'>
    {data?.map(item => (
        <ProductCard  {...item}/>
    ))}
    </div>
  )
}
