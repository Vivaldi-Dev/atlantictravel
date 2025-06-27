import { getRents } from "@/service/rentService";
import { Car } from "@/types/rentService";
import { useEffect, useState } from "react";

export const useRents = () => {
    const [rents, SetRents] = useState<Car[]>([]);
    const [loading, setLonging] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRents = async () => {
            try {
                const data = await getRents();
                SetRents(data);
            } catch (err) {
                console.log('Erro ao buscar alugueres:', err); 
                setError('Erro ao buscar dados de aluguer');
            } finally {
                setLonging(false);
            }
        };
        fetchRents();
    }, []);


    return { rents, loading, error }
};