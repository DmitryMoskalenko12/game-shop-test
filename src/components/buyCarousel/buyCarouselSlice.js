import { createSlice } from '@reduxjs/toolkit';
import { catalogCards } from '../../dummy-data/dummy-data';

const initialState = {
  data: catalogCards,
  status: 'idle',
  slideIndex: 1,
  offset: 0,
  width: 0,
  path: '/buyCard/',
};

const buyCarouselSlice = createSlice({
  name: 'buyCarousel',
  initialState,
  reducers: {
    width: (state, action) => {
      state.width = action.payload;
    },
    slideIndex: (state, action) => {
      state.slideIndex = action.payload;
    },
    offset: (state, action) => {
      state.offset = action.payload;
    },
  },
});
const { actions, reducer } = buyCarouselSlice;
export const { slideIndex, offset, width } = actions;
export default reducer;
