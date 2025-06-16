"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400'
});

export default function Voos() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [idaEVolta, setIdaEVolta] = useState(true);


  return (
    <div className={`max-w-4xl mx-auto p-6 ${inter.variable} font-sans`}>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className='mb-2'>
            <input
              type="text"
              placeholder="Origem"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>

          <div className='mb-2'>
            <input
              type="text"
              placeholder="Destino"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>

          <div className='mb-2'>
            <input
              type="number"
              min={0}
              placeholder="Criança"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>

          <div className='mb-2'>
            <input
              type="number"
              min={1}
              placeholder="Adulto"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="dd/mm/aaa"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="dd/mm/aaaa"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
            />
          </div>
        </div>

        <div className="flex items-center gap-6 mb-4 mt-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={idaEVolta}
              onChange={() => setIdaEVolta(true)}
              className="accent-[#0871B5]"
            />
            Ida e Volta
          </label>

          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={!idaEVolta}
              onChange={() => setIdaEVolta(false)}
              className="accent-[#0871B5]"
            />
            Só Ida
          </label>
        </div>

        <button className='text-white font-semibold bg-[#0871B5] w-full rounded-full p-4'>
          Simular Orçamento
        </button>


      </form>
    </div>
  );
}