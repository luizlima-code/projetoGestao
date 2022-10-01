import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Search from '../Pages/Search';

export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
