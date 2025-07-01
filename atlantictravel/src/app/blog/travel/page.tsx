'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Ready from '../components/have/Ready'


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
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mt-40">
            <motion.div variants={fadeInVariants} className={`text-center text-sm ${inter.variable} font-sans`}>
                <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">
                    Viagens Educativas
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    representam um  momento transformador, uma oportunidade para explorar novos territórios, aplicar                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    conhecimentos e vivenciar culturas de  forma imersiva.
                </motion.p>

                <div className={`text-start flex justify-evenly mr-60 mt-8 `}>
                    <div className='bg-[#D9D9D9] p-2 text-sm rounded'>
                        <p>Na Atlantic Travel, somos especialistas em criar experiências de <br />
                            viagem com fins pedagógicos. Acreditamos que o  turismo pode ser <br />
                            também uma ferramenta de educação, desenvolvimento humano e <br />
                            inspiração para o futuro.</p>
                    </div>

                </div>

            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16 mb-16">
                <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center items-end gap-4">

                    <motion.div variants={itemVariants} className="relative w-full sm:w-[460px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
                        <Image
                            src="/imgblog4.jpg"
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
                            <p className="font-semibold text-start mb-2">O Que São Viagens Educativas?</p>
                            <p>
                                São deslocações organizadas com o objetivo de complementar o
                                processo de ensino-aprendizagem. Podem incluir  visitas a patrimônios culturais,
                                ambientes naturais, instituições públicas, museus, fábricas, centros de ciência, entre  outros.  Mais do que lazer, essas viagens proporcionam:
                                Interação social fora do ambiente escolar Observação prática de conteúdos abordados em sala  Estímulo à autonomia, curiosidade e cidadania
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Destinos Mais Procurados em Moçambique  </p>
                            <p>
                                A Atlantic Travel organiza excursões escolares e académicas para os principais pontos de interesse do país:
                                Ilha de Moçambique - História e património cultural
                                Parque Nacional da Gorongosa - Ecossistemas e biodiversidade
                                Maputo e arredores - Visitas a museus, instituições e zonas industriais
                                Bilene e Inhaca - Atividades recreativas e estudos ambientais
                                Chimoio, Tete, Nampula, Zambézia - Roteiros sob medida para escolas regionais

                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Benefícios Para os Alunos</p>
                            <p>
                                Participar de uma viagem com objetivos educativos desenvolve competências como:
                                Espírito de grupo e convivência, Capacidade de observação e análise crítica, Consciência ambiental,
                                social e cultural, Valorização da diversidade e da identidade moçambicana

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
            <Ready />
        </motion.div>
    )
}