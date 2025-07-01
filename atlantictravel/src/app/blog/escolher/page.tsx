'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Ready from '../components/have/Ready'
import Explore from '../components/explora/Explore'

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
                <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">Por Que Escolher uma Agência em<br />
                    Vez de Viajar Por Conta Própria ?
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    Com o crescimento das plataformas digitais, é cada vez mais fácil reservar voos, hotéis e passeios online
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>Mas será que  isso significa que organizar uma viagem por conta própria é sempre a melhor escolha?</motion.p>

            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16 mb-16">
                <motion.div variants={containerVariants} className="relative flex flex-col sm:flex-row justify-center items-end gap-4">
                    <motion.div variants={itemVariants} className="relative w-full sm:w-[460px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
                        <Image
                            src="/imgblog6.jpg"
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
                            <p>
                                Na verdade, viajar com o apoio de uma agência como a Atlantic Travel pode ser não só mais seguro e eficiente,
                                como também mais económico e tranquilo.
                                A seguir, mostramos-te por que motivo recorrer a uma agência profissional continua  a ser a melhor decisão,
                                principalmente para quem valoriza tempo, conforto e qualidade.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Mais Segurança e Menos Risco</p>
                            <p>
                                Uma agência experiente garante que toda a viagem esteja protegida contra imprevistos:
                                Apoio em tempo real em caso de cancelamentos, atrasos ou mudanças de plano;
                                Acompanhamento especializado em caso de extravio de bagagem ou problemas com reservas;
                                Assistência na escolha de seguros adequados ao perfil do viajante.

                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Economia de Tempo e Recursos</p>
                            <p>Procurar, comparar, confirmar, validar… organizar uma viagem exige horas e até dias de pesquisa. Nós simplificamos  tudo:  
                                Acesso direto aos melhores sistemas de reserva (Amadeus, Galileo, Sabre);  
                                Negociação de tarifas exclusivas com hotéis e companhias aéreas; 
                                Roteiros prontos, personalizados e otimizados.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Personalização com Conhecimento Profundo</p>
                            <p>Agências de viagens não vendem apenas bilhetes, vendem experiência e orientação. Na
                                Atlantic Travel, conhecemos os  destinos,
                                as melhores épocas para viajar e os detalhes que fazem a diferença.
                                Oferecemos: Sugestões baseadas no teu perfil (família, casal, estudo, negócios),
                                Roteiros alternativos fora dos circuitos tradicionais, Aconselhamento sobre costumes, cultura e documentação.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Benefícios e Vantagens Exclusivas</p>
                            <p> Ao viajares com a Atlantic Travel, podes aceder a:Condições especiais para grupos,
                                escolas e empresas Fretamento de viaturas ou aeronaves para eventos ou missões empresariais Apoio total para viagens académicas e de incentivo Pagamento faseado em alguns serviçoss.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Apoio Humano Antes, Durante e Depois da Viagem</p>
                            <p>Ao viajares com a Atlantic Travel, podes aceder a: Condições especiais para grupos, escolas e empresas,
                                Fretamento de viaturas ou aeronaves para eventos ou missões empresariais
                                Apoio total para viagens académicas e de incentivo e Pagamento faseado em alguns serviços.</p>
                        </motion.div>


                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">A Diferença Está no Detalhe </p>
                            <p>Viajar por conta própria pode parecer libertador, mas viajar com uma agência profissional é inteligente. E no fim, é isso  que garante uma viagem realmente memorável</p>
                            <p className='mt-2'>Queres fazer a tua próxima viagem conosco?</p>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </motion.div>
            <Ready />
            <Explore />
        </motion.div>
    )
}