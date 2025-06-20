'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] })

export default function Footer() {
    return (
        <footer className={`bg-black text-white py-5 ${inter.className}`}>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10 items-center group">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="transition-transform duration-300">
                    <Image
                        src="/Logotipo_Original-Branco.png"
                        alt="Logo Atlantic Travel"
                        width={400}
                        height={400}
                        className="object-contain"
                    />

                    <div className='flex gap-3 items-center '>
                        <Image
                            src="/icons/facebook.png"
                            alt="Logo Atlantic Travel"
                            width={20}
                            height={20}
                            className="object-contain"
                        />

                        <Image
                            src="/icons/mail.png"
                            alt="Logo Atlantic Travel"
                            width={20}
                            height={20}
                            className="object-contain"
                        />

                        <Image
                            src="/icons/linkedin.png"
                            alt="Logo Atlantic Travel"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="text-sm space-y-3 transition-transform duration-300 cursor-default">
                    <p className="font-semibold text-base">Seu próximo destino começa aqui!</p>
                    <p>Fique por dentro das melhores promoções e roteiros personalizados.</p>
                    <p><strong>Horário Comercial:</strong> Segunda a Sexta-feira (9h00 - 17h00)</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ y: -5 }}
                    className="text-sm space-y-2 transition-transform duration-300 cursor-default">
                    <p><strong>Telefones:</strong> +258-21400398 | +258-823061833 | +258-84313666 | +258-863061835</p>
                    <p><strong>Linha Verde 24h:</strong> 1781 (Mcel e Vodacom)</p>
                    <p><strong>Email:</strong> info@atlantictravel.co.mz</p>
                    <p><strong>Sede:</strong> Av. Paulo Samuel Kamkomba, Nº 986, RC, Flat Nº 1</p>
                    <p><strong>Sucursal:</strong> Av. Da Liberdade Nº 23, Tete</p>
                </motion.div>
            </div>
        </footer>
    )
}
