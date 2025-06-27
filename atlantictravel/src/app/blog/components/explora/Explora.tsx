import Image from 'next/image'
import React from 'react'

export default function Explora() {
    return (
        <div className='p-8'>
            <div className='container mx-auto px-4'>
                <p className='text-center text-3xl'> Explora o <span className='bg-[#F9D423] p-1 text-black'>nosso conteúdo</span> </p>
                <div className=' flex justify-center items-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-40 mt-10'>
                        <div className='flex items-center gap-4'>
                            <p>Ver últimos artigos</p>
                            <Image
                                src="/icons/folha.png"
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            Ver pacotes recomendados
                            <Image
                                src="/icons/start.png"
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className=''>Enviar uma história</p>
                            <Image
                                src="/icons/seta.png"
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
