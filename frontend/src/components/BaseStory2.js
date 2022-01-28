import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import { showFeelings } from '../reducers/dynamicData';

const BaseStory2 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  const feelings = useSelector((store) => store.dynamicData.feelings);

  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFeelings());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(
      storyElements.actions.setSelectedElements({ element: name, image: image })
    );
  };

  console.log(elements);
  return (
    <div>
      <section className="base-story__part2">{`${elements[0]?.element}!!!! ${character} stelnade till. Vad var det? Det kändes plötsligt lite... `}</section>

      <h3>Hur kändes det?</h3>
      <div>
        {feelings.map((item) => (
          <button
            type="submit"
            className="option-buttons"
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

export default BaseStory2;
