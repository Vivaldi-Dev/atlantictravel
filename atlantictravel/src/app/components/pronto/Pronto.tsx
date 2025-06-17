'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair-italic',
})

export default function Pronto() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-[#EECE2B] py-16 px-4'>
      <div className='container mx-auto'>
        <div className={`text-center ${playfair.variable} font-playfair`}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl italic font-bold mb-4">
            Pronto para a tua próxima aventura?
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className='text-base md:text-lg italic mb-8 max-w-2xl mx-auto'>
            Simula agora o teu orçamento online ou fala com um dos nossos consultores.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-10'>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-full text-black font-semibold bg-white shadow-lg hover:shadow-xl transition-all'>
              Simular orçamento
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-full text-black font-semibold bg-white shadow-lg hover:shadow-xl transition-all'>
              Falar com consultor
            </motion.button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm italic opacity-80">
            Atlantic Travel - O planeamento Personalizado e Seguro da Sua Viagem
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}