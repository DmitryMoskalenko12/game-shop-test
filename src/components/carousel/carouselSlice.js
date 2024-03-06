import {
  createSlice
} from '@reduxjs/toolkit';
import { carousel1 } from '../../dummy-data/dummy-data';

const initialState = {
  data: carousel1,
  status: 'idle',
  activeButton: false,
  offset: 0,
  slideIndex: 1,
  width: 0,
  staticSlide: 1,
};

const carousel = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    buttonTrigger: (state, action) => {
      state.activeButton = action.payload;
    },
    offset: (state, action) => {
      state.offset = action.payload;
    },
    slideIndex: (state, action) => {
      state.slideIndex = action.payload;
    },
    width: (state, action) => {
      state.width = action.payload;
    },
  },
});

const { actions, reducer } = carousel;
export const {
  carouselLoading,
  carouselFulfilled,
  carouselError,
  buttonTrigger,
  offset,
  slideIndex,
  width,
} = actions;

export default reducer;
