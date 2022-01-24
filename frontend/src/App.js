import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import Main from './components/Main';
import Login from './components/Login';
import NotFound from './components/NotFound';

import user from './reducers/user';
import { dynamicData } from './reducers/dynamicData';
import story from './reducers/story';
import CreateStory from './components/CreateStory';

const reducer = combineReducers({
  user: user.reducer,
  dynamicData: dynamicData.reducer,
  story: story.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateStory />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
