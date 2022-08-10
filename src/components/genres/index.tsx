import { genres } from '@/data';
import { Box, Chip, Text } from '@mantine/core';
import React, { useState } from 'react';
import { useStyles } from './styles';

const Genres: React.FC = () => {
  const [value, setValue] = useState('all');
  const { classes } = useStyles();

  return (
    <Box sx={{ marginTop: '15px' }}>
      <Text size={14} color="dimmed" mb={10}>
        Genres
      </Text>
      <Chip.Group
        multiple={false}
        value={value}
        onChange={setValue}
        position="left"
      >
        {genres.map(({ id, genre }) => (
          <Chip
            radius="sm"
            classNames={classes}
            key={id}
            value={genre.toLowerCase()}
          >
            {genre}
          </Chip>
        ))}
      </Chip.Group>
    </Box>
  );
};
export default Genres;
