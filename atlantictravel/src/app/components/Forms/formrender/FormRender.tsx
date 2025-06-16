import React from 'react'
import Voos from '../Voos/Voos'

export default function FormRender() {
    return (
        <div className='bg-white max-w-[550px] w-full rounded-[45px] shadow p-5 overflow-hidden'>
            <div className='flex items-center justify-between gap-4 border-b-2 border-[rgba(169,169,169,0.31)] pb-3 overflow-x-auto'>
                <div className="py-2 px-6 bg-[rgba(169,169,169,0.31)] rounded-full whitespace-nowrap">
                    <p className="font-semibold text-[#000000]">Voos</p>
                </div>

                <div className="py-2 px-6 rounded-full whitespace-nowrap">
                    <p className="font-semibold text-[#000000]">Actividades</p>
                </div>

                <div className="py-2 px-6 rounded-full whitespace-nowrap">
                    <p className="font-semibold text-[#000000]">Rent-Car</p>
                </div>

                <div className="py-2 px-6 rounded-full whitespace-nowrap">
                    <p className="font-semibold text-[#000000]">Transfer</p>
                </div>
            </div>
            <div className='mt-4'>
                <Voos />
            </div>
        </div>
    )
}