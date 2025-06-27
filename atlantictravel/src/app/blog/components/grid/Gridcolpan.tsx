import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700']
})

// Variantes de animação
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const imageHover = {
  scale: 1.03,
  transition: { duration: 0.3 }
}

export default function Gridcolpan() {
  return (
    <div className='py-8'>
      <div className='container mx-auto px-4'>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${inter.variable}`}
        >
          {/* Coluna da esquerda - Imagem grande */}
          <motion.div 
            variants={item}
            className={`relative w-full h-full rounded-2xl overflow-hidden font-sans`}
            whileHover={{ scale: 0.99 }}
          >
            <div className="relative w-full h-full min-h-[calc(150px*3+1rem*2)]">
              <Image
                src="/gridimg.jpg"
                alt="Moçambique"
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl z-0"></div>
              
              <motion.div 
                className="absolute p-6 bottom-0 text-white z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className='font-semibold text-3xl sm:text-4xl mb-3'
                  whileHover={{ x: 5 }}
                >
                  Moçambique espera por ti
                </motion.p>
                <motion.p 
                  className='text-sm sm:text-base'
                  whileHover={{ x: 5 }}
                >
                  Moçambique é uma terra de contrastes naturais e culturais impressionantes.
                  Dos recifes de coral do Índico às savanas cheias de vida selvagem, o país abriga...
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Coluna da direita - Itens */}
          <motion.div 
            className="grid gap-4"
            variants={container}
          >
            {/* Item 1 */}
            <motion.div 
              variants={item}
              className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg'
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className='relative w-full h-[150px] rounded-lg overflow-hidden'
                whileHover={imageHover}
              >
                <Image
                  src="/mapico.jpg"
                  alt="Viagem educativa"
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-base mb-2">Viagens Educativas</h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas representam um momento transformador.
                </p>
                <motion.button 
                  className="text-xs text-blue-500 mt-2 text-left"
                  whileHover={{ x: 3 }}
                >
                  Ver mais...
                </motion.button>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div 
              variants={item}
              className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg'
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className='relative w-full h-[150px] rounded-lg overflow-hidden'
                whileHover={imageHover}
              >
                <Image
                  src="/planear.jpg"
                  alt="Planeamento de viagem"
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-base mb-2">Como Planear a Tua Primeira Viagem Internacional com Segurança</h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  Viajar para fora do país pela primeira vez pode parecer um desafio, mas com a preparação certa, pode ser uma das experiências mais incríveis da tua vida.
                </p>
                <motion.button 
                  className="text-xs text-blue-500 mt-2 text-left"
                  whileHover={{ x: 3 }}
                >
                  Ver mais...
                </motion.button>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              variants={item}
              className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg'
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className='relative w-full h-[150px] rounded-lg overflow-hidden'
                whileHover={imageHover}
              >
                <Image
                  src="/escolher.jpg"
                  alt="Agência de viagens"
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="flex flex-col justify-between">
                <h3 className="font-bold text-base mb-2">Por Que Escolher uma Agência em Vez de Viajar Por Conta Própria?</h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  Com o crescimento das plataformas digitais, é cada vez mais fácil reservar voos, hotéis e passeios online.
                </p>
                <motion.button 
                  className="text-xs text-blue-500 mt-2 text-left"
                  whileHover={{ x: 3 }}
                >
                  Ver mais...
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}