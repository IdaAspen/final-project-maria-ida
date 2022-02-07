import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import StoryPage from './StoryPage';
// import { API_URL } from '../utils/constants';
import { showCharacters } from '../reducers/dynamicData';
// import user from '../reducers/user';
import Login from '../components/Login';
import storyElements from '../reducers/storyElements';
import BaseStoryRoof from '../components/BaseStoryRoof/BaseStoryRoof';
import './create-story.css';

const CreateStory = () => {
  const characters = useSelector((store) => store.dynamicData?.characters);
  const selectedCharacter = useSelector(
    (store) => store.storyElements.selectedCharacter
  );
  // const storyPage = useSelector((store) => store.storyElements.storyPage);
  const accessToken = useSelector((store) => store.user.accessToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCharacters());
  }, [dispatch]);

  // Listens to onClick and set the selectedCharacter
  const onAnswerSubmit = (name, image) => {
    // if (selectedCharacter) return;
    // preventing to add several characters to a story

    dispatch(storyElements.actions.setSelectedCharacter({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
    navigate('/skapasaga');
  };
  console.log('selectedCharacter', selectedCharacter);

  if (!accessToken) {
    return <Login />;
  }
  if (selectedCharacter != null) {
    return <BaseStoryRoof />;
  } else {
    return (
      <div className="create-story-container">
        <section className="create-story">
          <h2>Vem ska din saga handla om?</h2>
        </section>
        <div className="img-btn-wrapper">
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
    );
  }
};

export default CreateStory;
