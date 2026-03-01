import React from 'react'
interface LayoutRoutesProps  {
  children: React.ReactNode
}
export default function LayoutRoutes({children} : LayoutRoutesProps) {
  return (
    <main className='w-full h-screen overflow-hidden font-sans relative'>
      {children}
    </main>
  )
}
