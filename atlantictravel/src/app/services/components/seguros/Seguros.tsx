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

export default function Seguros() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={` relative overflow-hidden py-16 ${inter.variable} font-sans`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-lg max-w-3xl mx-auto">   
                    </motion.div>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-[#FFFBE6] p-6 rounded-lg  hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Seguros de Viagem</h3>
                        <p>Proteção Completa para Sua Jornada </p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Cobertura para cancelamentos de viagem</li>
                            <li>Assistência médica internacional</li>
                            <li>Proteção contra extravio de bagagem</li>
                            <li>Planos individuais e familiares</li>
                        </ul>
                        <p>Cobertura válida em mais de 150 países!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='flex justify-center h-full -mt-10'>
                        <div className='relative w-full h-[400px] sm:h-auto rounded-lg overflow-hidden shadow-xl'>
                            <Image
                                src="/amigos.jpg"
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
                        className='bg-[#F5F5F5] p-6 rounded-lg hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Experiências Memoráveis Sob Medida</h3>
                        <p className='text-[#000000A6] mb-4'>Experiências Memoráveis Sob Medida</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Criação de pacotes turísticos personalizados</li>
                            <li>Roteiros culturais, de aventura ou relaxamento</li>
                            <li>Excursões em grupo com guias especializados</li>
                            <li>Programas temáticos (lua-de-mel, aniversários)</li>
                        </ul>
                        <p>Já planejamos mais de 1.000 pacotes turísticos personalizados!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}