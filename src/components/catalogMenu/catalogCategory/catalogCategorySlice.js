import { createSlice } from '@reduxjs/toolkit';
import { listCategory } from '../../../dummy-data/dummy-data';

const initialState = {
  data: listCategory,
  filter: '',
  status: 'idle',
  titleLink: null,
};

const categoryCatalogSlice = createSlice({
  name: 'catalogCategory',
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload;
    },
    getSubFilter: (state, action) => {
      state.subFilter = action.payload;
    },
    getTitleLink: (state, action) => {
      state.titleLink = action.payload;
    },
  },
});

const { actions, reducer } = categoryCatalogSlice;
export const { getFilter, getSubFilter, getTitleLink } = actions;
export default reducer;
