import { createSlice } from '@reduxjs/toolkit';

const storyElements = createSlice({
  name: 'storyElements',
  initialState: {
    selectedCharacter: null,
    selectedElements: [],
    history: []
    // storyId:
  },
  reducers: {
    setSelectedCharacter: (store, action) => {
      store.selectedCharacter = action.payload;
    },

    // save the last chosen element in history
    setSelectedElements: (store, action) => {
      store.history = [...store.history, store.selectedElements];
      store.selectedElements = action.payload;
    }

    // submitDynamicData: (state, action) => {
    //   // Code that triggers when the user selects data for their story
    // },
  }
});

export default storyElements;