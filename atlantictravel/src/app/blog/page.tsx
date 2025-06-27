'use client'
import React from 'react'
import { Inter } from 'next/font/google';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Gridcolpan from './components/grid/Gridcolpan';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700']
})

export default function Page() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className=''>
            <div className={`relative w-full h-screen max-h-[650px] bg-cover  bg-no-repeat bg-[url('/banner5.jpg')] ${inter.variable} font-sans`}>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 flex items-center justify-start h-full px-14">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={container}>
                        <motion.div variants={item} className='text-white font-semibold text-5xl space-y-2'>
                            <p>Partilhamos</p>
                            <p>histórias, dicas e</p>
                            <p>ideias para te</p>
                            <p>inspirares a viajar</p>
                            <p>melhor</p>
                        </motion.div>

                        <motion.div variants={item} className='mt-3 text-white'>
                            <p>Viajar é aprender, crescer, conectar. No nosso blog, <br />
                                trazemos conteúdos que informam, emocionam e despertam <br />
                                aquela vontade de fazer as malas.</p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className='mt-5'
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <div className='mt-5'>
                                <div className="flex items-center space-x-2 bg-white p- rounded-xl relative">
                                    <div className='bg-[#F9D423] p-4 rounded-l-xl'>
                                        <Search className="w-5 h-5 text-gray-500" />
                                    </div>

                                    <input type="text" placeholder="Pesquisar..." className="outline-none" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Gridcolpan />
        </div>
    )
}