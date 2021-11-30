import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

export default App;
