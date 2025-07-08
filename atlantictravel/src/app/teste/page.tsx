import React from 'react'

export default function page() {
    return (
        <div className='bg-gradient-to-b from-[#B2DEE1] to-[#fff] relative overflow-hidden py-40'>
            <div className='container mx-auto px-4'>
                <div className=''>
                    <div className='p-6 bg-[#0871B5] rounded-t-2xl ' />
                    <div className='grid grid-cols-1 sm:grid-cols-5  bg-[#E2E2E24F] min-h-[80px]'>
                        <div className=' border-r-2 h-full border-[#00000057] '>
                            <div>
                                <p className='text-sm text-[#000000A6] px-4 text-center p-4'>Origem</p>
                                <div className='p-6 bg-[#FAF8F8AD] w-full'>
                                    <p className='text-center'>JNB - Johannesburg</p>
                                </div>
                            </div>

                        </div>

                        <div className='border-r-2 h-full border-[#00000057] '>
                            <div>
                                <p className='text-sm text-[#000000A6] px-4 text-center p-4'>Destino</p>
                                <div className='p-6 bg-[#FAF8F8AD] w-full'>
                                    <p className='text-center'>MPM - Maputo</p>
                                </div>
                            </div>

                        </div>

                        <div className='border-r-2 h-full border-[#00000057] '>
                            <div>
                                <p className='text-sm text-[#000000A6] px-4 text-center p-4'>Hora da partida</p>
                                <div className='p-6 bg-[#FAF8F8AD] w-full'>
                                    <p className='text-center'> 15 Jul 2025 </p>
                                </div>
                            </div>

                        </div>

                        <div className=' border-r-2 h-full border-[#00000057] '>
                            <div>
                                <p className='text-sm text-[#000000A6] px-4 text-center p-4'>Chegada</p>
                                <div className='p-6 bg-[#FAF8F8AD] w-full'>
                                    <p className='text-center'>16 Jul 2025</p>
                                </div>
                            </div>

                        </div>

                        <div className='  h-full '>
                            <div>
                                <p className='text-sm text-[#000000A6] px-4 text-center p-4'>Passageiro e classe</p>
                                <div className='p-6 bg-[#FAF8F8AD] w-full'>
                                    <p className='text-center'>1 Traveller, Economy</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
