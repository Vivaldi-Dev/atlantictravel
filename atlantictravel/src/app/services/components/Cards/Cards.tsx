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

export default function Cards() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={`bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden py-16 ${inter.variable} font-sans`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-24'>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className={`text-3xl md:text-4xl mb-4 font-bold`}>
                        Nossos Serviços
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-lg max-w-3xl mx-auto">
                        <p>Ao longo da nossa existência, facilitamos milhares de serviços turísticos, consolidando-nos</p>
                        <p>como uma das agências mais experientes de Moçambique.</p>
                    </motion.div>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white p-6 rounded-lg  hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Reservas de Viagens</h3>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Planificação completa de roteiros de viagem</li>
                            <li>Organização logística de todos os elementos da viagem</li>
                            <li>Acompanhamento contínuo antes, durante e após a viagem</li>
                            <li>Assistência personalizada 24/7</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='flex justify-center h-full -mt-10'>
                        <div className='relative w-full h-[400px] sm:h-auto rounded-lg overflow-hidden shadow-xl'>
                            <Image
                                src="/hotel.jpg"
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
                        className='bg-white p-6 rounded-lg hover:shadow-xl transition-all'
                    >
                        <h3 className='text-black font-bold text-xl mb-4'>Passagens Aéreas</h3>
                        <p className='text-[#000000A6] mb-4'>Nacionais e Internacionais com as Melhores Tarifas</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Emissão de bilhetes aéreos para voos domésticos e internacionais</li>
                            <li>Acesso a tarifas promocionais exclusivas</li>
                            <li>Reservas em classe económica, executiva e primeira classe</li>
                            <li>Gestão de milhas e programas de fidelidade</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}