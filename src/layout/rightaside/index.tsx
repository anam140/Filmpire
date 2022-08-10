import Genres from '@/components/genres';
import Search from '@/components/search';
import { Box } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';

const RightSideBar: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Search />
      <Genres />
    </Box>
  );
};
export default RightSideBar;
