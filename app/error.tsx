"use client"
import { Button } from '@/components/ui/button'
import { ErrorProps } from 'next/error'
import React, { ErrorInfo } from 'react'

interface Props{
reset : () => void,
error: ErrorProps
}

export default function error({reset,error}:Props) {
  return (
    <div className='p-12'>
        <div className=''>
            <div>{error.title}</div>
            <Button>Refresh</Button>
        </div>
    </div>
  )
}
