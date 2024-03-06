import { createSlice } from '@reduxjs/toolkit';
import { accordionQuestions } from '../../dummy-data/dummy-data';

const initialState = {
  accordionData: accordionQuestions,
  status: 'idle',
};

const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {},
});

const { reducer } = accordionSlice;
export default reducer;
