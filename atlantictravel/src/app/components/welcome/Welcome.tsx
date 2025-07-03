'use client'

import React from 'react';
import { Inter } from 'next/font/google';
import { motion, useInView } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export default function Welcome() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`welcome-container ${inter.className} bg-gradient-to-b from-cyan-100 to-white py-16 px-6 sm:px-8`}
    >
      <div className="welcome-header text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="welcome-title text-3xl sm:text-4xl font-bold text-gray-800"
        >
          Bem-vindo à Atlantic<br />Travel, Lda.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="welcome-description mt-8 text-base sm:text-[16px] text-gray-700 ">
          <p>Com mais de 15 anos transformando sonhos em experiências memoráveis.</p>
          <p>Ajudamos milhares de viajantes a descobrir destinos, viver culturas e</p>
          <p>colecionar histórias, dentro e fora de Moçambique.</p>
        </motion.div>
      </div>

      <div className="welcome-cards container mx-auto mt-16 mb-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Como membros da IATA e da AVITUM,",
              content: [
                "",
                "reforçamos o nosso compromisso com padrões internacionais de qualidade.",
                ""
              ]
            },
            {
              title: "Ao longo da nossa história, conquistamos a confiança de milhares de viajantes",
              content: [
                "e reconhecimento de instituições de",
                "referência. Garantimos profissionalismo,",
                "segurança e excelência em cada passo da",
                "sua jornada."
              ]
            },
            {
              title: "Do bilhete ao regresso, planeamos contigo,",
              content: [
                "dos destinos mais próximos",
                "às aventuras internacionais, temos",
                "soluções à sua medida. Do primeiro",
                "contacto ao pós-viagem, estamos",
                "sempre ao seu lado."
              ]
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="welcome-card bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow">
              <h3 className="card-title font-bold text-gray-800 ">{card.title}</h3>
              <div className="card-content text-gray-600 ">
                {card.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}