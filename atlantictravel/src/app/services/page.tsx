'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import Cards from './components/Cards/Cards'
import Section from './components/section/Section'
import Seguros from './components/seguros/Seguros'
import Hospedagem from './components/hospedagem/Hospedagem'
import Transfer from './components/transfer/Transfer'
import Eventos from './components/eventos/Eventos'
import Rent from './components/rent/Rent'
import Reembolsos from './components/reembolsos/Reembolsos'
import Banners from './components/banner/Banners'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
})

export default function Banner() {
  return (

    <div >
      <div className={`relative w-full h-screen max-h-[700px] bg-cover bg-center bg-no-repeat bg-[url('/banner3.jpg')] ${inter.variable} font-sans`}>
        <div className="banner-overlay absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 z-0" />

        <div className="relative z-10 flex items-center justify-start h-full px-14">
          <div className=" max-w-3xl">
            <p className="text-white text-sm  tracking-wide">
              VIAGENS INTERNACIONAIS | VIAGENS NACIONAIS
            </p>

            <h1 className="text-[#FFF700] text-4xl md:text-7xl font-bold  leading-none drop-shadow">
              Atlantic Travel
            </h1>

            <h2 className="text-white text-4xl  font-semibold leading-snug drop-shadow">
              Serviços Completos para Todas as Suas <br /> Necessidades de Viagem
            </h2>
          </div>
        </div>
      </div>
      <Cards />
      <Section />
      <Seguros />
      <Hospedagem />
      <Transfer />
      <Eventos />
      <Rent />
      <Reembolsos />
      <Banners />
    </div>

  )
}
