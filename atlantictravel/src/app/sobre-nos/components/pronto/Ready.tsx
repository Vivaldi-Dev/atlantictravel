'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair-italic',
})

export default function Ready() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='bg-[#F9D423] py-12 px-4'>
      <div className='max-w-[1440px] mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}>

            <div className={`${playfair.variable} font-playfair`}>
              <p className="text-2xl md:text-3xl italic font-bold mb-1">Pronto para a sua próxima aventura?</p>
            </div>
            
            <p className="text-base md:text-lg mt-2">
              Simula agora o seu orçamento  ou fala com um dos nossos consultores.
            </p>
            
            <p className="text-sm italic opacity-80">
              Atlantic Travel - O planeamento Personalizado e Seguro da Sua Viagem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center ">

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-4 bg-white shadow-md rounded-full text-black font-semibold whitespace-nowrap'>
              Simular orçamento
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-4 bg-[#FFF700] shadow-md rounded-full text-black font-semibold whitespace-nowrap'>

              Falar com um consultor
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}