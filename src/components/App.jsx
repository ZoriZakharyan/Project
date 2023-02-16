import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';

export default function App({allInit}) {
  return (
    <Routes>
      <Route path="/" element={<Mainpage allInit={allInit} />} />
    </Routes>
  );
}
