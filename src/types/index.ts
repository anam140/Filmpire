import { IconType } from 'react-icons';

export interface IMenu {
  title: string;
  items: IMenuItems[];
}

export interface IMenuItems {
  link: string;
  label: string;
  icon: IconType;
}

export interface IMovies {
  status: string;
  status_message: string;
  data: IMoviesData;
}

export interface IMoviesData {
  limit: number;
  movie_count: number;
  page_number: number;
  movies: IMoviesList[];
}

export interface IMoviesList {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  torrents: ITorent[];
  url: string;
  year: number;
  yt_trailer_code: string;
}

export interface ITorent {
  date_uploaded: string;
  date_uploaded_unix: number;
  hash: string;
  peers: number;
  quality: string;
  seeds: number;
  size: string;
  size_bytes: number;
  type: string;
  url: string;
}
