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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

export default function Page() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="py-40">
      <motion.div variants={fadeInVariants} className={`text-center text-sm ${inter.variable} font-sans`}>
        <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">
          Moçambique espera por ti!
        </motion.p>
        <motion.p variants={itemVariants}>
          Moçambique é uma terra de contrastes naturais e culturais impressionantes. Dos recifes de coral do Índico às
        </motion.p>
        <motion.p variants={itemVariants}>
          savanas cheias de vida selvagem, o país abriga alguns dos destinos mais deslumbrantes e ainda pouco
        </motion.p>
        <motion.p variants={itemVariants}>
          explorados do continente africano. Se procuras por lugares que combinam beleza, tranquilidade e autenticidade,
        </motion.p>
        <motion.p variants={itemVariants}>
          a Atlantic Travel apresenta-te 5 locais em Moçambique que parecem saídos de um postal:
        </motion.p>
      </motion.div>

      <motion.div  variants={fadeInVariants} className="container mx-auto px-4 mt-16">
        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center items-end gap-4">
          <motion.div variants={itemVariants} className="relative w-full sm:w-[270px] h-[220px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imgblog.png"
              alt="Imagem 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full sm:w-[260px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
            <Image
              src="/imgblog1.png"
              alt="Imagem 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full sm:w-[300px] h-[260px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imgblog3.jpg"
              alt="Imagem 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 250px"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInVariants} className="flex justify-center mt-8">
          <motion.div variants={containerVariants} className="max-w-2xl text-sm">
            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">1. Arquipélago de Bazaruto</p>
              <p>
                Composto por ilhas como Bazaruto, Benguerra e Magaruque, este paraíso natural oferece praias de areia branca,
                mar turquesa e dunas douradas. Ideal para mergulho, passeios de barco e relaxamento total, é um dos destinos
                mais luxuosos e bem preservados de Moçambique.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">Destaques</p>
              <p>
                Snorkeling e mergulho com golfinhos  <br />
                Passeios de dhow tradicional
                <br />
                Resorts ecológicos de luxo
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">2. Praia de Bilene  </p>
              <p>
                A apenas 3 horas de Maputo, Bilene é o local perfeito para uma saída de fim de semana.
                A sua lagoa calma e cristalina é  ideal para famílias, casais e atividades náuticas como caiaque e paddle.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">Destaques</p>
              <p>Água calma e rasa  <br />
                Restaurantes e alojamentos acessíveis
                <br />
                Passeios de barco ao pôr do sol</p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">3. Ilha de Moçambique  </p>
              <p>Património Mundial da UNESCO, esta ilha histórica foi a primeira capital do país e ainda preserva igrejas coloniais,
                fortalezas e ruas de pedra. Combina cultura, arquitetura e hospitalidade local de forma única.  </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">Destaques:</p>
              <p>Fort São Sebastião  <br />
                Museu da Ilha
                <br />
                Experiências culturais autênticas</p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">4. Parque Nacional da Gorongosa  </p>
              <p>Considerado um dos projetos de conservação mais inspiradores da África, o Parque da Gorongosa é um paraíso para os  amantes da vida selvagem. Leões, elefantes, aves raras e muito mais esperam por ti neste santuário ecológico.</p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">Destaques:</p>
              <p>Safáris guiados e eco-lodges<br />
                Observação de aves e fotografia  <br />
                Iniciativas de turismo sustentável </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">5. Ilha da Inhaca </p>
              <p>Perfeita para quem quer fugir da cidade sem ir muito longe. Localizada ao largo de Maputo, Inhaca oferece uma rica  biodiversidade marinha, praias tranquilas e experiências culturais únicas com as comunidades locais.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='mb-4'>
              <p className="font-semibold text-start mb-2">Destaques:</p>
              <p>Mergulho com snorkel em recifes de coral<br />
                Tradições locais e mercados de peixe Ideal para um bate-volta ou fim de semana  Seja para  <br />
                férias em família, viagens românticas ou aventuras culturais, Moçambique tem um destino</p> <br />
              <p>perfeito à tua  espera.</p>
              <p>E a Atlantic Travel está aqui para tornar essa experiência segura, acessível e inesquecível.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}