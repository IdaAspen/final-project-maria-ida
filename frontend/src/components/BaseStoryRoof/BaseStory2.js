import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFeelings } from '../../reducers/dynamicData';

const BaseStory2 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const feelings = useSelector((store) => store.dynamicData.feelings);
  const elements = useSelector((store) => store.storyElements.selectedElements);

  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFeelings());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedFeeling({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };
  console.log('ELEMENTS HERE', elements);
  console.log('SOUND', sound);
  return (
    <>
      <section className="base-story">
        <p>{`${sound.name}!!!! ${character} stelnade till. Vad var det? Det kändes plötsligt lite... `}</p>
      </section>

      <h3>Hur kändes det?</h3>
      <div>
        {feelings.map((item) => (
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
    </>
  );
};

export default BaseStory2;
