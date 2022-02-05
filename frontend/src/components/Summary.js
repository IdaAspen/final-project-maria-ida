import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../reducers/storyElements';

const Summary = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );
  const sound = useSelector(
    (store) => store.storyElements.selectedElements.sound.name
  );
  const feeling = useSelector(
    (store) => store.storyElements.selectedElements.feeling.name
  );
  const tool = useSelector(
    (store) => store.storyElements.selectedElements.tool.name
  );
  const place = useSelector(
    (store) => store.storyElements.selectedElements.place.name
  );
  const friend = useSelector(
    (store) => store.storyElements.selectedElements.friend.name
  );
  const friendsName = useSelector(
    (store) => store.storyElements.selectedElements.friendsName.name
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/skapasaga');
  };

  const save = () => {
    // add code here
    // use navigate?
  };

  return (
    <section className="summary">
      <h2>HEJÅHÅ</h2>
      <p>{`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle hända. ${character} var bara hemma och åt lite nötter, för det var ${character}s bästa grej att knapra på. Ja, förutom pinnar, chips och det översta lagret på lasagne. De var också bra grejer att knapra på.
      Men mitt i allt knaprande hörde ${character} någonting.`}</p>

      <p>{`${sound}!!!! 
      ${character} stelnade till. Vad var det? 
      Det kändes plötsligt lite ${feeling}. 
      ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${sound}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog...`}</p>

      <p>{`...en ${tool}, tänker ${character}. 
      Inne i förrådet kan det nog finnas ${tool}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. 
      Till slut får ${character} ut ${tool} från förrådet och tar sig närmare taket.`}</p>

      <p>{`Hej och hå. Det är tungt. Och ${feeling}. Det känns som att ${character} är högst upp ${place} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${sound} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser en ${friend} som skalar nötter. 
      Tänk att ett ${sound} kom från de här små nötterna.`}</p>
      <p>{`– Hej, säger ${friend}n. Jag heter ${friendsName}. Vill du ha en nöt av mig?`}</p>
      <p>{`– hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter.`}</p>
      <p>{`– Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${friend}n.`}</p>
      <p>{`– Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>

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
