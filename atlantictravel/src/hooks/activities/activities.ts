"use client"
import { getActivity } from "@/service/activities/activities";
import Activity from '@/types/activities'
import { useEffect, useState } from "react";

export const useActivity = () => {
    const [activity, setActivity] = useState<Activity[]>([]);
    const [loading, setLonging] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchactivity = async () => {

            try {
                const data = await getActivity();
                setActivity(data);
            } catch (err) {
                console.log('Erro ao buscar alugueres:', err);
                setError('Erro ao buscar dados de aluguer');
            } finally {
                setLonging(false);
            }

        };
        fetchactivity();
    }, []);

    return {activity , loading , error}
}