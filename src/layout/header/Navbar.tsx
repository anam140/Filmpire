import { SegmentedControl } from '@mantine/core';
import React from 'react';
import { useStyles } from './headerStyles';

const Navbar: React.FC = () => {
  const { classes } = useStyles();

  return (
    <SegmentedControl
      size="sm"
      classNames={{
        control: classes.control,
        root: classes.root,
      }}
      color="red"
      transitionDuration={200}
      transitionTimingFunction="linear"
      data={[
        { label: 'Movies', value: 'movies' },
        { label: 'Series', value: 'series' },
        { label: 'TV Shows', value: 'tv-shows' },
      ]}
    />
  );
};
export default Navbar;
