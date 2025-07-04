"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";  // para redirecionar
import { useTrip } from "@/context/TripContext";  // importa o contexto

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

export default function Activity() {
  const router = useRouter();
  const { setTripData } = useTrip();

  const [destino, setDestino] = useState("");
  const [crianca, setCrianca] = useState(0);
  const [adulto, setAdulto] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [idaEVolta, setIdaEVolta] = useState(true);
  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setTripData({
      destino,
      crianca,
      adulto,
      startDate,
      endDate,
      idaEVolta,
    });

    setLoading(false);  
    router.push("/resumo");  
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${inter.variable} font-sans`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>

          <div className="mb-2">
            <input
              type="number"
              min={0}
              placeholder="Criança"
              value={crianca}
              onChange={(e) => setCrianca(Number(e.target.value))}
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>

          <div className="mb-2">
            <input
              type="number"
              min={1}
              placeholder="Adulto"
              value={adulto}
              onChange={(e) => setAdulto(Number(e.target.value))}
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <DatePicker
              selected={startDate ?? undefined}
              onChange={(date) => setStartDate(date)}
              placeholderText="Data de ida"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div>
            <DatePicker
              selected={endDate ?? undefined}
              onChange={(date) => setEndDate(date)}
              placeholderText="Data de volta"
              className="mt-1 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0871B5] bg-[#D9D9D975]"
              dateFormat="dd/MM/yyyy"
              disabled={!idaEVolta}
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

        <button
          type="submit"
          disabled={loading}
          className={`text-white font-semibold bg-[#0871B5] w-full rounded-full p-4 flex justify-center items-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            "Simular Orçamento"
          )}
        </button>
      </form>
    </div>
  );
}
