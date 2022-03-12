import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Search from './components/pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
