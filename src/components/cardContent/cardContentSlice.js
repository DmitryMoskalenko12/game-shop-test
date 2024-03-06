import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carouselData: [],
  status: 'idle',
  offsetLittleCarousel: 0,
  offsetBigCarousel: 0,
  heightLittleCarousel: 85,
  widthBigCarousel: 0,
  pathForBasket: 0,
};

const carouselSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    getOffsetLittleCarousel: (state, action) => {
      state.offsetLittleCarousel = action.payload;
    },
    getOffsetBigCarousel: (state, action) => {
      state.offsetBigCarousel = action.payload;
    },
    getHeightLittleCarousel: (state, action) => {
      state.heightLittleCarousel = action.payload;
    },
    getWidthBigCarousel: (state, action) => {
      state.widthBigCarousel = action.payload;
    },
    getPathForBasket: (state, action) => {
      state.pathForBasket = action.payload;
    },
    getCarouselData: (state, action) => {
      state.carouselData = action.payload;
    }
  },
});

const { actions, reducer } = carouselSlice;
export const {
  getOffsetLittleCarousel,
  getHeightLittleCarousel,
  getOffsetBigCarousel,
  getWidthBigCarousel,
  getPathForBasket,
  getCarouselData
} = actions;
export default reducer;
