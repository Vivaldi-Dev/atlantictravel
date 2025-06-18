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

  const cards = [
    {
      id: 1,
      bgColor: 'bg-white',
      iconColor: 'bg-[#EEBA2B]',
      iconSrc: '/icons/bucula.png',
      title: 'Missão:',
      content: [
        'Proporcionar serviços turísticos',
        'de alta qualidade, intermediando',
        'produtos com ética profissional,',
        'transparência e respeito às',
        'necessidades dos nossos',
        'clientes.'
      ]
    },
    {
      id: 2,
      bgColor: 'bg-[#0871B538]',
      iconColor: 'bg-[#EE2B2B]',
      iconSrc: '/icons/olho.png',
      title: 'Visão:',
      content: [
        'Ser reconhecida como agência de',
        'referência em Moçambique e além-',
        'fronteiras, destacando-nos pela excelência',
        'no planeamento de viagens e contribuição',
        'para o desenvolvimento do turismo.'
      ],
      textColor: 'text-[#000000A6]'
    },
    {
      id: 3,
      bgColor: 'bg-white',
      iconColor: 'bg-[#42EE2B]',
      iconSrc: '/icons/dymond.png',
      title: 'Valores:',
      content: [
        'Competência: Equipe treinada e',
        'atualizada com as melhores práticas',
        'do mercado. Responsabilidade:',
        'Cumprimos prazos e garantimos',
        'segurança em todos os serviços',
        'Flexibilidade: Adaptamo-nos às',
        'necessidades específicas de cada',
        'cliente. Eficiência: Soluções rápidas e',
        'inteligentes para imprevistos.'
      ],
      textColor: 'text-[#000000A6]'
    }
  ]

  return (
    <div 
      ref={ref}
      className={`w-full py-8 bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden ${inter.variable} font-sans`}
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            A Atlantic Travel, Lda
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg max-w-3xl mx-auto"
          >
            Somos uma agência moçambicana com alcance nacional e internacional, reconhecida pela nossa dedicação, profissionalismo e inovação no setor. Membro oficial da IATA (International Air Transport Association) e da AVITUM, operamos com os mais altos padrões globais
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10'>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: isInView ? index * 0.15 : 0 }}
              whileHover={{ y: -10 }}
              className={`${card.bgColor} p-8 relative rounded-lg  hover:shadow-lg transition-all min-h-[400px]`}
            >
              <div className={`absolute right-3 top-3 h-10 w-10 rounded-full ${card.iconColor} flex justify-center items-center`}>
                <Image
                  src={card.iconSrc}
                  alt="Ícone"
                  width={20}
                  height={20}
                />
              </div>
              
              <h3 className='font-bold text-black text-xl mb-4'>{card.title}</h3>
              
              <div className={`space-y-1 ${card.textColor || 'text-black'}`}>
                {card.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}