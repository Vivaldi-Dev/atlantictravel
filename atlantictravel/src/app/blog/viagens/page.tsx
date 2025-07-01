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
                    Como as Viagens Podem Reforçar a
                    <br />
                    Cultura Corporativa
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold '>
                    Mais do que uma pausa na rotina, as viagens em equipa têm o poder de transformar a cultura
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    interna de uma  organização. Ao sair do ambiente formal do escritório, os colaboradores têm a
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    oportunidade de se conhecerem melhor,  fortalecerem laços, superarem desafios juntos e
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    acima de tudo desenvolverem o espírito de pertença.
                </motion.p>
            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16">
                <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center items-end gap-4">

                    <motion.div variants={itemVariants} className="relative w-full sm:w-[460px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
                        <Image
                            src="/imgblog8.jpg"
                            alt="Imagem 2"
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
                            <p className="font-semibold text-start mb-2">O Impacto das Viagens no Clima Organizacional</p>
                            <p>Estudos apontam que empresas que investem em experiências partilhadas fora do ambiente
                                de trabalho apresentam:  Maior coesão de equipa, Redução de conflitos internos,
                                Melhoria na comunicação interpessoal, Aumento da motivação e do sentido de pertença.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p>
                                Na Atlantic Travel, desenhamos experiências que vão muito além da logística. Criamos viagens corporativas com  propósito,
                                adaptadas ao perfil da organização e aos objetivos estratégicos da equipa.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Tipos de Viagens Corporativas que Organizamos</p>
                            <p className='font-semibold'>Retiro Corporativo (Corporate Retreat)</p>
                            <p>Ideal para reflexão estratégica, planejamento anual, integração de equipas e descompressão dos líderes.</p>
                            <p className=''>Team Building com Aventura</p>
                            <p>Atividades como safáris, trilhas ou esportes náuticos, combinadas com dinâmicas de grupo para estimular a liderança,  colaboração e criatividade.
                            </p>
                        </motion.div>


                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Educação Que Vai Além da Sala de Aula </p>
                            <p>
                                Educação Que Vai Além da Sala de Aula  Se és responsável por uma escola, grupo de estudantes ou centro de formação,
                                fala connosco.
                                Criamos pacotes  personalizados que unem segurança, conhecimento e momentos inesquecíveis.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p>Solicita já a proposta da tua instituiçãoco.</p>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}