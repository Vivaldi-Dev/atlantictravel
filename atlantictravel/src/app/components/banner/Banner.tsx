'use client'

import React from 'react';
import { Inter } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import FormRender from '../Forms/formrender/FormRender';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Banner() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    // Container do banner com imagem de fundo
    <section 
      ref={containerRef}
      className={`banner-container ${inter.className} relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/banner.jpg')]`}
    >
      {/* Overlay escuro para melhor contraste */}
      <div className="banner-overlay absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0" />

      {/* Conteúdo principal */}
      <div className="banner-content relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full py-12">
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="banner-text flex flex-col justify-center"
          >
            <p className="text-sm text-white mb-3">Viagens Internacionais | Viagens Nacionais</p>
            <h1 className="banner-title text-yellow-300 text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Explore <span className="text-white block">o Mundo com</span>
              <span className="text-white block">Confiança</span>
            </h1>
            <div className="banner-description text-white text-base sm:text-lg space-y-2">
              <p>Desde cidades históricas na Europa a aventuras</p>
              <p>na África do Sul, criamos itinerários sob medida</p>
              <p>com voos, hotéis e experiências únicas.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="banner-form flex justify-center lg:justify-end"
          >
            <FormRender />
          </motion.div>
        </div>
      </div>
    </section>
  );
}