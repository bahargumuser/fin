import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Debt {
  id: number;
  description: string;
  amount: number;
}

interface DebtsState {
  debts: Debt[];
}

const initialState: DebtsState = {
  debts: [],
};

const debtsSlice = createSlice({
  name: 'debts',
  initialState,
  reducers: {
    addDebt: (state, action: PayloadAction<Debt>) => {
      state.debts.push(action.payload);
    },
  },
});

export const { addDebt } = debtsSlice.actions;
export default debtsSlice.reducer;