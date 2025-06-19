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

export default function Rent() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={`bg-gradient-to-b from-[#fff] relative overflow-hidden py-16 ${inter.variable} font-sans mt-10 mb-16`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-10'>
                   
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-full'>
                        <h3 className='text-black font-bold text-xl mb-4'>Rent-a-Car</h3>
                        <p className='mb-4'>Liberdade para Explorar Seu Destino</p>
                        <ul className="space-y-3 text-[#000000A6] mb-4">
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Aluguel de veículos de diversas categorias</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Seguros completos incluídos</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Entrega e recolha em locais combinados</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Frota moderna e bem mantida</span>
                            </li>
                        </ul>
                        <p className='text-sm italic'>Tarifas especiais para clientes Atlantic Travel!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='flex justify-center h-full sm:col-span-1 -mt-16'>
                        <div className='relative w-full h-[500px] sm:h-[450px] rounded-lg overflow-hidden shadow-2xl'>
                            <Image
                                src="/womem.jpg"
                                alt="Serviços de transporte Atlantic Travel"
                                fill
                                className='object-cover hover:scale-105 transition-transform duration-500'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-full'>
                        <h3 className='text-black font-bold text-xl mb-4'>Fretamento de Aeronaves</h3>
                        <p className='text-[#000000A6] mb-4'>Viagens Exclusivas e Sob Medida</p>
                        <ul className="space-y-3 text-[#000000A6] mb-4">
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Charter de aviões executivos e helicópteros</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Voos privados para grupos e empresas</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Roteiros personalizados e horários flexíveis</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                <span>Soluções para emergências médicas</span>
                            </li>
                        </ul>
                        <p className='text-sm italic'>Experiência em operações de fretamento há mais de 10 anos!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}