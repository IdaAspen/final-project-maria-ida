import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFriendsNames } from '../../reducers/dynamicData';
// import user from '../reducers/user';

const BaseStory6 = () => {
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const friend = useSelector(
    (store) => store.storyElements.selectedElements.friend
  );
  const friendsNames = useSelector((store) => store.dynamicData.friendsNames);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFriendsNames());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedFriendsName({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  return (
    <div className="base-container">
      <section className="base-story">
        <p>{`Där sitter en ${friend.name}  och skalar nötter. Tänk att ett ${sound.name} kom från de här små nötterna. – Hej, säger ${friend.name}n. Jag heter...`}</p>
      </section>

      <h3>Vad heter den?</h3>
      <div>
        {friendsNames.map((item) => (
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

export default BaseStory6;
