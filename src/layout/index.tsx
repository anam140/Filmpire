import { Box, Grid } from '@mantine/core';
import Sidebar from './sidebar';
import Header from './header';

import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Sidebar />
        <Grid
          grow
          sx={{
            width: '100%',
            height: '100vh',
          }}
          gutter="xl"
        >
          <Grid.Col span={8}>
            <Header />
            {children}
          </Grid.Col>
          <Grid.Col span={4}>
            <h4>second Sidebar</h4>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
