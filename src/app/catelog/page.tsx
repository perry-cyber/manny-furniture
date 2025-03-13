import FloatingNavbar from '@/components/FloatingNav'
import { WavyBackground } from '@/components/ui/wavy-background'
import React from 'react'

export default function page() {
  return (
    <div>
      <FloatingNavbar/>
            <WavyBackground className="w-full mx-auto flex items-center justify-center pb-10">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              OUR CATELOG
            </p>
            
          </WavyBackground>
    </div>
  )
}
