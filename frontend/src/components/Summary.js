import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../reducers/storyElements';
import user from '../reducers/user';
import './summary.css';

const Summary = () => {
  const username = useSelector((store) => store.user.username);
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/skapasaga');
  };

  const save = () => {
    // add code here
  };

  return (
    <section className="summary">
      <h2>{`Sagan om ${character.name}s första äventyr`}</h2>
      <h3>{`- En saga av ${username} och sagomaskinen`}.</h3>
      <img src={character.image} alt="character" />
      <p>{`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle hända. ${character.name} var bara hemma och åt lite nötter, för det var ${character.name}s bästa grej att knapra på. Ja, förutom pinnar, chips och det översta lagret på lasagne. De var också bra grejer att knapra på.
      Men mitt i allt knaprande hörde ${character.name} någonting.`}</p>

      <p>{`${sound.name}!!!! 
      ${character.name} stelnade till. Vad var det? 
      Det kändes plötsligt lite ${feeling.name}. 
      ${character.name} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${sound.name}. Men va? Det kommer ju från taket. ${character.name} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character.name} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog...`}</p>
      <img src={tool.image} alt="tool" />
      <p>{`...${tool.name}, tänker ${character.name}. 
      Inne i förrådet kan det nog finnas ${tool.name}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. 
      Till slut får ${character.name} ut ${tool.name} från förrådet och tar sig närmare taket.`}</p>

      <p>{`Hej och hå. Det är tungt. Och ${feeling.name}. Det känns som att ${character.name} är högst upp ${place.name} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${sound.name} igen! Det kommer bakifrån skorstenen. ${character.name} går runt (men försiktig, för det är ju jättehögt upp), och ser en ${friend.name} som skalar nötter. 
      Tänk att ett ${sound.name} kom från de här små nötterna.`}</p>
      <p>{`– Hej, säger ${friend.name}n. Jag heter ${friendsName.name}. Vill du ha en nöt av mig?`}</p>
      <p>{`– hej, svarar ${character.name}. Jättegärna. Jag älskar faktiskt nötter.`}</p>
      <p>{`– Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${friend.name}n.`}</p>
      <p>{`– Ja, jag vet, säger ${character.name} och så skrattar de båda två.`}</p>

      <button className="story-btn" onClick={onRestart}>
        Börja om
      </button>
      <button className="story-btn" onClick={save}>
        Spara saga
      </button>
    </section>
  );
};

export default Summary;
