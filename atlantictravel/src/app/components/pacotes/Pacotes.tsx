import React from 'react'
import Image from 'next/image'

export default function Pacotes() {
    return (
        <div className='overflow-hidden mb-5'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10'>
                    <p>Pacotes Turísticos em Destaque </p>
                    <p>da Atlantic Travel</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    <div>
                        <div className='relative w-full h-[450px]'>
                            <Image
                                src="/catalogo.png"
                                alt="Viagem Atlantic"
                                fill
                                className='object-cover rounded-lg'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            catalogo3.png
                        </div>
                        <div className='mt-2'>
                            <p className='text-black font-semibold text-sm'>Local: Chigenguela</p>
                            <p className='font-bold'>Valor: 126.520,00 MNZ</p>
                        </div>

                        <div className='flex items-center gap-4 mt-2'>
                            <button className='bg-[#EECE2B] px-4 py-2 rounded-full text-[#0871B5] font-semibold text-sm'>
                                Reservar
                            </button>

                            <button className='bg-[#D9D9D9] px-4 py-2 rounded-full text-[#000000A6] font-semibold text-sm'>
                                Falar com consultor
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='relative w-full h-[450px]'>
                            <Image
                                src="/catalogo3.png"
                                alt="Viagem Atlantic"
                                fill
                                className='object-cover rounded-lg'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                        </div>
                    </div>

                    <div>
                        <div className='relative w-full h-[450px]'>
                            <Image
                                src="/catalogo2.png"
                                alt="Viagem Atlantic"
                                fill
                                className='object-cover rounded-lg'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
