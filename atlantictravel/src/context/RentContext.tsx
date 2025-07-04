"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface RentData {
    pickupDate: string;
    returnDate: string
    levantamento:string;
    devolucao:string;
    passageiros:string;
}

interface RentContextType {
    rentData:RentData;
    setRentData: (data:RentData) => void ;
}

const RentContext = createContext <RentContextType | undefined> (undefined);

