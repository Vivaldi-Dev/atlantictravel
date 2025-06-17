'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair-italic',
})

export default function Pacotes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pacotes = [
    {
      id: 1,
      image: "/catalogo.png",
      local: "Chigenguela",
      valor: "126.520,00 MNZ",
      tipo: "Nacionais"
    },
    {
      id: 2,
      image: "/catalogo3.png",
      local: "Bazaruto",
      valor: "145.320,00 MNZ",
      tipo: "Internacionais"
    },
    {
      id: 3,
      image: "/catalogo2.png",
      local: "Inhambane",
      valor: "98.750,00 MNZ",
      tipo: "Nacionais"
    }
  ]

  return (
    <div ref={ref} className='overflow-hidden mb-5 py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-center mb-12 ${playfair.variable} font-playfair`}
        >
          <p className="text-3xl md:text-4xl italic font-bold text-[#000000]">Pacotes Turísticos em Destaque</p>
          <p className="text-3xl md:text-4xl italic font-bold text-[#000000]">da Atlantic Travel</p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {pacotes.map((pacote, index) => (
            <motion.div
              key={pacote.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: isInView ? index * 0.15 : 0 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: isInView ? 0.3 : 0 }}
                  className='absolute -top-7 left-0 z-10 flex items-center gap-2 bg-[#EECE2B] p-1 pr-2  shadow-md'>
                  <Image
                    src="/icons/AirplaneTilt.png"
                    alt="Ícone de avião"
                    width={20}
                    height={20}
                  />
                  <p className='text-sm font-medium'>Pacotes {pacotes[0].tipo}</p>
                </motion.div>
              )}

              <div className='relative w-full h-[450px] overflow-hidden rounded-lg shadow-lg'>
                <Image
                  src={pacote.image}
                  alt={`Pacote ${pacote.local}`}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-white"
                  >
                    <p className="text-lg font-semibold">Descubra {pacote.local}</p>
                    <p className="text-sm">Experiência única com a Atlantic Travel</p>
                  </motion.div>
                </div>
              </div>

              <div className='mt-4 px-2'>
                <p className='text-black font-semibold text-sm'>Local: {pacote.local}</p>
                <p className='font-bold text-[#0871B5] text-lg mt-1'>Valor: {pacote.valor}</p>
              </div>

              <div className='flex items-center gap-4 mt-4 px-2'>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#f5d836" }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-[#EECE2B] px-6 py-2 rounded-full text-[#0871B5] font-semibold text-sm shadow-md'
                >
                  Reservar
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#e0e0e0" }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-[#D9D9D9] px-6 py-2 rounded-full text-[#000000A6] font-semibold text-sm shadow-md'
                >
                  Falar com consultor
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}