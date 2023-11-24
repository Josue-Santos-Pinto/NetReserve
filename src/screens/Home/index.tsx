import React from 'react';
import { createBox, createText } from '@shopify/restyle';
import { ThemeProps } from '../../theme';

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Home = () => {
  return (
    <Box flex={1} bg="primary_800" p="m" justifyContent="center" alignItems="center">
      <Box
        bg="white"
        width="80%"
        height={200}
        borderRadius={20}
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="title">NetReserve</Text>
      </Box>
    </Box>
  );
};

export default Home;
