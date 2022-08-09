import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import React from 'react';
import { getMovies } from '@/service/movie.service';
import { Grid, Title } from '@mantine/core';

const index: React.FC = () => {
  const { data: yts } = useQuery(['movies'], getMovies);
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ yts', yts);

  return (
    <div>
      <Title order={3}>Popular Movies</Title>

      <Grid gutter="sm" mt={'20px'}>
        {yts.data.movies.map((movie) => (
          <Grid.Col span={2}>
            <img width="100%" src={movie.large_cover_image} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
export default index;

// This gets called on every request
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movies'], getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
