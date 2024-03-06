import { createSlice } from '@reduxjs/toolkit';
import { catalogChoice1 } from '../../dummy-data/dummy-data';

const initialState = {
  data: catalogChoice1,
  status: 'idle',
};

const catalogChoice = createSlice({
  name: 'catalogChoice',
  initialState,
  reducers: {},
});

const { reducer } = catalogChoice;
export default reducer;
