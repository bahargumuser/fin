import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [totalDebt, setTotalDebt] = useState<number>(0);
  const [paidDebt, setPaidDebt] = useState<number>(0);
  const [upcomingPayments, setUpcomingPayments] = useState<{ date: string; amount: number }[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [isAuthenticated, navigate]);

  const fetchData = async () => {
    try {
      const debtResponse = await axios.get('/api/debt');
      setTotalDebt(debtResponse.data.totalDebt);
      setPaidDebt(debtResponse.data.paidDebt);
      setUpcomingPayments(debtResponse.data.upcomingPayments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>
        <p>Welcome, {user}</p>

        <div className="dashboard-statistics">
          <div className="stat-card">
            <h3>Total Debt</h3>
            <p>${totalDebt.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h3>Paid Debt</h3>
            <p>${paidDebt.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Payments</h3>
            {upcomingPayments.map((payment, index) => (
              <p key={index}>{payment.date}: ${payment.amount.toFixed(2)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
