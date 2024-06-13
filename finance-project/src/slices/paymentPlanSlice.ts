import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Payment {
  id: number;
  debtId: number;
  amount: number;
  dueDate: string;
  paid: boolean;
}

interface PaymentPlanState {
  payments: Payment[];
}

const initialState: PaymentPlanState = {
  payments: [],
};

const paymentPlanSlice = createSlice({
  name: 'paymentPlan',
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<Payment>) => {
      state.payments.push(action.payload);
    },
    markAsPaid: (state, action: PayloadAction<number>) => {
      const payment = state.payments.find(p => p.id === action.payload);
      if (payment) {
        payment.paid = true;
      }
    },
  },
});

export const { addPayment, markAsPaid } = paymentPlanSlice.actions;
export default paymentPlanSlice.reducer;
