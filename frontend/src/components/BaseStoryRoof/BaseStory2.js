import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import { showFeelings } from '../../reducers/dynamicData';
import { shuffleArray } from '../../utils/shuffleArray';
import ImageButton from '../../styledComponents/ImageButton';
import styled from 'styled-components';

const BaseStory2 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const feelings = useSelector((store) => store.dynamicData.feelings);

  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showFeelings());
  }, [dispatch]);

  const onAnswerSubmit = (name, image) => {
    dispatch(storyElements.actions.setSelectedFeeling({ name, image }));
    dispatch(storyElements.actions.setStoryPage());
  };
  console.log(feelings);
  return (
    <BaseContainer>
      <SectionOrange>
        <p>{`${sound.name}!!!! ${character} stelnade till. Vad var det? Det kändes plötsligt lite... `}</p>
      </SectionOrange>

      <h3>Hur kändes det?</h3>
      <ImageButtonWrapper>
        {shuffleArray(feelings).map((item) => (
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

export default BaseStory2;

const BaseContainer = styled.div`
  display: grid;
  padding: 2%;
  width: 80%;
  margin: 0 auto;

  h3 {
    margin-left: 2%;
  }
`;

const SectionOrange = styled.div`
  padding: 3% 9% 3%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
  min-height: 60vh;
  background-color: var(--orange);
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
