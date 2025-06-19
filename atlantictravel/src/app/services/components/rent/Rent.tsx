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
            className={`bg-gradient-to-b from-[#fff]  relative overflow-hidden py-16 ${inter.variable} font-sans`}>
            className={`bg-gradient-to-b from-[#fff]  relative overflow-hidden py-16 ${inter.variable} font-sans`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className='text-center'>

                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className='bg-white p-6 rounded-lg  hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Rent-a-Car</h3>
                        <p>Liberdade para Explorar Seu Destino</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Aluguel de veículos de diversas categorias</li>
                            <li>Seguros completos incluídos</li>
                            <li>Entrega e recolha em locais combinados</li>
                            <li>Frota moderna e bem mantida</li>
                        </ul>
                        <p>Tarifas especiais para clientes Atlantic Travel!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='flex justify-center h-full -mt-10'>
                        <div className='relative w-full h-[400px] sm:h-auto rounded-lg overflow-hidden shadow-xl'>
                            <Image
                                src="/womem.jpg"
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
                        className='bg-white p-6 rounded-lg hover:shadow-xl transition-all'>
                        <h3 className='text-black font-bold text-xl mb-4'>Fretamento de Aeronaves </h3>
                        <p className='text-[#000000A6] mb-4'>Viagens Exclusivas e Sob Medida</p>
                        <ul className="list-disc pl-5 text-[#000000A6]">
                            <li>Charter de aviões executivos e helicópteros</li>
                            <li>Voos privados para grupos e empresas</li>
                            <li>Roteiros personalizados e horários flexíveis</li>
                            <li>Soluções para emergências médicas</li>
                        </ul>
                        <p>Experiência em operações de fretamento há mais de 10 anos!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}