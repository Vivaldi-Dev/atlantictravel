"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TripData {
  destino: string;
  crianca: number;
  adulto: number;
  startDate: Date | null;
  endDate: Date | null;
  idaEVolta: boolean;
}

interface TripContextType {
  tripData: TripData;
  setTripData: (data: TripData) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider = ({ children }: { children: ReactNode }) => {
  const [tripData, setTripData] = useState<TripData>({
    destino: '',
    crianca: 0,
    adulto: 1,
    startDate: null,
    endDate: null,
    idaEVolta: true,
  });

  return (
    <TripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip deve ser usado dentro de um TripProvider');
  }
  return context;
};
