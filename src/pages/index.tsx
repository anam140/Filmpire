import MoviesList from '@/components/movies';
import { getMovies } from '@/service/movie.service';
import { IMovies } from '@/types';
import { Container } from '@mantine/core';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Error from 'next/error';
import { GetStaticProps } from 'next/types';

const HomePage = () => {
  const { data: yts } = useQuery<IMovies, Error>(['movies-list'], getMovies);

  return (
    <Container size={1280} my="md" fluid>
      <MoviesList movies={yts?.data.movies} />
    </Container>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movies-list'], getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
