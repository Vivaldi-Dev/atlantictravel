import axios from 'axios';
import { Car } from '../types/rentService';

export const getRents = async (): Promise<Car[]> => {
  const response = await axios.get<Car[]>(`api/cars`);
  return response.data;
};

export const findCarByName = async (model: string): Promise<Car[]> => {
  const response = await axios.get<Car[]>('/api/cars/find' , {
    params:{model},
  });
  return response.data
}



