'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Ready() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='bg-[#F9D423] p-8'>
            <div className='container mx-auto px-4'>
                <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                    <div className='text-black'>
                        <p className=' font-semibold text-4xl leading-none'>Pronto para a tua próxima </p>
                        <p className=' font-semibold text-4xl'>aventura?</p>
                        <div className='mt-2 '>
                            <p>Simula agora o teu orçamento online ou fala com</p>
                            <p>um dos nossos consultores.</p>
                            <p className='text-sm'> Atlantic Travel - O planeamento Personalizado e Seguro da Sua Viagem</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-end gap-4'>
                            <div className='bg-[#FFFDFD] p-4 rounded-full text-black w-fit'>
                                <p className='text-center font-semibold text-sm'>
                                    Simular orçamento <br />
                                </p>
                            </div>

                            <div className='bg-[#FFF700] p-4 rounded-full text-black w-fit'>
                                <p className='text-center font-semibold text-sm'>
                                    Falar com um consultor
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
