import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Mainpage from './Mainpage';
import Dashboard from '../Components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
