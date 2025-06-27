'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
})


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ContactLayout() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='w-full py-8 bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden'>
            <div className={`container mx-auto px-4 ${inter.className}`}>
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <motion.div 
                        variants={item}
                        className='bg-white p-8 rounded-xl'>
                        <p className='font-semibold text-lg mb-2'>Canais de atendimento rápido</p>
                        <p className='text-sm'>Ligue grátis: 82/84 1781</p>
                        <p className='mb-4 text-sm'>Tel: +258 82 3061 833 / 84 3136 666</p>

                        <p className='mt-2 font-semibold mb-4'>Fala com um consultor agora</p>
                        <p className='text-sm'>🔘 Iniciar conversa no WhatsApp</p>
                        <p className='text-sm'>🔘 Agendar reunião</p>
                    </motion.div>

                    <motion.div 
                        variants={item}
                        className='bg-[#0871B538] p-8 rounded-xl'>
                        <p className='font-semibold text-lg mb-2'>Maputo</p>
                        <p className='text-sm'>Tel.+258-21400398, </p>
                        <p className='text-sm'>Fax: +258-21400401</p>
                        <p className='text-sm'>Cel: +258-823061833 / +258-84313666 /</p>
                        <p className='text-sm'>+258863061835.</p>

                        <p className='mt-5 text-sm'>Av. Paulo Samuel Kamkomba, No. 986, RC, Flat No. 1</p>
                    </motion.div>

                    <motion.div 
                        variants={item}
                        className='bg-white p-8 rounded-xl'>
                        <p className='font-semibold text-lg mb-2'>Tete</p>
                        <p className='text-sm'>Telefax. +258 25224495 /+258</p>
                        <p className='text-sm'>843116714 / +258 873216000</p>
                        <p className='mt-5 text-sm'>Av. Da Liberdade nº 23, Tete</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}