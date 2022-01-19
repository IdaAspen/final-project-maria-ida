import { createSlice } from '@reduxjs/toolkit';

const dynamicData = createSlice({
  name: 'dynamicData',
  initialState: {
    character: [],
    sound: [],
    feeling1: [],
    feeling2: [],
    tool: [],
    place: [],
    friend: [],
    friendName: []
  },
  reducers: {}
});

export default dynamicData;
