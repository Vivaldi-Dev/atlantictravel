'use client'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400'
})

export default function RentCar() {
  const [pickupDate, setPickupDate] = useState<Date | null>(null)
  const [returnDate, setReturnDate] = useState<Date | null>(null)

  return (
    <div className={`max-w-4xl mx-auto p-6 ${inter.variable} font-sans`}>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className='mb-2'>
            <input
              type="text"
              placeholder="Local de levantamento"
              className="mt-1 w-full rounded px-3 py-2 bg-[#D9D9D975] focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
            />
          </div>

          <div className='mb-2'>
            <input
              type="text"
              placeholder="Local de devolução"
              className="mt-1 w-full rounded px-3 py-2 bg-[#D9D9D975] focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
            />
          </div>

          <div className='mb-2'>
            <input
              type="number"
              min={1}
              placeholder="Número de passageiros"
              className="mt-1 w-full rounded px-3 py-2 bg-[#D9D9D975] focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              placeholderText="Data de levantamento"
              className="mt-1 w-full rounded px-3 py-2 bg-[#D9D9D975] focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Data de devolução"
              className="mt-1 w-full rounded px-3 py-2 bg-[#D9D9D975] focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
              dateFormat="dd/MM/yyyy"
              minDate={pickupDate}
            />
          </div>
        </div>

        <button className='text-white font-semibold bg-[#0871B5] w-full rounded-full p-4 mt-4'>
          Simular Orçamento
        </button>
      </form>
    </div>
  )
}
