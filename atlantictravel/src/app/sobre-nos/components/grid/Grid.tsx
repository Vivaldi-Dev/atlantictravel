'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    variable: '--font-playfair-italic',
})

export default function Grid() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div
            ref={ref}
            className={`w-full py-8 bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden mt-16 ${playfair.variable} font-sans`}>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className='mb-10'>


                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-20 items-start'>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className='border-[#0871B5] border p-4 rounded-2xl mb-4 cursor-pointer shadow-md'>

                            <div className='flex gap-4'>
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    className='w-12 h-12 p-2 rounded-full bg-[#EECE2B] flex items-center justify-center'>
                                    <Image
                                        src="/icons/aviaop.png"
                                        alt="Ícone de avião"
                                        width={20}
                                        height={20}
                                    />
                                </motion.div>

                                <div>
                                    <p className='font-bold text-black text-sm'>O que nos move?</p>
                                    <div className='text-[#000000A6] text-sm'>
                                        <p>Acreditamos que cada viagem é única, e cada cliente também. Por isso, criamos soluções à medida de cada história, com pacotes que respeitam o teu ritmo,
                                            orçamento e estilo de vida. Mais que levar-te a um destino, queremos </p>

                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className='border-[#0871B5] border-1 p-4 rounded-2xl mb-4 bg-[#EECE2B2E]'>
                            <div className='flex gap-4'>
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    className='w-12 h-12  rounded-full bg-[#EECE2B] flex items-center justify-center'>
                                    <Image
                                        src="/icons/MicrosoftTeamsLogo.png"
                                        alt="Ícone de equipe"
                                        width={30}
                                        height={40} />
                                </motion.div>
                                <div>
                                    <p className='font-bold text-black text-sm'>A nossa equipa</p>
                                    <div className='text-[#000000A6]'>
                                        <p>A Atlantic Travel é constituída por pessoas que  amam o que fazem.  Contamos com consultores experientes,  emissores técnicos, gestores operacionais e  motoristas dedicados, todos alinhados com o  nosso compromisso com a excelência. <br /> “Acreditamos no poder de uma boa viagem. Uma que  transforma. Que aproxima. Que renova.” Equipe AtlanticTrave</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.10 }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className='border-[#0871B5] border-1 p-4 rounded-2xl mb-4'>
                            <div className='flex gap-4'>
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    className='w-12 h-12 rounded-full bg-[#EECE2B] flex items-center justify-center'>
                                    <Image
                                        src="/icons/planta.png"
                                        alt="Ícone de sustentabilidade"
                                        width={20}
                                        height={20}
                                    />
                                </motion.div>
                                <div>
                                    <p className='font-bold text-black text-sm'>Turismo com consciência</p>
                                    <div className='text-[#000000A6]'>
                                        <p>Valorizamos as nossas raízes e promovemos o turismo nacional de forma</p>
                                        <p>responsável. Incentivamos a descoberta do que é nosso, respeitando o meio</p>
                                        <p>ambiente e as comunidades locais. Acreditamos que o turismo pode ser uma</p>
                                        <p>ferramenta de educação, inclusão e desenvolvimento.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[520px]">
                        <Image
                            src="/luxo.jpg"
                            alt="Viagem de luxo"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: isInView ? 0.3 : 0 }}
                            className="relative w-full h-[520px]">
                            <Image
                                src="/luxo.jpg"
                                alt="Viagem Atlantic"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw" />

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: isInView ? 0.6 : 0 }}
                                className="absolute -top-20 -left-10 w-[300px] h-[250px] shadow-2xl">

                                <Image
                                    src="/viajem.jpg"
                                    alt="Viagem Atlantic"
                                    fill
                                    className="object-cover rounded-2xl " />
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}