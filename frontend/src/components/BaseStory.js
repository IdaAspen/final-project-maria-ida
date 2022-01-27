import React, { useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import storyElements from '../reducers/storyElements';
import {
  showFeelings,
  showFriends,
  showFriendsNames,
  showPlaces,
  showSounds,
  showTools
} from '../reducers/dynamicData';
// import user from '../reducers/user';

const BaseStory = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );

  // const elements = useSelector(
  //   (store) => store.storyElements.selectedElements?.name
  // );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  const sounds = useSelector((store) => store.dynamicData.sounds);
  const feelings = useSelector((store) => store.dynamicData.feelings);
  const tools = useSelector((store) => store.dynamicData.tools);
  const places = useSelector((store) => store.dynamicData.places);
  const friends = useSelector((store) => store.dynamicData.friends);
  const friendsNames = useSelector((store) => store.dynamicData.friendsNames);
  // const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(showSounds());
      dispatch(showFeelings());
      dispatch(showTools());
      dispatch(showPlaces());
      dispatch(showFriends());
      dispatch(showFriendsNames());
    });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(showFeelings());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(showTools());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(showPlaces());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(showFriends());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(showFriendsNames());
  // }, [dispatch]);

  const onAnswerSubmit = (name) => {
    // + prevent to add several sounds to a story
    // if (character) return;
    dispatch(storyElements.actions.setSelectedElements({ element: name }));
  };

  console.log(elements);
  return (
    <div>
      <section className="base-story__part1">
        <p>
          {`Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle
          hända. ${character} var bara hemma och åt lite nötter, för det var ${character}s bästa grej att knapra på. Ja, förutom pinnar, chips och
          det översta lagret på lasagne. De var också bra grejer att knapra på.
          Men mitt i allt knaprande hörde ${character} någonting.`}
        </p>
      </section>

      <h3>Vad var det som lät?</h3>
      <div>
        {sounds.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="base-story__part2">{`${elements[0]?.element}!!!! ${character} stelnade till. Vad var det? Det kändes plötsligt lite `}</section>

      <h3>Hur kändes det?</h3>
      <div>
        {feelings.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="base-story__part3">
        <p>{`Det kändes lite ${elements[1]?.element}. ${character} sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett ${elements[0]?.element}. Men va? Det kommer ju från taket. ${character} tänker att det är bäst att försöka ta sig upp på taket. Det har ${character} inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog... `}</p>
      </section>

      <h3>Vadå?</h3>
      <div>
        {tools.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.image}
          </button>
        ))}
      </div>

      <section className="base-story__part3">
        <p>{`${elements[2]?.element}, tänker ${character}. Inne i förrådet kan det nog finnas ${elements[2]?.element}. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis. Till slut får ${character} ut ${elements[2]?.element} från förrådet och tar sig närmare taket. Hej och hå. Det är tungt. Och ${elements[1]?.element}. Det känns som att ${character} är...`}</p>
      </section>

      <h3>Vartdå?</h3>
      <div>
        {places.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="base-story__part4">
        <p>{`Ja precis, som att vara högst upp ${elements[3]?.element} däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ${elements[0]?.element} igen! Det kommer bakifrån skorstenen. ${character} går runt (men försiktig, för det är ju jättehögt upp), och ser`}</p>
      </section>

      <h3>Vem då?</h3>
      <div>
        {friends.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="base-story__part5">
        <p>{`  Där sitter en ${elements[4]?.element}  och skalar nötter. Tänk att ett ${elements[0]?.element} kom från de här små nötterna. – Hej, säger ${elements[4]?.element}n. Jag heter...`}</p>
      </section>

      <h3>Vad heter den?</h3>
      <div>
        {friendsNames.map((item) => (
          <button
            type="submit"
            className="option-buttons"
            key={item.name}
            onClick={() => onAnswerSubmit(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <section className="base-story__part6">
        <p>{`Jo, jag heter ${elements[5]?.element}. Vill du ha en nöt av mig? – hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter. – Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${elements[4]?.element}n. – Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>
      </section>
    </div>
  );
};

export default BaseStory;
