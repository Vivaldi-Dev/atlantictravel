import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
})

export default function Page() {
    return (
        <div className={`relative w-full h-screen max-h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/banner.jpg')] ${inter.variable} font-sans`}>
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-0 rounded-none" />

            <div className="relative z-10 flex items-center justify-start h-full px-14">
                <div className="max-w-3xl text-white">
                    <p>Viagens Internacionais  | Viagens Nacionais</p>
                    <p className='text-[#FFF700] text-5xl font-semibold leading-none'>Cada viagem</p>
                    <p className='text-5xl font-semibold leading-none'>
                        <span className='text-[#FFF700]'> começa com </span> uma
                    </p>
                    <p className='text-5xl font-semibold leading-none'>boa conversa.</p>

                    <div className='mt-2 text-base text-white'>
                        <p>
                            Ficou com alguma dúvida sobre os nossos pacotes? Precisa de ajuda para planejar a tua próxima aventura?
                            Deseja falar com um dos nossos consultores? Estamos aqui para ti, prontos para ouvir, orientar e ajudar a
                            tornar o teu sonho de viagem em realidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
