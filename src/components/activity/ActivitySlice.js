import {
  createSlice
} from '@reduxjs/toolkit';
import { activity } from '../../dummy-data/dummy-data';

const initialState = {
  data: activity,
  status: 'idle',
  page: 1,
  db: activity,
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    page: (state, action) => {
      state.page = action.payload;
    },
  },
});

const { actions, reducer } = activitySlice;
export const { page } = actions;

export default reducer;
