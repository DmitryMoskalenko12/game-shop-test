import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    status: (state, action) => {
      state.status = action.payload;
    },
  },
});

const { actions, reducer } = contactsSlice;
export const { status } = actions;

export default reducer;
