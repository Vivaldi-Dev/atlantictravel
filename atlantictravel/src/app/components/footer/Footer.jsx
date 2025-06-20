'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] })

export default function Footer() {
    return (
        <footer className={`bg-black text-white py-5 ${inter.className} relative`}>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10 items-center group ">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="transition-transform duration-300 flex flex-col">
                    <div className="mb-4">
                        <Image
                            src="/Logotipo_Original-Branco.png"
                            alt="Logo Atlantic Travel"
                            width={400}
                            height={400}
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

                    <div className='flex gap-3 items-center mt-4'>
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
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="text-sm space-y-2 transition-transform duration-300 flex justify-center">

                <ul className="space-y-1 flex gap-4 mb-15">
                    <li>
                        <Link href="/" className="hover:text-[#00BFFF] transition-colors duration-200">Início</Link>
                    </li>
                    <li>
                        <Link href="/sobre-nos" className="hover:text-[#00BFFF] transition-colors duration-200">Sobre Nós</Link>
                    </li>
                    <li>
                        <Link href="/servicos" className="hover:text-[#00BFFF] transition-colors duration-200">Serviços</Link>
                    </li>
                    <li>
                        <Link href="/pacotes" className="hover:text-[#00BFFF] transition-colors duration-200">Pacotes Turísticos</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-[#00BFFF] transition-colors duration-200">Blog Inspiração</Link>
                    </li>
                    <li>
                        <Link href="/contacto" className="hover:text-[#00BFFF] transition-colors duration-200">Contacte-nos</Link>
                    </li>
                </ul>
            </motion.div>
            <div className='text-center p-4 bg-[#A9A9A94F] w-full absolute bottom-0'>
                <p className='text-[#FFFFFF]'>Copyright 2025 Atlantic Travel Lda.| Design By marketing department Atlantic Travel</p>
            </div>

        </footer>
    )
}
