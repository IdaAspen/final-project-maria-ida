import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFeelings } from '../../reducers/dynamicData';
import { shuffleArray } from '../../utils/shuffleArray';
import ImageButton from '../ImageButton';

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
  console.log(feelings);
  return (
    <div className="base-container">
      <section className="base-story-orange">
        <p>{`${sound.name}!!!! ${character} stelnade till. Vad var det? Det kändes plötsligt lite... `}</p>
      </section>

      <h3>Hur kändes det?</h3>
      <div className="btn-container">
        {shuffleArray(feelings).map((item) => (
          // {
          //   return (
          //     <div key={item.name}>
          //       <ImageButton item={feelings} />
          //     </div>
          //   );
          // })}

          <button
            className="img-btn"
            type="submit"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name, item.image)}
          >
            {<img src={item.image} alt={item.image} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseStory2;
