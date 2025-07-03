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

export default function WhySection() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const benefits = [
        {
            icon: '/icons/time.png',
            title: 'Experiência',
            description: 'Mais de 15 anos operando no mercado nacional e internacional'
        },
        {
            icon: '/icons/cadeado.png',
            title: 'Segurança',
            description: 'Parceiros verificados e assistência completa'
        },
        {
            icon: '/icons/Coins.png',
            title: 'Flexibilidade',
            description: 'Pagamentos ajustados à sua realidade'
        },
        {
            icon: '/icons/headefone.png',
            title: 'Experiência',
            description: 'Atendimento personalizado: Escutamos, orientamos e acompanhamos, 24/7 a sua disposição'
        },
        {
            icon: '/icons/Handshake.png',
            title: 'Segurança',
            description: 'Robustez: Parcerias com mais de 150 entidades (hotéis, companhias aéreas, rent-a-car)'
        },
        {
            icon: '/icons/coracao.png',
            title: 'Flexibilidade',
            description: 'Paixão pelo que fazemos: Porque cada viagem é única'
        }
    ]

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden py-12'>
            <div className='container mx-auto px-4'>

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className={`text-center mb-12 ${playfair.variable} font-playfair`}>
                    <p className="text-3xl md:text-5xl italic font-bold text-[#000]">Porquê escolher a</p>
                    <p className="text-3xl md:text-4xl italic text-[#000]">Atlantic Travel?</p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                    <div className='space-y-4'>
                        {benefits.slice(0, 3).map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className='flex items-center gap-2 border border-[#0871B5] p-4 rounded-full'>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={30}
                                    height={30}
                                    className=''
                                />
                                <div>
                                    <p className='text-sm'>{item.description}</p>
                                    <p className='text-sm'>{item.description.split(' ').slice(7).join(' ')}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        className='flex justify-center h-full'>
                            
                        <div className='relative w-full h-[550px]'>
                            <Image
                                src="/fly.jpg"
                                alt="Viagem Atlantic"
                                fill
                                className='object-cover rounded-lg'
                                sizes="(max-width: 768px) 100vw, 50vw"/>
                        </div>
                    </motion.div>

                    <div className='space-y-4'>
                        {benefits.slice(3, 6).map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 50, opacity: 0 }}
                                animate={isInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className='flex items-center gap-2 border border-[#0871B5] p-2 rounded-full'>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={30}
                                    height={30}
                                    className=''
                                />
                                <div>
                                    <p className='text-sm'>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}