import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useNavigate, useParams } from 'react-router-dom';
import { markAsPaid } from '../slices/paymentPlanSlice';

const PaymentPlan = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const payments = useSelector((state: RootState) => state.paymentPlan.payments);
  const { debtId } = useParams<{ debtId: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  
  const debtPayments = payments.filter(payment => payment.debtId === Number(debtId));

  const handleMarkAsPaid = (id: number) => {
    dispatch(markAsPaid(id));
  };

  return (
    <div>
      <h1>Payment Plan</h1>
      <ul>
        {debtPayments.map(payment => (
          <li key={payment.id}>
            {payment.dueDate}: ${payment.amount} - {payment.paid ? 'Paid' : 'Unpaid'}
            {!payment.paid && (
              <button onClick={() => handleMarkAsPaid(payment.id)}>Mark as Paid</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentPlan;
