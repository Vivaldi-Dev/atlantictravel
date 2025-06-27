'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function Gridtwo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='w-full py-8 bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='grid grid-cols-1 sm:grid-cols-2 gap-10'
                >
                    {[{
                        src: "/vilanculos.jpg",
                        title: "O Que Levar na Mala para uma Aventura em Vilanculos ou Inhaca?",
                        text: "Sol, mar, natureza intocada e cultura vibrante, Vilanculos e a Ilha da Inhaca são dois dos destinos costeiros mais encantadores de Moçambique. Se estás a planejar uma"
                    }, {
                        src: "/couple.jpg",
                        title: "Como as Viagens Podem Reforçar a Cultura Corporativa",
                        text: "Mais do que uma pausa na rotina, as viagens em equipa têm o poder de transformar a cultura interna de uma organização. Ao sair do ambiente formal do escritório, os colaboradores"
                    }].map((item, i) => (
                        <motion.div key={i} className="flex flex-col">
                            <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-300'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col justify-between mt-3">
                                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-600 line-clamp-3">{item.text}</p>
                                <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
