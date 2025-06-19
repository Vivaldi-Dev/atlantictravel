'use client'
import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700']
})

export default function Banner() {
  return (
    <div>
      <div className={`relative w-full h-screen max-h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/banner3.jpg')] ${inter.variable} font-sans`}>
        <div className={`max-w-2xl ${inter.variable} font-inter`}>

          <p className='text-white text-sm md:text-base leading-none	'>
            VIAGENS INTERNACIONAIS | VIAGENS NACIONAIS
          </p>

          <h1 className='text-[#FFF700] text-4xl md:text-6xl lg:text-7xl  font-bold leading-none	 '>
            Atlantic Travel
          </h1>

          <h2 className='text-[#FFF700] text-3xl md:text-5xl lg:text-6xl  font-bold leading-tight '>
            Serviços Completos para Todas as Suas <br /> Necessidades de Viagem
          </h2>

        </div>
      </div>

    </div>

  )
}