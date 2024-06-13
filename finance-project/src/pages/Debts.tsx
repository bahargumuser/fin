import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import { addDebt } from '../slices/debtsSlice';

const Debts = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const debts = useSelector((state: RootState) => state.debts.debts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleAddDebt = () => {
    const newDebt = {
      id: debts.length + 1,
      description,
      amount,
    };
    dispatch(addDebt(newDebt));
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      <h1>Debts</h1>
      <ul>
        {debts.map(debt => (
          <li key={debt.id}>
            {debt.description}: ${debt.amount}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <button onClick={handleAddDebt}>Add Debt</button>
      </div>
    </div>
  );
};

export default Debts;