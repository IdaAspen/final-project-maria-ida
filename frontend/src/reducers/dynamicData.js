import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../utils/constants';
import rainbowLoader from './rainbowLoader';
// Eller ska detta vara en API-fetch istället med olika endpoints, lafde in en json-fil i BE?

export const dynamicData = createSlice({
  name: 'dynamicData',
  initialState: {
    characters: [],
    sounds: [],
    tools: [],
    places: [],
    friends: [],
    friendsNames: []
  },
  reducers: {
    setCharacters: (store, action) => {
      store.characters = action.payload;
    },
    setSounds: (store, action) => {
      store.sounds = action.payload;
    },
    setTools: (store, action) => {
      store.tools = action.payload;
    },
    setPlaces: (store, action) => {
      store.places = action.payload;
    },
    setFriends: (store, action) => {
      store.friends = action.payload;
    },
    setFriendsNames: (store, action) => {
      store.friendsNames = action.payload;
    }
  }
});

export const showCharacters = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('character'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setCharacters(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showSounds = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('sound'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setSounds(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showTools = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('tool'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setTools(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showPlaces = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('place'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setPlaces(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showFriends = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('friend'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setFriends(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};

export const showFriendsName = () => {
  return (dispatch) => {
    dispatch(rainbowLoader.actions.setLoading(true));
    const options = {
      method: 'GET' // add header: accesstoken here?
    };
    fetch(API_URL('friendname'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(dynamicData.actions.setFriendsNames(data.response));
        } else {
          console.log('ERROR in reducer fetch');
        }
      })
      .finally(() => dispatch(rainbowLoader.actions.setLoading(false)));
  };
};
