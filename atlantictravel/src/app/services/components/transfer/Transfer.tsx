'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700'],
})

export default function Transfer() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={`bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden py-16 ${inter.variable} font-sans`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='text-center '>

                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white text-[#000000A6] p-6 rounded-lg  hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Transfer e Transportes</h3>
                        <p>Mobilidade Garantida em Qualquer Destino.</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Serviço de transfer aeroporto-hotel-aeroporto</li>
                            <li>Transporte executivo com motoristas profissionais</li>
                            <li>Autocarros de luxo para grupos e excursões</li>
                            <li>Soluções de mobilidade para eventos</li>
                        </ul>
                        <p>Frota moderna e motoristas certificados para sua segurança!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='flex justify-center h-full -mt-10'>
                        <div className='relative w-full h-[400px] sm:h-auto rounded-lg overflow-hidden shadow-xl'>
                            <Image
                                src="/side.jpg"
                                alt="Serviços de hotelaria Atlantic Travel"
                                fill
                                className='object-cover hover:scale-105 transition-transform duration-500'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white text-[#000000A6] p-6 rounded-lg hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Serviços de Protocolo </h3>
                        <p className='text-[#000000A6] mb-4'>Check-in e Check-out com Excelência</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Assistência em procedimentos de check-in/out</li>
                            <li>Gestão de bagagens e despacho</li>
                            <li>Acompanhamento em aeroportos</li>
                            <li>Serviços VIP e lounge access</li>
                        </ul>
                        <p>Facilite seus processos aeroportuários com nosso serviço exclusivo!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}