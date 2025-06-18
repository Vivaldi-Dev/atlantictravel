'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google';
import Cards from './components/cards/Cards';
import Grid from './components/grid/Grid';
import Ready from './components/pronto/Ready';


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700']
})


export default function Banner() {
    return (

        <div>
            <div className={`relative w-full h-screen max-h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/baner2.jpg')] ${inter.variable} font-sans`}>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}

                        className={`max-w-2xl ${inter.variable} font-inter`}>
                        <p className='text-white text-sm md:text-base leading-none	'>
                            VIAGENS INTERNACIONAIS | VIAGENS NACIONAIS
                        </p>

                        <h1 className='text-[#FFF700] text-4xl md:text-6xl lg:text-7xl  font-bold leading-none	 '>
                            Atlantic Travel
                        </h1>

                        <h2 className='text-[#FFF700] text-3xl md:text-5xl lg:text-6xl  font-bold leading-tight '>
                            Lda Viagens & Turismo
                        </h2>

                        <p className='text-white text-3xl md:text-5xl lg:text-6xl md:text-nowrap font-bold mb-4'>
                            Código IATA 5621035-0
                        </p>

                        <div className='text-white  text-base md:text-lg'>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                Fundada há mais de 15 anos, a Atlantic Travel nasceu com a missão de
                            </motion.p>

                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                                oferecer experiências que vão além do turismo. O nosso propósito é ajudar
                            </motion.p>

                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                                pessoas a realizarem sonhos, explorarem culturas e criarem memórias com
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                                segurança, personalização e atendimento humano em cada detalhe.
                            </motion.p>

                            <div className='flex items-center gap-5 mt-5 '>
                                <div className='bg-white shadow p-4 rounded max-w-36 w-full'>
                                    <p className='font-bold text-black leading-none'>+15</p>
                                    <p className='text-[10px] font-semibold text-black'>Anos de Experiência</p>
                                </div>

                                <div className='bg-white shadow p-4 rounded max-w-36 w-full'>
                                    <p className='font-bold text-black leading-none'>+150</p>
                                    <p className='text-[10px] font-semibold text-black'>Parcerias</p>
                                </div>

                                <div className='bg-white shadow p-4 rounded max-w-36 w-full'>
                                    <p className='font-bold text-black leading-none'>500+</p>
                                    <p className='text-[10px] font-semibold text-black'>Razões para Viajar</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Cards />
            <Grid />
            <Ready />
        </div>

    )
}