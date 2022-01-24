import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../utils/constants';
import rainbowLoader from './rainbowLoader';

export const dynamicData = createSlice({
  name: 'dynamicData',
  initialState: {
    items: [],
    selectedCharacter: null,
    selectedElements: [],
    history: []
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
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

export const showCharacters = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('element'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setItems(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

// const initialState = {
//   character: [],
//   selectedCharacter: null,
//   storyElements: [],
//   selectedElements: []
// };

// const dynamicData = createSlice({
//   name: 'dynamicData',
//   initialState,
//   reducers: {
//     setSelectedCharacter: (store, action) => {
//       store.selectedCharacter = action.payload;
//     },
//     // Is it possible to store multiple feelings, tools, places etc in this array from json?
//     setSelectedElements: (store, action) => {
//       store.selectedElements = action.payload;
//     },
//     // submitDynamicData: (state, action) => {
//     //   // Code that triggers when the user selects data for their story
//     // },
//     restart: () => {
//       return initialState; // Reset the state to how the page looked like at the start
//     }
//   }
// });

// export default dynamicData;
