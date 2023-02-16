import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import NavBar from './NavBar';

export default function App({ allInit }) {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Mainpage allInit={allInit} />} />

      </Routes>

    </div>
  );
}
