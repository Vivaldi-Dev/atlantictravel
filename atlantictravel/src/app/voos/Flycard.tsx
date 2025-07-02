"use client";
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { Briefcase, ChevronLeft, ChevronRight, ChevronDown, Sliders, X, Plane } from 'lucide-react';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400',
});

interface Flight {
  id: string;
  airline: string;
  departure: {
    airport: string;
    city: string;
    country: string;
    time: string;
  };
  arrival: {
    airport: string;
    city: string;
    country: string;
    time: string;
  };
  price: string;
  duration: string;
  stops: number;
}

type SortOption = 'price' | 'duration' | 'departure';

interface FlycardProps {
  flights: Flight[];
  loading: boolean;
  error?: string | null;
}

const RESULTS_PER_PAGE = 5;

export default function Flycard({ flights = [], loading = false, error = null }: FlycardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    airlines: [] as string[],
    maxPrice: '',
    stops: null as number | null,
    sortBy: 'price' as SortOption,
  });

  const allAirlines = Array.from(new Set(flights.map(flight => flight.airline)));

  const filteredFlights = flights.filter(flight => {
    if (filters.airlines.length > 0 && !filters.airlines.includes(flight.airline)) {
      return false;
    }

    if (filters.maxPrice) {
      const flightPrice = parseFloat(flight.price.replace('R$', '').replace('.', '').replace(',', '.'));
      const maxPrice = parseFloat(filters.maxPrice);
      if (flightPrice > maxPrice) {
        return false;
      }
    }

    if (filters.stops !== null && flight.stops !== filters.stops) {
      return false;
    }

    return true;
  });

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (filters.sortBy === 'price') {
      const priceA = parseFloat(a.price.replace('R$', '').replace('.', '').replace(',', '.'));
      const priceB = parseFloat(b.price.replace('R$', '').replace('.', '').replace(',', '.'));
      return priceA - priceB;
    } else if (filters.sortBy === 'duration') {
      return a.duration.localeCompare(b.duration);
    } else {
      return a.departure.time.localeCompare(b.departure.time);
    }
  });

  const totalPages = Math.ceil(sortedFlights.length / RESULTS_PER_PAGE);
  const paginatedResults = sortedFlights.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAirline = (airline: string) => {
    setFilters(prev => {
      if (prev.airlines.includes(airline)) {
        return {
          ...prev,
          airlines: prev.airlines.filter(a => a !== airline)
        };
      } else {
        return {
          ...prev,
          airlines: [...prev.airlines, airline]
        };
      }
    });
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      airlines: [],
      maxPrice: '',
      stops: null,
      sortBy: 'price'
    });
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      sortBy: e.target.value as SortOption
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (loading) {
    return (
      <div className={`min-h-[60vh] flex flex-col items-center justify-center ${inter.variable}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-700">Buscando voos disponíveis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`max-w-5xl mx-auto px-4 py-10 ${inter.variable}`}>

        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <strong className="font-medium">Erro!</strong> {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (

    <div>

      <div className="bg-[#e6e1dc] flex justify-center mt-20 px-4 p-8">


        <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6 ">
          <div className="flex space-x-3 mb-4 text-sm font-semibold">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-medium">
              Round Trip
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center relative">

            <div>

              <div className="text-sm border p-2 border-gray-400 rounded">
                <span className="block text-gray-400">From</span>
                <span className="font-medium text-gray-800">JNB - Johannesburg</span>
              </div>

            </div>
            

            <div className="text-sm border p-2 border-gray-400 rounded">
              <span className="block text-gray-400">To</span>
              <span className="font-medium text-gray-800">MPM - Maputo</span>
            </div>

            <div className="text-sm border p-2 border-gray-400 rounded">
              <span className="block text-gray-400">Departure</span>
              <span className="font-medium text-gray-800">15 Jul 2025</span>
            </div>

            <div className="text-sm border p-2 border-gray-400 rounded">
              <span className="block text-gray-400">Arrival</span>
              <span className="font-medium text-gray-800">16 Jul 2025</span>
            </div>

            <div className="text-sm border p-2 border-gray-400 rounded">
              <span className="block text-gray-400">Passengers and Class</span>
              <span className="font-medium text-gray-800">1 Traveller, Economy</span>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm">
              Edit Search
            </button>
          </div>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-20 ${inter.variable} font-sans`}>

        <div className="flex flex-col md:flex-row gap-6">
          <div className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Filtros</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden text-gray-500 hover:text-gray-700">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Preço máximo</h3>
                  <input
                    type="number"
                    placeholder="R$"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Companhias aéreas</h3>
                  <div className="space-y-2">
                    {allAirlines.map(airline => (
                      <div key={airline} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`airline-${airline}`}
                          checked={filters.airlines.includes(airline)}
                          onChange={() => toggleAirline(airline)}
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <label htmlFor={`airline-${airline}`} className="ml-2 text-sm">
                          {airline}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Escalas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="stops-any"
                        name="stops"
                        checked={filters.stops === null}
                        onChange={() => setFilters({ ...filters, stops: null })}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="stops-any" className="ml-2 text-sm">
                        Qualquer número
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="stops-0"
                        name="stops"
                        checked={filters.stops === 0}
                        onChange={() => setFilters({ ...filters, stops: 0 })}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="stops-0" className="ml-2 text-sm">
                        Voos diretos
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="stops-1"
                        name="stops"
                        checked={filters.stops === 1}
                        onChange={() => setFilters({ ...filters, stops: 1 })}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="stops-1" className="ml-2 text-sm">
                        1 escala
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Ordenar por</h3>
                  <select
                    value={filters.sortBy}
                    onChange={handleSortChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="price">Menor preço</option>
                    <option value="duration">Menor duração</option>
                    <option value="departure">Horário de partida</option>
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Voos Disponíveis</h1>
                  <p className="text-gray-600 mt-1">
                    {filteredFlights.length} resultados encontrados
                    {flights.length !== filteredFlights.length && (
                      <span className="text-gray-400"> (de {flights.length} no total)</span>
                    )}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                    <Sliders size={16} />
                    <span>Filtros</span>
                  </button>

                  <div className="relative">
                    <select
                      value={filters.sortBy}
                      onChange={handleSortChange}
                      className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                      <option value="price">Menor preço</option>
                      <option value="duration">Menor duração</option>
                      <option value="departure">Horário de partida</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {(filters.airlines.length > 0 || filters.maxPrice || filters.stops !== null) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {filters.airlines.map(airline => (
                    <span
                      key={airline}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {airline}
                      <button
                        onClick={() => toggleAirline(airline)}
                        className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500">
                        <X size={12} />
                      </button>
                    </span>
                  ))}

                  {filters.maxPrice && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Até R$ {filters.maxPrice}
                      <button
                        onClick={() => setFilters({ ...filters, maxPrice: '' })}
                        className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-500">
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  {filters.stops !== null && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {filters.stops === 0 ? 'Voos diretos' : `${filters.stops} escala${filters.stops > 1 ? 's' : ''}`}
                      <button
                        onClick={() => setFilters({ ...filters, stops: null })}
                        className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-purple-400 hover:bg-purple-200 hover:text-purple-500">
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Limpar todos
                  </button>
                </div>
              )}
            </div>

            {filteredFlights.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Plane className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Nenhum voo encontrado</h3>
                <p className="mt-1 text-gray-500">Tente ajustar seus critérios de busca.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {paginatedResults.map((flight) => (
                    <div key={flight.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-5">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Image
                                  src="/lam_logo.png"
                                  alt={`Logo ${flight.airline}`}
                                  width={40}
                                  height={40}
                                  className="object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {flight.airline}
                                </h3>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${flight.stops === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                  {flight.stops === 0 ? 'Voo Direto' : `${flight.stops} escala${flight.stops > 1 ? 's' : ''}`}
                                </span>
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="flex items-center justify-between">
                                <div className="text-left">
                                  <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
                                  <div className="text-xs text-gray-500">{flight.departure.airport}</div>
                                </div>

                                <div className="mx-4 flex-1 text-center">
                                  <div className="text-xs text-gray-500">{flight.duration}</div>
                                  <div className="relative mt-1">
                                    <div className="border-t-2 border-gray-200 w-full"></div>
                                    <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-blue-500"></div>
                                    <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-blue-500"></div>
                                  </div>
                                </div>

                                <div className="text-right">
                                  <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
                                  <div className="text-xs text-gray-500">{flight.arrival.airport}</div>
                                </div>
                              </div>

                              <div className="mt-1 text-xs text-gray-500 text-center">
                                {flight.departure.city}, {flight.departure.country} → {flight.arrival.city}, {flight.arrival.country}
                              </div>
                            </div>
                          </div>

                          <div className="sm:w-48 flex flex-col justify-between">
                            <div className="text-right">
                              <div className="flex items-center justify-end gap-1 text-sm text-gray-600 mb-1">
                                <Briefcase size={14} className="text-gray-400" />
                                <span>1 Bagagem</span>
                              </div>
                              <div className="text-xl font-bold text-blue-600">{flight.price}</div>
                            </div>
                            <button className="mt-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all">
                              Selecionar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-1 px-4 py-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      <ChevronLeft size={16} />
                      <span>Anterior</span>
                    </button>

                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-1 px-4 py-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      <span>Próxima</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>


  );
}