import { useState, useEffect } from 'react';
import axios from 'axios';

interface Airport {
  iataCode: string;
  cityCode: string;
  name: string;
  cityName: string;
  countryName: string;
}

interface LocationAPIResponse {
  iataCode: string;
  name: string;
  address?: {
    cityCode?: string;
    cityName?: string;
    countryName?: string;
  };
}

export const useAirportSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('useEffect triggered with searchTerm:', searchTerm);
    
    if (searchTerm.length < 2) {
      console.log('Search term too short, clearing suggestions');
      setSuggestions([]);
      return;
    }

    const fetchAirports = async () => {
      console.log('Starting fetch for:', searchTerm);
      setLoading(true);
      setError(null);

      try {
        console.log('Making API request...');
        const response = await axios.get('/api/search', {
          params: {
            keyword: searchTerm,
            view: 'FULL'
          }
        });

        console.log('API response:', response.data);

        if (Array.isArray(response.data)) {
          const formattedAirports = response.data.map((location: LocationAPIResponse): Airport => ({
            iataCode: location.iataCode,
            cityCode: location.address?.cityCode || '',
            name: location.name,
            cityName: location.address?.cityName || '',
            countryName: location.address?.countryName || ''
          })); // <-- Este era o parêntese que faltava
          console.log('Formatted airports:', formattedAirports);
          setSuggestions(formattedAirports);
        } else {
          const errorMsg = 'Formato de dados inesperado da API';
          console.error(errorMsg, response.data);
          setError(errorMsg);
        }

      } catch (err: unknown) {
        console.error('Erro na busca de aeroportos:', err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro ao buscar aeroportos');
        }
      } finally {
        console.log('Fetch completed, setting loading to false');
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchAirports, 300);
    return () => {
      console.log('Cleaning up previous timeout');
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    loading,
    error
  };
};
