import Image from 'next/image'
import React, { useState } from 'react'
interface ProductImageProps{
    image: string,
    fill? : boolean
    title:string
}
export default function ProductImage({title,image,fill}:ProductImageProps) {
    const [loading, setLoading] = useState(true);
  return (
   <div className=' object-contain bg-white overflow-hidden p-5 h-[200px]'>
        {fill ?
        <Image 
        fill
        src={image}
        alt={title} 
        /> :(<Image 
        src={image}
        sizes='300px'
        width={140}
        height={80}
        className={`object-cover duration-700 ease-in-out group-hover:opacity-75 max-w-full h-auto m-auto ${loading? "scale-110 blur-2xl grayscale": "scale-100 blur-0 grayscale-0"}`}
        alt={title}
        onLoadingComplete={() => setLoading(false)}/>)
        }
    </div>)
}

