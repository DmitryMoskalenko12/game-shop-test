import { createSlice } from '@reduxjs/toolkit';
import { propousalData } from '../../../dummy-data/dummy-data';

const initialState = {
  propousalData: propousalData,
  status: 'idle',
};

const propousalSlice = createSlice({
  name: 'propousal',
  initialState,
  reducers: {},
});

const { actions, reducer } = propousalSlice;
export default reducer;
