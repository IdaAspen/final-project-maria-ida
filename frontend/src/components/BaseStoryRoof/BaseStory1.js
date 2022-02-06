import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showSounds } from '../../reducers/dynamicData';

const BaseStory1 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter
  );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  const sounds = useSelector((store) => store.dynamicData.sounds);

  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSounds());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedSound({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };
  console.log('ELEMENTS HERE', elements);
  return (
    <div className="base-container">
      <section className="base-story-green">
        <div class="img-container">
          <img src={character.image} alt="character" />
        </div>
        <p>
          {`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle
          hända. ${character.name} var bara hemma och åt lite nötter, för det var ${character.name}s bästa grej att knapra på. Ja, förutom pinnar, chips och
          det översta lagret på lasagne. De var också bra grejer att knapra på. 
          Men mitt i allt knaprande hörde ${character.name} någonting.`}
        </p>
      </section>

      <h3>Vad var det som lät?</h3>
      <div className="btn-container">
        {sounds.map((item) => (
          <button
            className="story-btn"
            type="submit"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name, item.image)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseStory1;
