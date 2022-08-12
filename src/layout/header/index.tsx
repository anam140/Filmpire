import { Box, Container } from '@mantine/core';
import React from 'react';
import { useStyles } from './headerStyles';
import Navbar from './Navbar';
import RightSection from './RightSection';

const Header: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <Box className={classes.header}>
        <Navbar />
        <RightSection />
      </Box>
    </Container>
  );
};
export default Header;
