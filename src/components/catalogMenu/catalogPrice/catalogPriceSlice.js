import { createSlice } from '@reduxjs/toolkit';
import { catalogPrice } from '../../../dummy-data/dummy-data';

const initialState = {
  rangePriceData: catalogPrice,
  status: 'idle',
};

const catalogPriceSlice = createSlice({
  name: 'catalogPrice',
  initialState,
  reducers: {},
});

const { reducer } = catalogPriceSlice;
export default reducer;
