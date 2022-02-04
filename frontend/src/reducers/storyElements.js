import { createSlice } from '@reduxjs/toolkit';
// reducer that stores the users selection of characters/elements
const storyElements = createSlice({
  name: 'storyElements',
  initialState: {
    selectedCharacter: null,
    selectedElements: [],
    history: [],
    storyPage: 0,
    // storyId:
  },
  reducers: {
    setSelectedCharacter: (store, action) => {
      store.selectedCharacter = action.payload;
    },

    // save the last chosen element in history
    setSelectedElements: (store, action) => {
      const { element, image } = action.payload;
      store.history = [...store.history, store.selectedElements];
      // store.selectedElements = action.payload;
      store.selectedElements.push({
        element,
        image,
      });
    },

    goToNextPage: (store) => {
      store.storyPage += 1;
    },
    // submitDynamicData: (state, action) => {
    //   // Code that triggers when the user selects data for their story
    // }
  },
});

export default storyElements;
