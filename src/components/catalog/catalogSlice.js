import {
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import { warhammer } from '../../dummy-data/dummy-data';

const initialState = {
  data: warhammer,
  activeFilter: 'Warhammer 40000',
  changeStatus: 'idle',
};

const catalog = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    activeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const finalFilter = createSelector(
  (state) => state.catalog.data,
  (state) => state.catalog.activeFilter,
  (arr, filter) => {
    if (filter === 'Warhammer 40000') {
      return arr.filter((item) => item.uniId === filter);
    } else {
      return arr.filter((item) => item.uniId === filter);
    }
  }
);

const { actions, reducer } = catalog;

export const { catalogFetching, catalogFetched, catalogError, activeFilter } =
  actions;
export default reducer;
