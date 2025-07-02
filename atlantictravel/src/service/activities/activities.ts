import axios from 'axios'
import Activity from '../../types/activities'

export const getActivity = async (): Promise <Activity[]> => {
  const response = await axios.get<Activity[]>(`api/actidades`);
    return response.data;
}
