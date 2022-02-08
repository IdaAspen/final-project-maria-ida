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

  // const shufflePlaces = places.sort((a, b) => 0.5 - Math.random());
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const shuffleArray = array.sort((a, b) => 0.5 - Math.random());

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const shuffle = places[Math.floor(Math.random() * places.length)];

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedPlace({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };
  console.log('shuffle', shuffle);
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
