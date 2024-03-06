import { createSlice } from '@reduxjs/toolkit';
import { catalogAvailability } from '../../../dummy-data/dummy-data';

const initialState = {
  availabilityData: catalogAvailability,
  status: 'idle',
};

const catalogAvailabilitySlice = createSlice({
  name: 'catalogAvailability',
  initialState,
  reducers: {},
});

const { reducer } = catalogAvailabilitySlice;

export default reducer;
