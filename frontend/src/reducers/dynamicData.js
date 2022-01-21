import { createSlice } from '@reduxjs/toolkit';
// Eller ska detta vara en API-fetch istället med olika endpoints, lafde in en json-fil i BE?
const initialState = {
  character: [],
  selectedCharacter: null,
  storyElements: [],
  selectedElements: []
};

const dynamicData = createSlice({
  name: 'dynamicData',
  initialState,
  reducers: {
    setSelectedCharacter: (store, action) => {
      store.selectedCharacter = action.payload;
    },
    // Is it possible to store multiple feelings, tools, places etc in this array from json?
    setSelectedElements: (store, action) => {
      store.selectedElements = action.payload;
    },
    // submitDynamicData: (state, action) => {
    //   // Code that triggers when the user selects data for their story
    // },
    restart: () => {
      return initialState; // Reset the state to how the page looked like at the start
    }
  }
});

export default dynamicData;
