import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showTools } from '../../reducers/dynamicData';
// import { BASE_URL } from '../../utils/constants';

const BaseStory3 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const tools = useSelector((store) => store.dynamicData.tools);
  const elements = useSelector((store) => store.storyElements.selectedElements);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTools());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedTool({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };
  console.log('ELEMENTS HERE', elements);
  return (
    <div className="base-container">
      <section className="base-story">
        <p>{`Ja, det kändes lite ${feeling.name}. ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${sound.name}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog... `}</p>
      </section>

      <h3>Vadå?</h3>
      <div className="img-btn-wrapper">
        {tools.map((item) => (
          <div key={item.name}>
            <button
              className="img-btn"
              type="submit"
              onClick={() => onAnswerSubmit(item.name, item.image)}
            >
              {
                <img
                  // src={`${BASE_URL}/media/images/${item.image}`}
                  src={item.image}
                  alt="tool"
                />
              }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseStory3;
