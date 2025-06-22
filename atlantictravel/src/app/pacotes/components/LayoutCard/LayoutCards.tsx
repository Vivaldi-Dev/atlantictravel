'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
})


export default function LayoutCards() {
    return (
        <div className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 relative'>
                    <div className='relative w-full h-[500px] sm:h-[450px] rounded-lg overflow-hidden shadow-2xl'>
                        <Image
                            src="/slimiling.jpg"
                            alt="Equipe Atlantic Travel"
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-500'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            priority
                        />
                    </div>

                    <div className='relative z-10'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`${inter.variable} font-sans}`}>
                            <p className='text-lg font-semibold mb-2'>Nossa equipe</p>
                            <div className='mb-5'>
                                <p>Nossa equipe e idealiza cada roteiro ao  <br />
                                    detalhe pensando em ti e na tua segurança para <br />
                                    que a tua única preocupação seja aproveitar. <br />
                                    Oferecemos viagens nacionais e internacionais <br />
                                    com serviços completos:</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-6 bg-[#0871B5] shadow-lg rounded-2xl w-full sm:w-[80%]  sm:-ml-15 relative z-20'>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#F9D423]'>
                                        <Image
                                            src="/icons/HouseLine.png"
                                            alt="Ícone de alojamento"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-white font-medium">Alojamento</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#F9D423]'>
                                        <Image
                                            src="/icons/PoliceCar.png"
                                            alt="Ícone de transporte"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-white font-medium">Transporte</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#F9D423]'>
                                        <Image
                                            src="/icons/Files.png"
                                            alt="Ícone de transporte"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-white font-medium">Documentação</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#F9D423]'>
                                        <Image
                                            src="/icons/PersonSimpleSwim.png"
                                            alt="Ícone de transporte"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-white font-medium">Actividades</p>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='h-12 w-12 flex items-center justify-center rounded-full bg-[#F9D423]'>
                                        <Image
                                            src="/icons/Handshake2.png"
                                            alt="Ícone de transporte"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-white font-medium">Apoio tota</p>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}