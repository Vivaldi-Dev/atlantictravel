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
                <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">Como Planear a Tua Primeira Viagem <br />
                    Internacional com Segurança
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    Viajar para fora do país pela primeira vez pode parecer um desafio, mas com a preparação certa, pode ser uma  </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'></motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    das  experiências mais incríveis da tua vida. Na Atlantic Travel, ajudamos centenas de viajantes a fazerem a </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    sua estreia  internacional com conforto, tranquilidade e apoio total.
                </motion.p>

            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16 mb-16">
                <motion.div variants={containerVariants} className="relative flex flex-col sm:flex-row justify-center items-end gap-4">
                    <motion.div variants={itemVariants} className="relative w-full sm:w-[460px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
                        <Image
                            src="/imgblog5.jpg"
                            alt="Imagem 2"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 250px"
                            priority
                        />
                    </motion.div>

                    <div className={`text-start flex justify-evenly mr-60 mt-8 absolute top-20 -left-44 w-full`}>
                        <div className='bg-[#D9D9D9] p-2 text-sm rounded'>
                            <p>Se estás a planear a tua primeira viagem internacional, este guia vai <br />
                                mostrar-te os passos essenciais para garantir uma  jornada segura <br />
                                organizada e sem surpresas desagradáveis. <br />
                            </p>
                        </div>
                    </div>

                </motion.div>

                <motion.div variants={fadeInVariants} className="flex justify-center mt-8">
                    <motion.div variants={containerVariants} className="max-w-2xl text-sm">
                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2"> Documentos em Dia </p>
                            <p>
                                Antes de qualquer coisa, garante que tens os documentos necessários para viajar: Passaporte válido (pelo menos 6 meses antes da expiração)
                                Visto, caso o país de destino o exija
                                Comprovativos de reserva e bilhetes
                                Certificado internacional de vacinação, como o da febre amarela (quando exigido)
                            </p>
                            <p className='mt-2'>
                                Dica Atlantic: Nós ajudamos com a emissão de passaportes, vistos e orientação documental, evita erros e atrasos  desnecessários.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Planejamento Financeiro</p>
                            <p>
                                Viajar envolve custos, alguns previsíveis, outros não tanto. Planeja o teu orçamento considerando: Bilhetes e alojamento Alimentação Transportes locais Entradas em atrações Câmbio da moeda e possíveis taxas
                            </p>
                            <p className='mt-2'>Leva sempre uma quantia em dinheiro local e um cartão internacional de apoio.</p>
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
            <Ready />
        </motion.div>
    )
}