'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Reembolsos() {
    return (
        <div className='py-10'>
            <div className='container mx-auto px-4 sm:px-24 mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-12 gap-2'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className='col-span-12 sm:col-span-5'>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className='relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl -mt-5'>
                            <Image
                                src="/small.jpg"
                                alt="Serviços de hotelaria Atlantic Travel"
                                fill
                                className='object-cover hover:scale-105 transition-transform duration-500'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 700px"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className='col-span-12 sm:col-span-4'>
                        <div className='p-8 bg-[#0871B538] rounded-lg flex flex-col justify-center h-full'>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='text-2xl font-bold mb-4 text-[#0871B5]'>
                                Gestão de Reembolsos
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className='text-xl mb-6'>
                                Recupere o Valor de Bilhetes Não Utilizados
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className='list-disc pl-5 space-y-3 mb-6'>
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className='flex items-start'>
                                    <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                    <span>Processamento de reembolsos aéreos</span>
                                </motion.li>
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className='flex items-start'>
                                    <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                    <span>Gestão de créditos com companhias</span>
                                </motion.li>
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className='flex items-start'>
                                    <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                    <span>Assessoria em políticas de cancelamento</span>
                                </motion.li>
                                <motion.li
                                    whileHover={{ x: 5 }}
                                    className='flex items-start'>
                                    <span className='inline-block w-2 h-2 bg-[#0871B5] rounded-full mt-2 mr-2'></span>
                                    <span>Acompanhamento até a restituição</span>
                                </motion.li>
                            </motion.ul>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className='text-sm italic font-medium'>
                                Taxa de sucesso de 90% em processos de reembolso!
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}