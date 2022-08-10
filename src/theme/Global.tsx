import { Global } from '@mantine/core';

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          height: '100vh',
          overflowX: 'hidden',
          background:
            theme.colorScheme === 'light' ? theme.colors.gray[0] : 'black',
        },
      })}
    />
  );
}
