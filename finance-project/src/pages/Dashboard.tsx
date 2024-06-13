import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

interface Debt {
  debtAmount: number;
  paidAmount?: number;
  paymentStart: string;
  installment: number;
}

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [totalDebt, setTotalDebt] = useState<number>(0);
  const [paidDebt, setPaidDebt] = useState<number>(0);
  const [upcomingPayments, setUpcomingPayments] = useState<{ date: string, amount: number }[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const fetchData = async () => {
        try {
          const debtsResponse = await axios.get('http://localhost:5001/api/debts');
          const userResponse = await axios.get('http://localhost:5001/api/users/me');
          const paymentsResponse = await axios.get('http://localhost:5001/api/payments/history');
          const additionalDebtsResponse = await axios.get('http://localhost:5001/api/debts/additional');

          const debts: Debt[] = debtsResponse.data;
          const totalDebtAmount = debts.reduce((sum, debt) => sum + debt.debtAmount, 0);
          const paidDebtAmount = debts.reduce((sum, debt) => sum + (debt.paidAmount || 0), 0);

          const upcoming = debts.map(debt => ({
            date: debt.paymentStart, 
            amount: debt.installment
          }));

          setTotalDebt(totalDebtAmount);
          setPaidDebt(paidDebtAmount);
          setUpcomingPayments(upcoming);
          
         /*  save state */
          const user = userResponse.data;
          const paymentHistory = paymentsResponse.data;
          const additionalDebts = additionalDebtsResponse.data;

        } catch (error) {
          console.error('Error fetching data', error);
        }
      };

      fetchData();
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