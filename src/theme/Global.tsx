import { Global } from '@mantine/core';

export function GlobalStyles() {
  return (
    <Global
      styles={() => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          height: '100vh',
          overflow: 'hidden',
        },
      })}
    />
  );
}
