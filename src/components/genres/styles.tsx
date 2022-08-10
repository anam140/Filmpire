import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme, _params, getRef) => ({
  label: {
    background:
      theme.colorScheme === 'light'
        ? '#e8e8e8 !important'
        : '#19151d !important',
    border: 0,

    '&[data-checked]': {
      '&, &:hover': {
        backgroundColor: 'var(--accent-clr) !important',
        border: '0 !important',
        color: theme.white,
      },

      [`& .${getRef('iconWrapper')}`]: {
        color: theme.white,
      },
    },
  },

  iconWrapper: {
    ref: getRef('iconWrapper'),
  },
}));
