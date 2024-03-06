import {
  createSlice
} from '@reduxjs/toolkit';
import { catalogCards } from '../../dummy-data/dummy-data';

const initialState = {
  dataCards: catalogCards,
  status: 'idle',
  page: 1,
  headers: '',
  limit: 12,
  actualFilter: '',
  setActualNameFilter: '',
  path: '/catalog/',
  db: catalogCards,
};

const catalogCardsSlice = createSlice({
  name: 'catalogCards',
  initialState,
  reducers: {
    page: (state, action) => {
      state.page = action.payload;
    },
    getActualLimit: (state, action) => {
      state.limit = action.payload;
    },
    getActualFilter: (state, action) => {
      state.actualFilter = action.payload;
    },
    getActualNameFilter: (state, action) => {
      state.setActualNameFilter = action.payload;
    },
    getHeaders: (state, action) => {
      state.headers = action.payload;
    },
    getDataCards: (state, action) => {
      state.dataCards = action.payload;
    },
  },
});

const { actions, reducer } = catalogCardsSlice;
export const { page, getActualLimit, getActualFilter, getActualNameFilter, getHeaders, getDataCards } =
  actions;

export default reducer;
