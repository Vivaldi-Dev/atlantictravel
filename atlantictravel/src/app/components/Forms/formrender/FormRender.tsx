'use client'
import React, { useState } from 'react'
import Voos from '../Voos/Voos'
import Activity from '../activity/Activity'
import { AnimatePresence, motion } from 'framer-motion'
import RentCar from '../rentcar/RentCar'

export default function FormRender() {
    const [activeTab, setActiveTab] = useState('voos')

    const renderForm = () => {
        switch (activeTab) {
            case 'voos':
                return <Voos />
            case 'atividades':
                return <Activity />
            case 'rentcar':
                return <RentCar />
            case 'transfer':
                return <p>Formulário de Transfer (em construção)</p>
            default:
                return null
        }
    }

    return (
        <div className='bg-white max-w-[550px] w-full rounded-[45px] shadow p-5 overflow-hidden'>

            <div className='flex items-center justify-between gap-4 border-b-2 border-[rgba(169,169,169,0.31)] pb-3 overflow-x-auto'>
                {['voos', 'atividades', 'rentcar', 'transfer'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-6 rounded-full whitespace-nowrap font-semibold ${
                            activeTab === tab
                                ? 'bg-[rgba(169,169,169,0.31)] text-black'
                                : 'text-[#000000]'
                        }`}
                    >
                        {tab === 'voos' && 'Voos'}
                        {tab === 'atividades' && 'Actividades'}
                        {tab === 'rentcar' && 'Rent-Car'}
                        {tab === 'transfer' && 'Transfer'}
                    </button>
                ))}
            </div>

            <div className='mt-4 min-h-[300px]'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderForm()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
