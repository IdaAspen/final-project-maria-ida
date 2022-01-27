import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StoryPage from '../pages/StoryPage';
// import { API_URL } from '../utils/constants';
import { showCharacters } from '../reducers/dynamicData';
import storyElements from '../reducers/storyElements';
// import BaseStory from './BaseStory';
// import user from '../reducers/user';
// removed import of dynamicData

const CreateStory = () => {
  const characters = useSelector((store) => store.dynamicData?.characters);

  const selectedCharacter = useSelector(
    (store) => store.storyElements?.selectedCharacter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCharacters());
  }, [dispatch]);
  // const accessToken = useSelector((store) => store.user.accessToken);

  // Listens to onClick and set the selectedCharacter
  const onAnswerSubmit = (name) => {
    // if (selectedCharacter) return;
    // preventing to add several characters to a story

    dispatch(storyElements.actions.setSelectedCharacter({ name }));
  };
  // console.log(characters);
  if (selectedCharacter != null) {
    return <StoryPage />;
  } else {
    return (
      <div>
        <h2>Välj din huvudroll i sagan!</h2>
        <div>
          {characters.map((item) => (
            <button
              type="submit"
              className="option-buttons"
              key={item.id}
              onClick={() => onAnswerSubmit(item.name)}
            >
              {item.image}
            </button>
          ))}
          {/* {selectedCharacter && <p>`You picked ${selectedCharacter}`</p>} */}
        </div>
      </div>
    );
  }
};

export default CreateStory;
