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
    <section
      ref={containerRef}
      className={`banner-container ${inter.className}  relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/bgnew.jpg')]`}>
      <div className="banner-overlay absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0" />

      <div className="banner-content relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full py-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="banner-text flex flex-col justify-center">
            <h1 className="banner-title text-yellow-300 text-4xl sm:text-7xl font-bold leading-none ">
              Atlantic  <span className="text-white block"></span>
            </h1>
            <p className="banner-title text-yellow-300 text-4xl sm:text-7xl font-bold leading-none ">Travel LDA.</p>
            <p className="text-white block text-sm font-semibold mb-10"> O planeamento Personalizado e Seguro da sua Viajem </p>

            <div className="banner-description text-white text-base sm:text-[16px]">
              <p>De Ilhas encantadoras, safáris imperdíveis, gastronomia que conquista paladares à  hospitalidade das nossas comunidades, Moçambique é um país feito de experiências únicas. <br />
               Proporcionamos essas experiências com a mesma dedicação com que te levamos ao mundo.
                 <br />
               <span className='font-extrabold'>Simula o orçamento da sua próxima viagem e veja o mundo com outros olhos!</span> </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="banner-form flex justify-center lg:justify-end">
            <FormRender />
          </motion.div>

        </div>
      </div>
    </section>
  );
}