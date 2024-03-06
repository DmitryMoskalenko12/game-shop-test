import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  finalPrice: 0,
  status: 'idle',
  unicId: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getCardsForBasket: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateBase: (state, action) => {
      state.data = action.payload;
    },
    getFinalPrice: (state, action) => {
      state.finalPrice = action.payload;
    },
    cleanBasket: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = basketSlice;
export const {
  getCardsForBasket,
  deleteProduct,
  updateBase,
  getFinalPrice,
  cleanBasket,
} = actions;

export default reducer;
