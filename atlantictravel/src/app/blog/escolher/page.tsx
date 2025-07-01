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
                <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">Por Que Escolher uma Agência em<br />
                    Vez de Viajar Por Conta Própria ?
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    Com o crescimento das plataformas digitais, é cada vez mais fácil reservar voos, hotéis e passeios online
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>Mas será que  isso significa que organizar uma viagem por conta própria é sempre a melhor escolha?</motion.p>

            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16">
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
                                Uma agência experiente garante que toda a viagem esteja protegida contra imprevistos:   Apoio em tempo real em caso de cancelamentos, atrasos ou mudanças de plano;  Acompanhamento especializado em caso de extravio de bagagem ou problemas com reservas;  Assistência na escolha de seguros adequados ao perfil do viajante.

                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Seguro de Viagem é Essencial </p>
                            <p>Não arrisques. Um bom seguro de viagem cobre despesas médicas, extravio de bagagem, cancelamentos, acidentes e  outras eventualidades.</p>
                            <p className='mt-2'>A Atlantic Travel oferece planos de seguro personalizados de acordo com o destino e o tipo de viagem.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Organiza Bem a Tua Bagagem</p>
                            <p>
                                Faça uma lista com antecedência: Roupa adequada ao clima do destino Adaptadores de tomada e carregadores  Produtos de higiene pessoal em quantidades permitidas  Cópias digitais e impressas dos teus documentos
                                Menos é mais: evita levar demasiadas malas e escolhe peças versáteis.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Informa-te Sobre o Destino</p>
                            <p>
                                Pesquise sobre:  Cultura e costumes locais, Idioma, Meios de transporte, Locais turísticos e zonas a evitar, Redes de apoio, como consulados ou embaixadas
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Viaja com Apoio de Profissionais </p>
                            <p>Contar com uma agência experiente é a chave para evitar imprevistos. Com a Atlantic Travel, tens acesso a: Consultores dedicados do início ao fim da tua viagem,Reservas confiáveis e seguras, Apoio no planejamento, emissão de documentos, bilhetes e seguros.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p>A Tua Primeira Viagem Deve Ser Memorável, Não Estressante  Pronto para embarcar? Fala já connosco.</p>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}