import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image'


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700']
})
export default function Gridcolpan() {
    return (
        <div className='py-10'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className={`relative w-full h-96 rounded-4xl bg-cover bg-center bg-no-repeat bg-[url('/gridimg.jpg')] ${inter.variable} font-sans`}>
                    </div>

                    <div >
                        <div className='grid grid-cols-2 gap-5 mb-4'>
                            <div className='relative w-full h-[200px] sm:h-[200px] rounded-lg overflow-hidden shadow-2xl'>
                                <Image
                                    src="/gridimg.jpg"
                                    alt="Equipe Atlantic Travel"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-500'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    priority />
                            </div>
                            <div>
                                <p>Viagens Educativas</p>
                                <p>Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas representam um  momento transformador, uma oportunidade para, ver mais...</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 mb-4'>
                            <div className='relative w-full h-[200px] sm:h-[200px] rounded-lg overflow-hidden shadow-2xl'>
                                <Image
                                    src="/gridimg.jpg"
                                    alt="Equipe Atlantic Travel"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-500'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    priority />
                            </div>
                            <div>
                                <p>Viagens Educativas</p>
                                <p>Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas representam um  momento transformador, uma oportunidade para, ver mais...</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5'>
                            <div className='relative w-full h-[200px] sm:h-[200px] rounded-lg overflow-hidden shadow-2xl'>
                                <Image
                                    src="/gridimg.jpg"
                                    alt="Equipe Atlantic Travel"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-500'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    priority />
                            </div>
                            <div>
                                <p>Viagens Educativas</p>
                                <p>Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas representam um  momento transformador, uma oportunidade para, ver mais...</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
