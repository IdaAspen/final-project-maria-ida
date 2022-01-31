import React from 'react';
import Navbar from '../components/Navbar';
import BaseStoryRoof from '../components/BaseStoryRoof';

// Stretch goal, here you can import other storys
const StoryPageTest = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <BaseStoryRoof />
      </div>
    </div>
  );
};

export default StoryPageTest;
