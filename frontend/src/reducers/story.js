import { createSlice } from '@reduxjs/toolkit';

// how to store blueprintStory, should this be hardcoded in a storyComponent instead?
const initialState = {
  storyList: [], // can we have the different stories as components?
  currentStory: [],
  history: []
};

const story = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setCurrentStory: (store, action) => {
      // store.storyList = action.payload;
    }
  }
});

export default story;
