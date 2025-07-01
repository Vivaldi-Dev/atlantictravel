'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


export default function Explora() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='p-8'>
            <div className='container mx-auto px-4'>
                <motion.p
                    className='text-center text-3xl'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Explora o <span className='bg-[#F9D423] p-1 text-black'>nosso conteúdo</span>
                </motion.p>

                <div className='flex justify-center items-center mt-10'>
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-20'
                    >
                        {[
                            {
                                text: 'Ver últimos artigos',
                                icon: '/icons/folha.png'
                            },
                            {
                                text: 'Ver pacotes recomendados',
                                icon: '/icons/start.png'
                            },
                            {
                                text: 'Enviar uma história',
                                icon: '/icons/seta.png'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className='flex items-center gap-4 justify-center text-center'
                            >
                                <p className="text-sm sm:text-base">{item.text}</p>
                                <Image src={item.icon} alt="icon" width={20} height={20} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
