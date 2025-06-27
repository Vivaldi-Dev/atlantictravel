import React from 'react'
import { Inter } from 'next/font/google';
import { Search } from 'lucide-react';


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700']
})

export default function page() {
    return (
        <div className=''>
            <div className={`relative w-full h-screen max-h-[650px] bg-cover bg-cente bg-no-repeat bg-[url('/banner5.jpg')] ${inter.variable} font-sans`}>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 flex items-center justify-start h-full px-14">
                    <div>
                        <div className='text-white font-semibold text-5xl'>
                            <p>Partilhamos</p>
                            <p>histórias, dicas e</p>
                            <p>ideias para te</p>
                            <p>inspirares a viajar</p>
                            <p>melhor</p>
                        </div>
                        <div className='mt-3 text-white'>
                            <p>Viajaréaprender, crescer, conectar.Nonossoblog, trazemos <br />
                                conteúdosqueinformam,emocionamedespertamaquela <br />
                                vontadedefazerasmalas.</p>
                        </div>

                        <div className='mt-5'>
                            <div className="flex items-center space-x-2 bg-white p- rounded-xl relative">
                                <div className='bg-[#F9D423] p-4 rounded-l-xl'>
                                    <Search className="w-5 h-5 text-gray-500" />
                                </div>

                                <input type="text" placeholder="Pesquisar..." className="outline-none" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
