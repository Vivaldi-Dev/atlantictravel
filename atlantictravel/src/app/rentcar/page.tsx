"use client";

import React, { useState } from 'react';
import { useRents } from '@/hooks/useRents';
import Image from 'next/image';

const Page = () => {
  const { rents, loading, error } = useRents();
  const categories = ['Todos', 'Luxo', 'SUV', 'Van', 'Picape', 'Ônibus'];
  const [expandedCarId, setExpandedCarId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCarId(expandedCarId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Conheça Nossa Frota</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o veículo perfeito para sua viagem entre nossos modelos premium
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar veículo..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <select className="px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center my-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-blue-600 text-sm">Carregando veículos...</p>
          </div>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rents.map((car) => (
            <div key={car.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={`https://api.panoramatours.co.mz${car.image}`}
                  alt={car.model}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{car.model}</h3>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {car.category || 'Van'}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{car.description.split('Inclui:')[0]}</p>

                {expandedCarId === car.id && (
                  <div className="mb-4 transition-all duration-300">
                    <h4 className="font-semibold text-gray-700 mb-2">Inclui:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {car.description
                        .split('Inclui:')[1]
                        ?.split('\n')
                        .filter(item => item.trim() !== '')
                        .map((item, index) => (
                          <li key={index} className="text-sm">
                            {item.replace('•', '').trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">(5)</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleExpand(car.id)}
                      className="px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {expandedCarId === car.id ? 'Menos detalhes' : 'Mais detalhes'}
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <nav className="flex items-center gap-1">
            <button className="px-3 py-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
              &lt;
            </button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">3</button>
            <button className="px-3 py-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Page;