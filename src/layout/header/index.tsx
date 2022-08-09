import { Box } from '@mantine/core';
import React from 'react';
import { useStyles } from './headerStyles';
import Navbar from './Navbar';
import RightSection from './RightSection';

const Header: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.header}>
      <Navbar />
      <RightSection />
    </Box>
  );
};
export default Header;
