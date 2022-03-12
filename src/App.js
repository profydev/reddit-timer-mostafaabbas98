import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Header from './Header';

import GlobalStyles from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="search:id" element={<p>Search</p>} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
