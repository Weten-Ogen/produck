"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
interface Props{
reset : () => void,
error: Error & {digest?:string,cause?:string}
}

export default function error({reset,error}:Props) {
  const router = useRouter()

  const goBack =useCallback(()=>{
    router.back()
  },[])
  return (
    <div className='absolute inset-0 w-full bg-muted z-[50] '>

    <div className='p-12  bg-slate-500 absolute inset-0 h-screen md:h-[400px] flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center space-y-3'>
          <div className='capitalize '>{error.name}</div>
          <div>{error.message}</div>
          <div>{error.cause}</div>
           <div className='flex items-center justify-center gap-8'>
              <Button  
              className=' uppercase ' onClick={() =>reset()}>try again</Button>
              <Button  
              className=' uppercase ' onClick={() =>goBack()}>go back</Button>
            </div> 
        </div>
    </div>
    </div>
  )
}
