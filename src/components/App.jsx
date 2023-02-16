import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import AllTemsBody from './pages/AllTemsBody';
import TemsPage from './pages/TemsPage';

export default function App({ allInit, allTems, allTemsBody }) {
  return (
    <Routes>
      <Route path="/" element={<Mainpage allInit={allInit} />} />
      <Route path="/tems/:id" element={<TemsPage allTems={allTems} />} />
      <Route path="/temsbody/:id" element={<AllTemsBody allTemsBody={allTemsBody} />} />
    </Routes>
  );
}
