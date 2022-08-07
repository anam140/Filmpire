import ThemeSwitcher from '@/components/ThemeSwitcher';
import '@fontsource/noto-sans';
import '@fontsource/open-sans';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { GlobalStyles } from './Global';

interface MantineProps {
  children: React.ReactNode;
}

export const Mantine = ({ children }: MantineProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: 'Noto Sans, Open Sans',
        }}
      >
        <GlobalStyles />
        {children}
        <ThemeSwitcher />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
