import { createSlice } from '@reduxjs/toolkit';
import awesomeBook from '../../media/project/awesome-books/image';

const initialState = {
  projects: [
    awesomeBook,
  ],
  modal: '',
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    anything: (state) => {
      console.log(state);
    },
  },
});

export const { anything } = projectSlice.actions;
export default projectSlice.reducer;
