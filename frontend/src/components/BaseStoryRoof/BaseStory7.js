import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../../reducers/storyElements';

const BaseStory7 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const friendsName = useSelector(
    (store) => store.storyElements.selectedElements.friendsName.name
  );
  // const accessToken = useSelector((store) => store.user.accessToken);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setStoryPage());
  };

  const onRestart = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/skapasaga');
  };

  return (
    <div className="base-container">
      <div className="base-container">
        <section className="base-story-orange">
          <p>{`Jo, jag heter ${friendsName}. Vill du ha en nöt av mig? – hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter. – Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${friendsName}n. 
          – Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>
        </section>
      </div>

      <h3>Vill du läsa hela sagan och spara den, eller starta om?</h3>
      <div class="btn-container">
        <button
          className="story-btn"
          type="submit"
          onClick={() => onAnswerSubmit()}
        >
          Visa hela sagan
        </button>
        <button className="story-btn" type="submit" onClick={onRestart}>
          Börja om
        </button>
      </div>
    </div>
  );
};

export default BaseStory7;
