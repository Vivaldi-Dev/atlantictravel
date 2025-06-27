'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Banners() {
  return (
    <div className='bg-[#F9D423] py-12 px-4 sm:px-8'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              <span className='block'>Tudo o que precisas.</span>
              <span className='block'>Um só lugar.</span>
            </h2>
            <p className='text-lg md:text-xl mb-6 md:mb-0'>
              Explora o nosso site, fala com um dos nossos consultores e<br />
              descobre como podemos tornar a tua próxima viagem mais<br />
              simples, mais leve e mais inesquecível
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-end'>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='font-semibold text-sm py-3 px-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all'>
              Simular orçamento
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='font-semibold text-sm py-3 px-6 bg-[#FFF700] rounded-full shadow-md hover:shadow-lg transition-all'>
              Pacotes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='font-semibold text-sm py-3 px-6 bg-[#FFF700] rounded-full shadow-md hover:shadow-lg transition-all'>
              Contactar agora
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}