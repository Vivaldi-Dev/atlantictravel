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
        <div className='py-8'>
            <div className='container mx-auto px-4'>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${inter.variable}`}>
                    <div className={`relative w-full h-full rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('/gridimg.jpg')] font-sans`}>

                        <div className="absolute inset-0 bg-black/20 rounded-2xl z-0"></div>

                        <div className="min-h-[calc(150px*3+1rem*2)] relative z-10">
                            <div className='absolute p-3 bottom-0 text-white'>
                                <p className='font-semibold text-4xl'>Moçambique espera por ti</p>
                                <p>
                                    Moçambique é uma terra de contrastes naturais e culturais impressionantes.
                                    Dos recifes de coral do Índico às savanas cheias de vida selvagem, o país abriga...
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="grid gap-4">
                        <div className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg '>
                            <div className='relative w-full h-[150px] rounded-lg overflow-hidden'>
                                <Image
                                    src="/mapico.jpg"
                                    alt="Viagem educativa"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-300'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-base mb-2">Viagens Educativas</h3>
                                <p className="text-xs text-gray-600 line-clamp-3">
                                    Aprender não precisa estar limitado a quatro paredes. Para muitos estudantes, as viagens educativas representam um momento transformador.
                                </p>
                                <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg '>
                            <div className='relative w-full h-[150px] rounded-lg overflow-hidden'>
                                <Image
                                    src="/planear.jpg"
                                    alt="Viagem educativa"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-300'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-base mb-2">Como Planear a Tua Primeira Viagem Internacional com Segurança</h3>
                                <p className="text-xs text-gray-600 line-clamp-3">
                                    Viajar para fora do país pela primeira vez pode parecer um desafio, mas com a preparação certa, pode ser uma das  experiências mais incríveis da tua vida.                                    </p>
                                <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 bg-white p-3 rounded-lg '>
                            <div className='relative w-full h-[150px] rounded-lg overflow-hidden'>
                                <Image
                                    src="/escolher.jpg"
                                    alt="Viagem educativa"
                                    fill
                                    className='object-cover hover:scale-105 transition-transform duration-300'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-base mb-2">Por Que Escolher uma Agência em Vez de Viajar Por Conta Própria?</h3>
                                <p className="text-xs text-gray-600 line-clamp-3">
                                    Com o crescimento das plataformas digitais, é cada vez mais fácil reservar voos, hotéis e passeios online.
                                </p>
                                <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}