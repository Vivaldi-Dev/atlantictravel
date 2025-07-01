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
                <motion.p variants={itemVariants} className="text-center font-semibold text-4xl mb-4">O Que Levar na Mala para uma<br />
                    Aventura em Vilanculos ou Inhaca?
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>
                    Sol, mar, natureza intocada e cultura vibrante, Vilanculos e a Ilha da Inhaca são dois dos
                </motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>destinos costeiros mais  encantadores de Moçambique. Se estás a planejar uma viagem para</motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>uma dessas pérolas do Índico, saber exatamente o  que levar pode fazer toda a diferença para</motion.p>
                <motion.p variants={itemVariants} className='font-semibold'>desfrutar de cada momento com conforto e segurança.</motion.p>
            </motion.div>

            <motion.div variants={fadeInVariants} className="container mx-auto px-4 mt-16">
                <motion.div variants={containerVariants} className="relative flex flex-col sm:flex-row justify-center items-end gap-4">
                    <motion.div variants={itemVariants} className="relative w-full sm:w-[460px] h-[320px] rounded-xl overflow-hidden shadow-lg" >
                        <Image
                            src="/imgblog7.jpg"
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
                                Na Atlantic Travel, organizamos dezenas de viagens para esses
                                destinos e reunimos aqui um guia prático e atualizado
                                para te ajudar a preparar a tua mala como um verdadeiro viajante experiente.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Roupas Leves e Adequadas ao Clima</p>
                            <p>
                                O clima costeiro é quente e húmido na maior parte do ano.
                                O ideal é apostar em roupas leves, confortáveis e que  sequem facilmente.
                                Leva na mala: T-shirts, tops e vestidos leves,Calções ou bermudas, Roupa de banho (1 ou 2 biquínis/fatos de banho),
                                Camisa de manga comprida leve para proteção solar,
                                Roupa mais fresca para jantar fora ou passeio noturno, Chapéu ou boné e óculos de sol.
                            </p>
                            <p className='mt-2'>Dica extra: Leva pelo menos uma muda de roupa extra na mala de mão para prevenir imprevistos.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Calçado Funcional</p>
                            <p>Andar em areia, caminhar em trilhos ou explorar mercados locais exige um bom par de sapatos.  Sugestões: Chinelos ou sandálias confortáveis,
                                Ténis leve para caminhadas, Sapatos de borracha ou sapatos aquáticos (ótimos para passeios de barco ou snorkeling).</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Proteção Solar e Cuidados Pessoais</p>
                            <p>A exposição solar pode ser intensa, especialmente se
                                fores fazer passeios de barco ou passar o dia na praia.  Essenciais: Protetor solar FPS 50+, Bálsamo labial com proteção solar, Repelente de insetos, Toalhitas húmidas e álcool gel, Hidratante corporal e pós-sol (aloe vera é excelente).
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Equipamentos e Acessórios Úteiss </p>
                            <p>Não te esqueças dos itens que fazem diferença na tua experiência: Câmera ou smartphone com boa capacidade de fotografia, Power bank (bateria portátil), Mochila de dia para passeios  ,Garrafa de água reutilizável e Snorkel ou máscara de mergulho (opcional, mas útil).
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Kit de Primeiros Socorros Básico</p>
                            <p>Apesar de Vilanculos e Inhaca terem acesso a serviços de saúde, é sempre bom viajar prevenido.
                                Sugestões de itens:   Analgésicos e antitérmicos, Antihistamínicos (para picadas ou alergias),
                                Remédios para enjoo e digestão, Pensos rápidos, desinfetante e gaze. </p>
                        </motion.div>


                        <motion.div variants={itemVariants} className='mb-4'>
                            <p className="font-semibold text-start mb-2">Documentos e Dinheiro</p>
                            <p>Mesmo dentro do país, mantém a organização dos teus documentos:   Cartão de identificação ou passaporte (em caso de voos)   Cartão de vacinação (para algumas hospedagens)   Cartão bancário e um pouco de dinheiro em espécie   Comprovativo de reservas (digital e impresso).
                            </p>
                            <p className='mt-2'>Viaja Leve, Mas com Intenção</p>
                            <p className='mt-2'>A chave para uma viagem tranquila é estar preparado sem exagerar. Leva apenas o essencial, mas garante que não te  falte conforto, proteção e liberdade de movimento. </p>

                        </motion.div>

                        <motion.div variants={itemVariants} className='mb-4'>
                            <p>E se precisares de ajuda para organizar a tua ida para Vilanculos ou Inhaca, a Atlantic Travel trata de tudo para ti: voos,  transfers, alojamento e experiências incríveis.</p>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}