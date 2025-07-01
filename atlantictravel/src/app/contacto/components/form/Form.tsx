'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Form() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const imageAnimation = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            animate="show"
            className='py-20'>
            <div className='max-w-[1440px] mx-auto px-4'>
                <motion.div
                    variants={container}
                    className='grid grid-cols-1 sm:grid-cols-2 '>
                    <motion.div
                        variants={item}
                        className='bg-[#000000] rounded-2xl overflow-hidden'>
                        <div className='text-white px-8 py-10'>
                            <motion.p
                                variants={item}
                                className='text-2xl font-semibold mb-2'>
                                Não hesite em contactar-nos
                            </motion.p>
                            <motion.p
                                variants={item}
                                className='text-sm text-gray-400 mb-6'>
                                O seu email não será publicado. Os campos obrigatórios estão marcados *
                            </motion.p>

                            <motion.form
                                variants={container}
                                className='space-y-4'>
                                <motion.div variants={item}>
                                    <label htmlFor="nome" className='block mb-1 font-medium'>Nome *</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        required
                                        className='w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition'
                                    />
                                </motion.div>

                                <motion.div variants={item}>
                                    <label htmlFor="email" className='block mb-1 font-medium'>Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className='w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition'
                                    />
                                </motion.div>

                                <motion.div variants={item}>
                                    <label htmlFor="mensagem" className='block mb-1 font-medium'>Mensagem *</label>
                                    <textarea
                                        id="mensagem"
                                        rows={5}
                                        required
                                        className='w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-400 transition'
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className='bg-[#0871B5] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#065a93] transition'
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}>
                                    Enviar mensagem
                                </motion.button>
                            </motion.form>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={imageAnimation}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src="/feliz.jpg"
                            alt="Telefone"
                            fill
                            className='object-cover'
                            style={{ transform: 'translateZ(0)' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}