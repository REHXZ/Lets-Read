import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Landing from './Pages/Landing';


const AppRoutes = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;