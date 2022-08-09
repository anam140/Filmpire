import { Box } from '@mantine/core';
import Router from 'next/router';
import Sidebar from './sidebar';

import { ReactNode, useEffect, useState } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isHide, setIsHide] = useState<boolean>(false);

  useEffect(
    () => (Router.pathname !== '/404' ? setIsHide(true) : setIsHide(false)),
    [],
  );

  return (
    <>
      {isHide && (
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Sidebar />
          <Box>{children}</Box>
        </Box>
      )}
    </>
  );
};

export default Layout;
