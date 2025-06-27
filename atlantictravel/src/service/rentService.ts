import axios from 'axios';
import { Car } from '../types/rentService';


export const getRents = async (): Promise<Car[]> => {
  const response = await axios.get<Car[]>(`api/cars`);
  return response.data;
};
