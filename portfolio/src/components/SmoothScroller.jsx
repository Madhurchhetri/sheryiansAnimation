'use client'
import useLenis from '@/hooks/useLenis'
import React from 'react'

const SmoothScroller = ({children}) => {
    useLenis();
  return (
    <div>{children}</div>
  )
}

export default SmoothScroller