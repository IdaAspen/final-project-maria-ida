import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showPlaces } from '../../reducers/dynamicData';
// import { BASE_URL } from '../../utils/constants';

const BaseStory4 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling
  );
  const tool = useSelector(
    (store) => store.storyElements.selectedElements.tool
  );
  const places = useSelector((store) => store.dynamicData.places);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPlaces());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedPlace({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <div className="base-container">
      <section className="base-story-yellow">
        <div class="img-container">
          <img src={tool.image} alt="tool" />
        </div>
        <p>{`Exakt! ${tool.name}, tänker ${character}. Inne i förrådet kan det nog finnas ${tool.name}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. Till slut får ${character} ut ${tool.name} från förrådet och tar sig närmare taket. Hej och hå. Det är tungt. Och ${feeling.name}. Det känns som att ${character} är...`}</p>
      </section>

      <h3>Vartdå?</h3>
      <div className="btn-container">
        {places.map((item) => (
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

export default BaseStory4;
