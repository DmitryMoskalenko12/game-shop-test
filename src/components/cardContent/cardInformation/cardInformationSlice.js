import { createSlice } from '@reduxjs/toolkit';
import { cardQuestions } from '../../../dummy-data/dummy-data';

const initialState = {
  answerQuestionData: cardQuestions,
  status: 'idle',
};

const answerQuestion = createSlice({
  name: 'answerQuestion',
  initialState,
  reducers: {},
});

const { reducer } = answerQuestion;
export default reducer;
