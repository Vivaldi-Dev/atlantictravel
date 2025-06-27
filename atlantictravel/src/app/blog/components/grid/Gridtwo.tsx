import React from 'react'
import Image from 'next/image'

export default function Gridtwo() {
    return (
        <div className='w-full py-8 bg-gradient-to-b from-[#fff] to-[#B2DEE1] relative overflow-hidden'>
            <div className='container mx-auto px-4 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    <div>
                        <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
                            <Image
                                src="/vilanculos.jpg"
                                alt="Viagem educativa"
                                fill
                                className='object-cover hover:scale-105 transition-transform duration-300'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="flex flex-col justify-between mt-3">
                            <h3 className="font-bold text-base mb-1">O Que Levar na Mala para uma Aventura em Vilanculos ou Inhaca?</h3>
                            <p className="text-xs text-gray-600 line-clamp-3">
                                Sol, mar, natureza intocada e cultura vibrante, Vilanculos e a Ilha da Inhaca são dois dos destinos costeiros mais  encantadores de Moçambique. Se estás a planejar uma                                 </p>
                            <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                        </div>
                    </div>

                    <div>
                        <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
                            <Image
                                src="/couple.jpg"
                                alt="Viagem educativa"
                                fill
                                className='object-cover hover:scale-105 transition-transform duration-300'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="flex flex-col justify-between mt-3">
                            <h3 className="font-bold text-base mb-1">Como as Viagens Podem Reforçar a Cultura Corporativa</h3>
                            <p className="text-xs text-gray-600 line-clamp-3">
                                Mais do que uma pausa na rotina, as viagens em equipa têm o poder de transformar a cultura interna de uma  organização. Ao sair do ambiente formal do escritório, os colaboradores                            </p>
                            <button className="text-xs text-blue-500 mt-2 text-left">Ver mais...</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
