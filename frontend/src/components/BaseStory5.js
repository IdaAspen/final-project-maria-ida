import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import { showFriends } from '../reducers/dynamicData';

const BaseStory5 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );

  // const elements = useSelector(
  //   (store) => store.storyElements.selectedElements?.name
  // );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  const friends = useSelector((store) => store.dynamicData.friends);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFriends());
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
      <section className="base-story">
        <p>{`Ja precis, som att vara högst upp ${elements[3]?.element} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${elements[0]?.element} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser...`}</p>
      </section>

      <h3>Vem då?</h3>
      <div>
        {friends.map((item) => (
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

export default BaseStory5;
