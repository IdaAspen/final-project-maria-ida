import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../reducers/storyElements';
import { story } from '../reducers/story';
import { onPostStory } from '../reducers/story';
import StoryButton from '../styledComponents/StoryButton';
import styled from 'styled-components';

const Summary = () => {
  const username = useSelector((store) => store.user.username);
  // const userId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling
  );
  const tool = useSelector(
    (store) => store.storyElements.selectedElements.tool
  );
  const place = useSelector(
    (store) => store.storyElements.selectedElements.place
  );
  const friend = useSelector(
    (store) => store.storyElements.selectedElements.friend
  );
  const friendsName = useSelector(
    (store) => store.storyElements.selectedElements.friendsName
  );
  const selectedElements = useSelector(
    (store) => store.storyElements.selectedElements
  );
  // const savedElements = useSelector((store) => store.story.savedElementsArray);
  // const savedCharacter = useSelector((store) => store.story.savedCharacter);

  const storyArray = selectedElements;
  const storyCharacter = character;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSave = () => {
    batch(() => {
      dispatch(onPostStory(accessToken, storyArray, storyCharacter));
      dispatch(story.actions.setSavedElementsArray(storyArray));
      dispatch(story.actions.setSavedCharacter(storyCharacter));
    });
    navigate('/bokhylla');
  };

  const onRestart = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/skapasaga');
  };

  console.log('SELECTED ELEMETS', selectedElements);
  console.log('STORY ARRAY', storyArray);
  console.log('SAVED CHARACTER', storyCharacter);

  return (
    <SummarySection>
      <h2>{`Sagan om ${character.name}s första äventyr`}</h2>
      <h3>{`- En saga av ${username} och sagomaskinen`}.</h3>
      <ImageContainer>
        <img src={character.image} alt={character.name} />
      </ImageContainer>
      <p>{`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle hända. ${character.name} var bara hemma och åt lite nötter, för det var ${character.name}s bästa grej att knapra på. Ja, förutom pinnar, chips och det översta lagret på lasagne. De var också bra grejer att knapra på.
      Men mitt i allt knaprande hörde ${character.name} någonting.`}</p>
      <p>{`${sound.name}!!!! 
      ${character.name} stelnade till. Vad var det? 
      Det kändes plötsligt lite ${feeling.name}. 
      ${character.name} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${sound.name}. Men va? Det kommer ju från taket. ${character.name} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character.name} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog...`}</p>
      <ImageContainer>
        <img src={tool.image} alt={tool.name} />
      </ImageContainer>
      <p>{`...${tool.name}, tänker ${character.name}. 
      Inne i förrådet kan det nog finnas ${tool.name}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. 
      Till slut får ${character.name} ut ${tool.name} från förrådet och tar sig närmare taket.`}</p>
      <div className="img-container">
        <img src={feeling.image} alt={feeling.name} />
      </div>
      <p>{`Hej och hå. Det är tungt. Och ${feeling.name}. Det känns som att ${character.name} är högst upp ${place.name} däruppe på taket.`}</p>
      <ImageContainer>
        <img src={place.image} alt={place.name} />
      </ImageContainer>
      <p>{` Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${sound.name} igen! Det kommer bakifrån skorstenen. ${character.name} går runt (men försiktig, för det är ju jättehögt upp), och ser en ${friend.name} som skalar nötter. 
      Tänk att ett ${sound.name} kom från de här små nötterna.`}</p>
      <p>{`– Hej, säger ${friend.name}n. Jag heter ${friendsName.name}. Vill du ha en nöt av mig?`}</p>
      <p>{`– hej, svarar ${character.name}. Jättegärna. Jag älskar faktiskt nötter.`}</p>
      <p>{`– Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${friend.name}n.`}</p>
      <p>{`– Ja, jag vet, säger ${character.name} och så skrattar de båda två.`}</p>
      <StoryButton onClick={onRestart} text="Börja om" />
      <StoryButton onClick={onSave} text="Spara saga" />
    </SummarySection>
  );
};

export default Summary;

const SummarySection = styled.section`
  padding: 15% 5%;
  width: 80%;
  margin: 0 auto;
  background-color: var(--links);

  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgb(66 66 66 / 16%);
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
