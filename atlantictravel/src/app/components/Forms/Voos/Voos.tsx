"use client"
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Inter } from 'next/font/google';
import { useAirportSearch } from '@/hooks/useAirportSearch';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400'
});

interface Airport {
  iataCode: string;
  cityCode: string;
  name: string;
  cityName: string;
  countryName: string;
}

export default function Voos() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [idaEVolta, setIdaEVolta] = useState(true);
  
  // Estados para origem e destino
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [selectedOrigem, setSelectedOrigem] = useState<Airport | null>(null);
  const [selectedDestino, setSelectedDestino] = useState<Airport | null>(null);
  
  // Refs para os containers das sugestões
  const origemRef = useRef<HTMLDivElement>(null);
  const destinoRef = useRef<HTMLDivElement>(null);
  
  // Usando a hook para busca de aeroportos
  const {
    searchTerm: origemSearchTerm,
    setSearchTerm: setOrigemSearchTerm,
    suggestions: origemSuggestions,
    loading: origemLoading,
    error: origemError
  } = useAirportSearch();
  
  const {
    searchTerm: destinoSearchTerm,
    setSearchTerm: setDestinoSearchTerm,
    suggestions: destinoSuggestions,
    loading: destinoLoading,
    error: destinoError
  } = useAirportSearch();

  // Debug logs
  useEffect(() => {
    console.log('Origem state:', {
      searchTerm: origemSearchTerm,
      suggestions: origemSuggestions,
      loading: origemLoading,
      error: origemError
    });
  }, [origemSearchTerm, origemSuggestions, origemLoading, origemError]);

  useEffect(() => {
    console.log('Destino state:', {
      searchTerm: destinoSearchTerm,
      suggestions: destinoSuggestions,
      loading: destinoLoading,
      error: destinoError
    });
  }, [destinoSearchTerm, destinoSuggestions, destinoLoading, destinoError]);

  // Fechar sugestões ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (origemRef.current && !origemRef.current.contains(event.target as Node)) {
        setOrigemSearchTerm('');
      }
      if (destinoRef.current && !destinoRef.current.contains(event.target as Node)) {
        setDestinoSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOrigemSearchTerm, setDestinoSearchTerm]);

  const handleSelectOrigem = (airport: Airport) => {
    setOrigem(`${airport.cityName} (${airport.iataCode})`);
    setSelectedOrigem(airport);
    setOrigemSearchTerm('');
  };

  const handleSelectDestino = (airport: Airport) => {
    setDestino(`${airport.cityName} (${airport.iataCode})`);
    setSelectedDestino(airport);
    setDestinoSearchTerm('');
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${inter.variable} font-sans`}>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {/* Input de Origem com sugestões */}
          <div className='mb-2 relative' ref={origemRef}>
            <input
              type="text"
              placeholder="Origem"
              value={origem}
              onChange={(e) => {
                setOrigem(e.target.value);
                setOrigemSearchTerm(e.target.value);
              }}
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
            {origemSearchTerm && origemSuggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {origemLoading ? (
                  <div className="px-4 py-2 text-gray-500">Carregando...</div>
                ) : origemError ? (
                  <div className="px-4 py-2 text-red-500">{origemError}</div>
                ) : (
                  origemSuggestions.map((airport) => (
                    <div
                      key={airport.iataCode}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => handleSelectOrigem(airport)}
                    >
                      <div className="font-medium">
                        {airport.cityName} ({airport.iataCode})
                      </div>
                      <div className="text-sm text-gray-600">
                        {airport.name}, {airport.countryName}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Input de Destino com sugestões */}
          <div className='mb-2 relative' ref={destinoRef}>
            <input
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => {
                setDestino(e.target.value);
                setDestinoSearchTerm(e.target.value);
              }}
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
            {destinoSearchTerm && destinoSuggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {destinoLoading ? (
                  <div className="px-4 py-2 text-gray-500">Carregando...</div>
                ) : destinoError ? (
                  <div className="px-4 py-2 text-red-500">{destinoError}</div>
                ) : (
                  destinoSuggestions.map((airport) => (
                    <div
                      key={airport.iataCode}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => handleSelectDestino(airport)}
                    >
                      <div className="font-medium">
                        {airport.cityName} ({airport.iataCode})
                      </div>
                      <div className="text-sm text-gray-600">
                        {airport.name}, {airport.countryName}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Restante do formulário */}
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
              placeholderText="Data de inicio"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Data do fim"
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