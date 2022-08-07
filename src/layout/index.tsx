import { Box } from '@mantine/core';
import Router from 'next/router';

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
      {isHide && <h1>Hide Navbar</h1>}
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
