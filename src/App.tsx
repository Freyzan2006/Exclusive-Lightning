import React from 'react';

import "./styles/base.css"
import './index.css';

import { Route, Routes } from 'react-router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Layout from '@componentsLayout/Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
