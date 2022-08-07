import { Global } from '@mantine/core';

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? 'var(--black-clr)'
              : 'var(--gray-clr)',
          color:
            theme.colorScheme === 'dark'
              ? 'var(--text-dark-mode)'
              : theme.black,
          lineHeight: theme.lineHeight,
        },
      })}
    />
  );
}
