import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../utils/constants';
// import dynamicData from '../reducers/dynamicData';
// import user from '../reducers/user';

const BaseStory = () => {
  // const character = useSelector((store) => store.dynamicData.character);
  // const elements = useSelector((store) => store.dynamicData.storyElements);
  const accessToken = useSelector((store) => store.user.accessToken);

  // const dispatch = useDispatch();

  //behöver vi passa in props? KAnske bara console.log först?
  // const onAnswerSubmit = () => {
  //   if (character) return;
  //   // preventing to add several answers to a question
  //   else {
  //     dispatch(character.actions.setSelectedCharacter({ character }));
  //   }
  // };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    };

    fetch(API_URL('element'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  //   fetch(API_URL('elements'), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         dispatch(elements.actions.setSelectedElements(data.response));
  //       } else {
  //         dispatch(elements.actions.setSelectedElements([]));
  //       }
  //     });
  // }, [accessToken]);

  return (
    <div>
      {/* <section className="base-story__part1">
        <p>
          `Det var en helt vanlig dag. Ingen hade kunnat ana det som skulle
          hända. ${character} var bara hemma och åt lite nötter, för det var $
          {character} s bästa grej att knapra på. Ja, förutom pinnar, chips och
          det översta lagret på lasagne. De var också bra grejer att knapra på.
          Men mitt i allt knaprande hörde ${character} någonting.`
        </p>
      </section>
      <div> */}
      <h3>Vad var det som lät?</h3>
      {/* <div className="button-wrapper">
        {question.options.map((item, index) => (
          <button
            className="option-buttons"
            key={item}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {item}
          </button>
        ))}
      </div> */}
      {/* </div> */}
      <section className="base-story__part2"></section>
      <section className="base-story__part3"></section>
      <section className="base-story__part4"></section>
      <section className="base-story__part5"></section>
    </div>
  );
};

export default BaseStory;

// ett LJUD. HUVUDPERSONEN stelnade till. Vad var det? Det kändes plötsligt lite KÄNSLA1. Men också KÄNSLA2.
// HUVUDPERSONEN sprang ut för att se var ljudet kom ifrån. Och nu hördes det igen. Ett LJUD.
// Men va?
// Det kommer ju från taket.
// HUVUDPERSONEN tänker att det är bäst att försöka ta sig upp på taket. Det har HUVUDPERSONEN inte gjort innan, men det kan väl inte vara så svårt? Men jag behöver nog ETT REDSKAP, tänker HUVUDPERSONEN. Inne i förrådet kan det nog finnas ETT REDSKAP. Åhhh det är så tungt att bära ut. Det hade varit lättare om jag haft en kompis.
// Till slut får HUVUDPERSONEN ut ETT REDSKAP från förrådet och tar sig närmare taket. Hej och hå. Det är tungt. Och KÄNSLA1.
// Det känns som att HUVUDPERSONEN är PÅ NÅT STÄLLE däruppe på taket. Allt ser liksom lite mystiskt och magiskt ut. Och nu hör ETT LJUD igen! Det kommer bakifrån skorstenen.
// HUVUDPERSONEN går runt (men försiktig, för det är ju jättehögt upp), och ser EN BIROLL. Där sitter EN BIROLL och skalar nötter. Tänk att ETT LJUD kom från de här små nötterna.
// – Hej, säger EN BIROLL. Jag heter BIROLLSNAMN. Vill du ha en nöt av mig?
// – hej, svarar HUVUDPERSONEN. Jättegärna. Jag älskar faktiskt nötter.
// – Det gör jag med. Och de här låter så roligt när man skalar dem, säger EN BIROLL.
// – Ja, jag vet, säger HUVUDPERSONEN och så skrattar de båda två.
