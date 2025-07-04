"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface RentData {
  pickupDate: string;
  returnDate: string;
  levantamento: string;
  devolucao: string;
  passageiros: string;
}

interface RentContextType {
  rentData: RentData;
  setRentData: (data: RentData) => void;
}

const RentContext = createContext<RentContextType | undefined>(undefined);

export const RentProvider = ({ children }: { children: ReactNode }) => {
  const [rentData, setRentData] = useState<RentData>({
    pickupDate: "",
    returnDate: "",
    levantamento: "",
    devolucao: "",
    passageiros: "0",
  });

  return (
    <RentContext.Provider value={{ rentData, setRentData }}>
      {children}
    </RentContext.Provider>
  );
};

export const useRent = () => {
  const context = useContext(RentContext);
  if (!context) {
    throw new Error("useRent deve ser usado dentro de um RentProvider");
  }
  return context;
};
