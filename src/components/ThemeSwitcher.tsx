import React from 'react';
import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
      </ActionIcon>
    </Group>
  );
}
