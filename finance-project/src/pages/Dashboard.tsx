import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user}</p>
      {/* Show debt summary, payment statistics, etc. */}
    </div>
  );
};

export default Dashboard;