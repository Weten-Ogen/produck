import React from 'react'
import { ProductCardProps } from './ProductCard'
import ProductCard from './ProductCard';

interface ProductGridProp{
    data:ProductCardProps[] 
}


export default function ProductGrid({data}:ProductGridProp) {
  return (
    <div className='flex flex-col justify-center gap-4 md:grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 items-center md:px-8'>
    {data?.map(item => (
        <ProductCard  {...item}/>
    ))}
    </div>
  )
}
