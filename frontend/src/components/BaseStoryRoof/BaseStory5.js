import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFriends } from '../../reducers/dynamicData';
import ImageButton from '../../styledComponents/ImageButton';
import styled from 'styled-components';

const BaseStory5 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const place = useSelector(
    (store) => store.storyElements.selectedElements.place
  );
  const friends = useSelector((store) => store.dynamicData.friends);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFriends());
  }, [dispatch]);

  // gets random objects from elements-array and push it to a new array
  const randomObjects = () => {
    const randomFriends = [];
    for (var i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * friends.length);
      const object = friends[randomIndex];
      if (!randomFriends.includes(object)) {
        randomFriends.push(object);
      }
    }
    return randomFriends;
  };

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedFriend({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };

  console.log('RANDOMOBJECT', randomObjects());
  return (
    <BaseContainer>
      <SectionBlue>
        <ImageContainer>
          <img src={place.image} alt={place.name} />
        </ImageContainer>
        <p>{`Ja precis, som att vara högst upp ${place.name} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${sound.name} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser...`}</p>
      </SectionBlue>

      <h3>Vem då?</h3>
      <ImageButtonWrapper>
        {friends.map((item) => (
          <ImageButton
            key={item.name}
            onClick={() => onAnswerSubmit(item.name, item.image)}
            text={<img src={item.image} alt={item.image} />}
          />
        ))}
      </ImageButtonWrapper>
    </BaseContainer>
  );
};

export default BaseStory5;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionBlue = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--blue);
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    margin: 5px;
    border-radius: 50%;
    box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 50%);
  }
`;
