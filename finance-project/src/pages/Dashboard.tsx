import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  // dummy data
  const totalDebt = 32493.72;
  const paidDebt = 12000;
  const upcomingPayments = [
    { date: '2024-07-15', amount: 2707.81 },
    { date: '2024-08-15', amount: 2707.81 },
    { date: '2024-09-15', amount: 2707.81 },
  ];

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

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
