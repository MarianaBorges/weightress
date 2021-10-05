import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import colors from './src/styles/colors';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home/>
    </ThemeProvider>
  );
}
