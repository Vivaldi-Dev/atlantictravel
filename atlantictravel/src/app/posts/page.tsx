'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700']
})

export default function Page() {
  return (
    <div className="py-40">
      <div className={`text-center text-sm ${inter.variable} font-sans`}>
        <p className="text-center font-semibold text-4xl mb-4">Moçambique espera por ti!</p>
        <p>Moçambique é uma terra de contrastes naturais e culturais impressionantes. Dos recifes de coral do Índico às</p>
        <p>savanas cheias de vida selvagem, o país abriga alguns dos destinos mais deslumbrantes e ainda pouco</p>
        <p>explorados do continente africano. Se procuras por lugares que combinam beleza, tranquilidade e autenticidade,</p>
        <p>a Atlantic Travel apresenta-te 5 locais em Moçambique que parecem saídos de um postal:</p>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col sm:flex-row justify-center items-end gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full sm:w-[270px] h-[220px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imgblog.png"
              alt="Imagem 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full sm:w-[260px] h-[320px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imgblog1.png"
              alt="Imagem 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative w-full sm:w-[300px] h-[260px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imgblog3.jpg"
              alt="Imagem 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
