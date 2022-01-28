import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import { showTools } from '../reducers/dynamicData';
import { BASE_URL } from '../utils/constants';

const BaseStory3 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  const tools = useSelector((store) => store.dynamicData.tools);

  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTools());
  }, [dispatch]);

  const onAnswerSubmit = (name) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedElements({ element: name }));
  };

  console.log(elements);
  return (
    <div>
      <section className="base-story__part3">
        <p>{`Ja, det kändes lite ${elements[1]?.element}. ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${elements[0]?.element}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog... `}</p>
      </section>

      <h3>Vadå?</h3>
      <div>
        {tools.map((item) => (
          <div>
            {/* <button
              type="submit"
              className="option-buttons"
              key={item.name}
              onClick={() => onAnswerSubmit(item.name)}
            >
              {item.image}
            </button> */}
            <img src={`${BASE_URL}/media/images/${item.image}`} alt="tool" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseStory3;
