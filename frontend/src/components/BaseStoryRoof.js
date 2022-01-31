import React from 'react';
import { useSelector } from 'react-redux';

import BaseStory1 from './BaseStory1';
import BaseStory2 from './BaseStory2';
import BaseStory3 from './BaseStory3';
import BaseStory4 from './BaseStory4';
import BaseStory5 from './BaseStory5';
import BaseStory6 from './BaseStory6';
import BaseStory7 from './BaseStory7';

import storyElements from '../reducers/storyElements';

// import CreateStory from '../components/CreateStory';

const BaseStoryRoof = () => {
  const elements = useSelector((store) => store.storyElements.selectedElements);

  if (elements.length === 1) {
    return <BaseStory2 />;
  }
  if (elements.length === 2) {
    return <BaseStory3 />;
  }
  if (elements.length === 3) {
    return <BaseStory4 />;
  }
  if (elements.length === 4) {
    return <BaseStory5 />;
  }
  if (elements.length === 5) {
    return <BaseStory6 />;
  }
  if (elements.length === 6) {
    return <BaseStory7 />;
  } else {
    return <BaseStory1 />;
  }
};

export default BaseStoryRoof;
