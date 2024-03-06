import { createSlice } from '@reduxjs/toolkit';
import { catalogAge } from '../../../dummy-data/dummy-data';

const initialState = {
  ageData: catalogAge,
  status: 'idle',
};

const catalogAgesSlice = createSlice({
  name: 'catalogAges',
  initialState,
  reducers: {},
});

const { reducer } = catalogAgesSlice;

export default reducer;
