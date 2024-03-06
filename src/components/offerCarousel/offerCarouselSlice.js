import { createSlice } from '@reduxjs/toolkit';
import { offerCarousel } from '../../dummy-data/dummy-data';

const initialState = {
  data: offerCarousel,
  status: 'idle',
  slideIndex: 1,
  offset: 0,
  width: 0,
  pathForBasket: offerCarousel,
};

const offerCarouselSlice = createSlice({
  name: 'offerCarousel',
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
const { actions, reducer } = offerCarouselSlice;
export const { slideIndex, offset, width } = actions;
export default reducer;
