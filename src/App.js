import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Search from './components/pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
}

export default App;
