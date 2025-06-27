import React from 'react'

export default function Have() {
    return (
        <div className='bg-[#0871B5] p-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <p className='text-[#FFF700] font-semibold text-4xl leading-none'>Tens uma história de</p>
                        <p className='text-[#FFF700] font-semibold text-4xl'>viagem com a Atlantic?</p>
                        <div className='mt-2  text-white'>
                            <p>Queres partilhar a tua experiência ou ver a tua foto publicada no nosso mural digital?</p>
                            <p>Envia para: <span className='font-semibold'>blog@atlantictravel.co.mz</span></p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-end'>
                            <div className='bg-[#FFFDFD] p-4 rounded-full text-black w-fit'>
                                <p className='text-center font-semibold text-sm'> A tua experiência pode inspirar <br />
                                    o  próximo viajante!</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
