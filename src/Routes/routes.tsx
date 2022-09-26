import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Search from '../Pages/Search';

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<h1>Not found</h1>} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
