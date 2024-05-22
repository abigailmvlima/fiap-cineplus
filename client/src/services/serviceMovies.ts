import movies from 'api/movies';
import { IMovieRegister } from 'domains/interfaces/movies';

const onMovies = async () => {
  const result = await movies.list();
  return result
};

const onMoviesRegister = async (data: IMovieRegister, navigate: any) => {
  const result: any = await movies.register(data);
  // navigate()
};

export default { onMovies, onMoviesRegister };
