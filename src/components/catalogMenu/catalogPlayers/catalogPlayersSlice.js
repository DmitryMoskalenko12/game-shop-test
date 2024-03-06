import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  playersData: [],
};

const catalogPlayersSlice = createSlice({
  name: 'catalogPlayers',
  initialState,
  reducers: {
    getPlayersData: (state, action) => {
      state.playersData = action.payload;
    },
  },
});

const { actions, reducer } = catalogPlayersSlice;
export const { getPlayersData } = actions;
export default reducer;
