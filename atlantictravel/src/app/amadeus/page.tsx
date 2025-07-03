import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Users } from "lucide-react";


export default function page() {
    return (
        <div className='bg-gray-300 py-40'>
            <div className='max-w-[1440px] mx-auto px-4 bg-white shadow p-16 rounded-xl'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex flex-1 items-stretch gap-2 border p-2 border-gray-300 rounded'>
                        <FaMapMarkerAlt className="text-gray-500 w-4 h-4" />
                        <div>
                            <p className='text-sm text-gray-500'>From</p>
                            <p className='text-sm text-gray-800'>JNB - Johannesburg, South Africa</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-white">
                        <span className="text-sm text-gray-600">⇄</span>
                    </div>

                    <div className='flex flex-1 items-stretch gap-2 border p-2 border-gray-300 rounded'>
                        <FaMapMarkerAlt className="text-gray-500 w-4 h-4" />
                        <div>
                            <p className='text-sm text-gray-500'>To</p>
                            <p className='text-sm text-gray-800'>MPM - Maputo, Mozambique</p>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center border p-2 border-gray-300 rounded">
                        <div className="flex items-stretch gap-2 pr-4">
                            <FaRegCalendarAlt className="w-4 h-4 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-500">Departure</p>
                                <p className="text-sm text-gray-800">15 Jul 2025</p>
                            </div>
                        </div>

                        <div className="h-10 w-px bg-gray-300 mx-2"></div>

                        <div className="flex items-stretch gap-2 pl-4">
                            <FaRegCalendarAlt className="w-4 h-4 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-500">Arrival</p>
                                <p className="text-sm text-gray-800">16 Jul 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center border p-2 border-gray-300 rounded">
                        <div className='flex items-center gap-2'>
                            <Users className="w-5 h-5 text-gray-500" />
                            <div>
                                <p className="text-xs text-gray-500">Passengers and Class</p>
                                <p className="text-gray-800 text-sm">1 Traveller, Economy</p>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>

    )
}
