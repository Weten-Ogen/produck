"use client"
import { usePathname, useRouter } from 'next/navigation'
import  { useCallback } from 'react'
import { Button } from '../ui/button'

export default function ErrorButtons() {
    const path = usePathname()
    console.log(path)
    const router= useRouter()
    const goback = useCallback(()=>{
        router.back()
        
    },[]) 

    const continum =()=>{
        router.push(path.toLowerCase())
    }
  return (
    <div className='upercase text-2xl flex items-center gap-4 '>
        <Button onClick={goback}>Go back</Button>
    </div>
  )
}
