import React from 'react'
import { ProductCardProps } from './ProductCard'
import ProductCard from './ProductCard';

interface ProductGridProp{
    data:ProductCardProps[] 
}


export default function ProductGrid({data}:ProductGridProp) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-8'>
    {data?.map(item => (
        <ProductCard  {...item}/>
    ))}
    </div>
  )
}
