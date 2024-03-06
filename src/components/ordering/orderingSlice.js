import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};


const orderingSlice = createSlice({
  name: 'ordering',
  initialState,
  reducers: {},
});

const { reducer } = orderingSlice;
export default reducer;
