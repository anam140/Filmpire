import { getMovies } from '@/service/movie.service';
import { IMovies } from '@/types';
import { Grid } from '@mantine/core';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Error from 'next/error';
import { GetServerSideProps } from 'next/types';
import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  const { data: popular_movies } = useQuery<IMovies, Error>(
    ['popular-movies'],
    getMovies,
  );

  return (
    <div>
      <Grid gutter="xl" mt={20}>
        {popular_movies?.data.movies.map((movie) => (
          <Grid.Col
            span={4}
            key={movie.id}
            sx={{
              position: 'relative',
              width: '100%',
              height: 300,
            }}
          >
            <Image
              src={movie.large_cover_image}
              alt={movie.title_english}
              layout="fill"
              objectFit="cover"
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['popular-movies'], getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
