import { createSlice } from '@reduxjs/toolkit';
// reducer that stores the users selection of characters/elements
const initialState = {
  selectedCharacter: null,
  selectedElements: {
    sound: {
      name: null,
      image: null
    },
    feeling: {
      name: null,
      image: null
    },
    tool: {
      name: null,
      image: null
    },
    place: {
      name: null,
      image: null
    },
    friend: {
      name: null,
      image: null
    },
    friendsName: {
      name: null,
      image: null
    }
  },
  history: [],
  storyPage: 0
  // storyId:
};

const storyElements = createSlice({
  name: 'storyElements',
  initialState,

  reducers: {
    setSelectedCharacter: (store, action) => {
      store.selectedCharacter = action.payload;
    },

    // save the last chosen element in history
    // setSelectedElements: (store, action) => {
    //   const { element, image } = action.payload;
    //   store.history = [...store.history, store.selectedElements];
    //   // store.selectedElements = action.payload;
    //   store.selectedElements.push({
    //     element,
    //     image
    //   });
    // },

    setSelectedSound: (store, action) => {
      // const { name, image } = action.payload;
      // store.history = [...store.history, store.selectedElements];
      // store.selectedElements = action.payload;
      store.selectedElements.sound = action.payload;
    },
    setSelectedFeeling: (store, action) => {
      store.selectedElements.feeling = action.payload;
    },
    setSelectedTool: (store, action) => {
      store.selectedElements.tool = action.payload;
    },
    setSelectedPlace: (store, action) => {
      store.selectedElements.place = action.payload;
    },
    setSelectedFriend: (store, action) => {
      store.selectedElements.friend = action.payload;
    },
    setSelectedFriendsName: (store, action) => {
      store.selectedElements.friendsName = action.payload;
    },
    setStoryPage: (store) => {
      store.storyPage += 1;
    },

    restartGame: (store) => {
      return initialState;
    }
    // submitDynamicData: (state, action) => {
    //   // Code that triggers when the user selects data for their story
    // }
  }
});

export default storyElements;
