import { IMovie } from '@domain/interfaces/api';
import { IMovieRegister } from '@domain/interfaces/movies';
import { getItem, setItem } from '@utils/storage';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3526';

const list = async (): Promise<IMovie[]> => {
  try {
    const token = await getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response: any = await axios.get(`${API_BASE_URL}/movie`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    
    const movies: IMovie[] = (response?.data as IMovie[]) || [];
    await setItem('movies', JSON.stringify(movies));
    return movies;
  } catch (error) {
    console.error('Failed to fetch movies', error);
    return [];
  }
};

const register = async (movie: IMovieRegister): Promise<IMovie[]> => {
  try {
    const token = await getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response: any = await axios.post(`${API_BASE_URL}/movie`, movie, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const movies: IMovie[] = (response?.data as IMovie[]) || [];
    await setItem('movies', JSON.stringify(movies));
    return movies;
  } catch (error) {
    console.error('Failed to register movie', error);
    return [];
  }
};

export default {
  list,
  register
};
