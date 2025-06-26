import React from 'react'
import Image from 'next/image'

export default function GridLyout() {
    return (
        <div className='container mx-auto px-4 py-20'>
            <div className='flex justify-between items-center mb-2'>
                <div className='py-2 px-6 bg-[#F9D423]'>
                    <p>Pacotes Nacionais</p>
                </div>

                <div>
                    <p className='underline text-[#0871B5]'>Ver tudo</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/pick.jpg"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Chigenguela</p>
                        <p className='font-semibold '>126.520,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>

                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/pick2.png"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Praia de Chizavane</p>
                        <p className='font-semibold '>80.010,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>

                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/pick3.png"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Chigenguela</p>
                        <p className='font-semibold '>126.520,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>

                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/pick4.jpg"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Chigenguela</p>
                        <p className='font-semibold '>126.520,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>

                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/pick4.png"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Chigenguela</p>
                        <p className='font-semibold '>126.520,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>

                <div className='relative w-full h-[500px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl'>
                    <Image
                        src="/freepik.png"
                        alt="Equipe Atlantic Travel"
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-500'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority />

                    <div className='absolute top-2 left-2 bg-[#00000085] px-4 py-2 rounded-2xl text-white'>
                        <p className='text-sm font-semibold'>Chigenguela</p>
                        <p className='font-semibold '>126.520,00 MNZ</p>
                        <p className='underline text-white leading-none'>Detalhe</p>
                    </div>

                    <div className='flex items-center gap-5 absolute left-2 bottom-2'>
                        <button className='py-2 px-5 rounded-full text-[#0871B5] bg-[#F9D423] text-sm font-semibold'>Reservar</button>

                        <button className='py-2 px-4 rounded-full bg-[#D9D9D9] text-[#000000A6] text-sm font-bold'>Falar com consultor</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
