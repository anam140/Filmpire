import { IMoviesList } from '@/types';
import { Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import React from 'react';

const PRIMARY_COL_HEIGHT = 300;

interface IProps {
  movies: IMoviesList[] | undefined;
}

const MoviesList: React.FC<IProps> = ({ movies }) => {
  console.log('🚀 ~ file: index.tsx ~ line 12 ~ movies', movies);
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  return (
    <>
      <SimpleGrid
        cols={2}
        spacing="xs"
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </>
  );
};
export default MoviesList;
