"use client"
import Image from 'next/image'

import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';


export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='max-w-[1640px] mx-auto bg-white shadow p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <Image
                            src="/logo.png"
                            alt="Descrição da imagem"
                            width={100}
                            height={100}
                            className='w-[100px] h-[70px]'
                        />

                    </div>

                    <div className='hidden md:block'>
                        <ul className="flex gap-6 text-gray-700 font-medium">
                            <li>
                                <Link href="/" className="text-[#0871B5] font-semibold text-nowrap text-sm">Início</Link>
                            </li>
                            <li>
                                <Link href="/sobre-nos" className="text-[#0871B5] font-semibold text-nowrap text-sm">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[#0871B5] font-semibold text-nowrap text-sm">Serviços</Link>
                            </li>
                            <li>
                                <Link href="/pacotes" className="text-[#0871B5] font-semibold text-nowrap text-sm">Pacotes Turísticos</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-[#0871B5] font-semibold text-nowrap text-sm">Blog & Inspiração</Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-[#0871B5] font-semibold text-nowrap text-sm">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden lg:flex items-center gap-4 p-4 rounded-full bg-[#FFF700] '>
                        <Image
                            src="/telefone1.png"
                            alt="Descrição da imagem"
                            width={20}
                            height={20}
                        />
                        <p className='text-sm font-semibold text-[#0871B5]'>Ligue grátis: 82 / 84 1781</p>
                    </div>

                    <button
                        className='md:hidden mr-4 text-2xl text-[#0871B5]'
                        onClick={toggleSidebar}>
                        {isSidebarOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
                <div className='p-4 flex justify-between items-center border-b'>
                    <Image
                        src="/logo.png"
                        alt="Descrição da imagem"
                        width={80}
                        height={56}
                        className='w-[80px] h-[56px]'
                    />
                    <button
                        className='text-2xl text-[#0871B5]'
                        onClick={toggleSidebar}
                    >
                        <FiX />
                    </button>
                </div>
                <ul className="p-4 space-y-4">
                    <li>
                        <Link href="/" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Início</Link>
                    </li>
                    <li>
                        <Link href="/sobre" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Sobre Nós</Link>
                    </li>
                    <li>
                        <Link href="/servicos" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Serviços</Link>
                    </li>
                    <li>
                        <Link href="/pacotes" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Pacotes Turísticos</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Blog & Inspiração</Link>
                    </li>
                    <li>
                        <Link href="/contacto" className="block text-[#0871B5] font-semibold py-2" onClick={toggleSidebar}>Contacto</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4 p-4 m-4 rounded-full bg-[#FFF700]'>
                    <Image
                        src="/telefone1.png"
                        alt="Descrição da imagem"
                        width={20}
                        height={20}
                    />
                    <p className='text-sm font-semibold text-[#0871B5] '>Ligue grátis: 82 / 84 1781</p>
                </div>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    )
}