import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import { showPlaces } from '../reducers/dynamicData';

const BaseStory4 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );

  const elements = useSelector((store) => store.storyElements.selectedElements);
  const places = useSelector((store) => store.dynamicData.places);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPlaces());
  }, [dispatch]);

  const onAnswerSubmit = (name) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedElements({ element: name }));
  };

  console.log(elements);
  return (
    <div>
      <section className="base-story__part4">
        <p>{`Exakt! ${elements[2]?.element}, tänker ${character}. Inne i förrådet kan det nog finnas ${elements[2]?.element}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. Till slut får ${character} ut ${elements[2]?.element} från förrådet och tar sig närmare taket. Hej och hå. Det är tungt. Och ${elements[1]?.element}. Det känns som att ${character} är...`}</p>

        <div>
          <p>{`${elements[2]?.element}`}</p>
        </div>
      </section>

      <h3>Vartdå?</h3>
      <div>
        {places.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseStory4;
