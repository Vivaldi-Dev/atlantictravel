'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

export default function Cards() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      className={`w-full py-8 bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden  ${inter.variable} font-sans`}>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl sm:mt-10 font-bold mb-4">
            A Atlantic Travel, Lda
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg max-w-3xl mx-auto">
            Somos uma agência moçambicana com alcance nacional e internacional, reconhecida pela nossa dedicação, profissionalismo e inovação no setor. Membro oficial da IATA (International Air Transport Association) e da AVITUM, operamos com os mais altos padrões globais.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:mt-25'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: isInView ? 0 * 0.15 : 0 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 relative rounded-lg hover:shadow-lg transition-all h-[300px]">
            <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-[#FFF700] flex justify-center items-center">
              <Image
                src="/icons/bucula.png"
                alt="Ícone Missão"
                width={20}
                height={20}
              />
            </div>

            <h3 className='font-bold text-black text-xl mb-4'>Missão:</h3>

            <div className="space-y-1 text-black">
              <p>Proporcionar serviços turísticos de alta qualidade, intermediando produtos com ética profissional, transparência e respeito às necessidades dos nossos clientes.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: isInView ? 0.15 : 0 }}
            whileHover={{ y: -10 }}
            className="bg-[#0871B538] p-8 relative rounded-lg hover:shadow-lg transition-all h-[300px]">
            <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-[#FFF700] flex justify-center items-center">
              <Image
                src="/icons/olho.png"
                alt="Ícone Visão"
                width={20}
                height={20}
              />
            </div>

            <h3 className='font-bold text-black text-xl mb-4'>Visão:</h3>

            <div className="space-y-1 text-[#000000A6]">
              <p>Ser reconhecida como agência de referência em Moçambique e além-fronteiras, destacando-nos pela excelência no
                planeamento de viagens e contribuição para o desenvolvimento do turismo.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: isInView ? 0.3 : 0 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 relative rounded-lg hover:shadow-lg transition-all h-[300px]">
            <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-[#FFF700] flex justify-center items-center">
              <Image
                src="/icons/dymond.png"
                alt="Ícone Valores"
                width={20}
                height={20}
              />
            </div>

            <h3 className='font-bold text-black text-xl mb-4'>Valores:</h3>

            <div className="space-y-1 text-[#000000A6]">
              <p> <span className='font-semibold'>Competência:</span>  Equipe treinada e atualizada com as melhores práticas do mercado.</p>
              <p>  <span className='font-semibold'>Responsabilidade:</span> Cumprimos prazos e garantimos segurança em todos os serviços. </p>
              <p> <span className='font-semibold'>Flexibilidade:</span> Adaptamo-nos às necessidades específicas de cada cliente.</p>
              <p className=''> <span className='font-semibold'>Eficiência:</span> Soluções rápidas e inteligentes para imprevistos.</p>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}