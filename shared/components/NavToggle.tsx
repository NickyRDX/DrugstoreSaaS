import React from 'react'
import ThemeToggle from '@/shared/components/ThemeToggle'
export default function NavToggle() {
  return (
    <nav className='sticky inset-0 z-50 w-full overflow-hidden px-7 py-4 flex align-center justify-end'>
      <ThemeToggle/>
    </nav>
  )
}
