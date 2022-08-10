import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  return {
    header: {
      height: '69px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
    root: {
      background: 'transparent',
    },
    control: {
      borderColor: 'transparent !important',
    },
  };
});
