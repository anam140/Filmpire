import axios from 'axios';

const movies = axios.create({
  baseURL: 'https://yts.mx/api/v2/',
});

export const getMovies = async (): Promise<any> =>
  await (
    await movies.get('list_movies.json')
  ).data;
