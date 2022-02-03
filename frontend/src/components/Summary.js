import React from 'react';
import { useSelector } from 'react-redux';
import storyElements from '../reducers/storyElements';

const Summary = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter.name
  );

  const elements = useSelector((store) => store.storyElements.selectedElements);

  const restart = () => {
    // add code here
    // use navigate?
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

      <p>{`${elements[0]?.element}!!!! 
      ${character} stelnade till. Vad var det? 
      Det kändes plötsligt lite ${elements[1]?.element}. 
      ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${elements[0]?.element}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog...`}</p>

      <p>{`...en ${elements[2]?.element}, tänker ${character}. 
      Inne i förrådet kan det nog finnas ${elements[2]?.element}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. 
      Till slut får ${character} ut ${elements[2]?.element} från förrådet och tar sig närmare taket.`}</p>

      <p>{`Hej och hå. Det är tungt. Och ${elements[1]?.element}. Det känns som att ${character} är högst upp ${elements[3]?.element} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${elements[0]?.element} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser en ${elements[4]?.element} som skalar nötter. 
      Tänk att ett ${elements[0]?.element} kom från de här små nötterna.`}</p>
      <p>{`– Hej, säger ${elements[4]?.element}n. Jag heter ${elements[5]?.element}. Vill du ha en nöt av mig?`}</p>
      <p>{`– hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter.`}</p>
      <p>{`– Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${elements[4]?.element}n.`}</p>
      <p>{`– Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>

      <button className="restart-button" onClick={restart}>
        Börja om
      </button>
      <button className="restart-button" onClick={save}>
        Spara saga
      </button>
    </section>
  );
};

export default Summary;
