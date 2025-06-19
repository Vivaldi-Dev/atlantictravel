import React from 'react'
import { Inter } from 'next/font/google'
import LayoutCards from './components/LayoutCard/LayoutCards'
import GridLyout from './components/grid/GridLyout'


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700'],
})

export default function page() {
    return (
        <div>
            <div className={`relative w-full h-screen max-h-[500px] bg-cover bg-center bg-no-repeat bg-[url('/banner4.jpg')] ${inter.variable} font-sans`}>
                <div className="banner-overlay absolute left-0 w-[30%] inset-0 bg-gradient-to-r from-black/20 to-black/30 z-0" />

                <div className="relative z-10 flex items-center justify-start h-full px-14">
                    <div className=" max-w-3xl">
                        <p className="text-white text-sm  tracking-wide">
                            VIAGENS INTERNACIONAIS | VIAGENS NACIONAIS
                        </p>

                        <h1 className="text-[#FFF700] text-4xl md:text-6xl font-bold  leading-none drop-shadow">
                            O teu próximo
                        </h1>
                        <h1 className="text-white text-4xl md:text-6xl font-bold  leading-none drop-shadow">
                            destino começa aqui!
                        </h1>
                        <h2 className="text-white text-2xl  font-semibold leading-snug drop-shadow">
                            Serviços Completos para Todas as Suas <br /> Necessidades de Viagem
                        </h2>
                    </div>
                </div>
            </div>
            <LayoutCards />
            <GridLyout />
        </div>
    )
}
