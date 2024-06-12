import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Debts from './pages/Debts';
import PaymentPlan from './pages/PaymentPlan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/debts' element={<Debts />} />
        <Route path='/payment-plan' element={<PaymentPlan />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
