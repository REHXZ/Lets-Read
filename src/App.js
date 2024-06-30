import React from 'react';
import AppRoutes from './Routes';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
