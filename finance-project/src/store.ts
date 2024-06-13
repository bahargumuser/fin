import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import debtsReducer from './slices/debtsSlice';
import paymentPlanReducer from './slices/paymentPlanSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    debts: debtsReducer,
    paymentPlan: paymentPlanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;