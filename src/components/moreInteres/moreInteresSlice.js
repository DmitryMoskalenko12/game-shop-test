import { createSlice } from '@reduxjs/toolkit';
import { moreInteres } from '../../dummy-data/dummy-data';

const initialState = {
  data: moreInteres,
  status: 'idle',
};

const moreInteresSlice = createSlice({
  name: 'moreInteres',
  initialState,
  reducers: {},
});

const { reducer } = moreInteresSlice;
export default reducer;
