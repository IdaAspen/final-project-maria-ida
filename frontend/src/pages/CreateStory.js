import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import StoryPage from './StoryPage';
// import { API_URL } from '../utils/constants';
import { showCharacters } from '../reducers/dynamicData';
import storyElements from '../reducers/storyElements';
import BaseStoryRoof from '../components/BaseStoryRoof/BaseStoryRoof';
import './create-story.css';

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
  const onAnswerSubmit = (name, image) => {
    // if (selectedCharacter) return;
    // preventing to add several characters to a story

    dispatch(
      storyElements.actions.setSelectedCharacter({ name, image: image })
    );
  };
  // console.log(characters);
  if (selectedCharacter != null) {
    return <BaseStoryRoof />;
  } else {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="create-story-container">
          <h2>Välj din huvudroll i sagan!</h2>
          <div>
            {characters.slice(0, 5).map((item) => (
              <button
                className="img-btn"
                type="submit"
                key={item.id}
                onClick={() => onAnswerSubmit(item.name, item.image)}
              >
                {<img src={item.image} alt="character" />}
              </button>
            ))}
            {/* {selectedCharacter && <p>`You picked ${selectedCharacter}`</p>} */}
          </div>
        </div>
      </div>
    );
  }
};

export default CreateStory;
