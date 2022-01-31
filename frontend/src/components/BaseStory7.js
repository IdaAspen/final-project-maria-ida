import React from 'react';
import { useSelector } from 'react-redux';
// import storyElements from '../reducers/storyElements';

const BaseStory7 = () => {
  const character = useSelector(
    (store) => store.storyElements.selectedCharacter?.name
  );

  // const elements = useSelector(
  //   (store) => store.storyElements.selectedElements?.name
  // );
  const elements = useSelector((store) => store.storyElements.selectedElements);
  // const accessToken = useSelector((store) => store.user.accessToken);

  // const onAnswerSubmit = (name) => {
  //   // + prevent to add several sounds to a story
  //   // if (character) return;
  //   dispatch(storyElements.actions.setSelectedElements({ element: name }));
  // };

  console.log(elements);
  return (
    <div className="base-container">
      <section className="base-story">
        <p>{`Jo, jag heter ${elements[5]?.element}. Vill du ha en nöt av mig? – hej, svarar ${character}. Jättegärna. Jag älskar faktiskt nötter. – Det gör jag med. Och de här låter så roligt när man skalar dem, säger ${elements[4]?.element}n. – Ja, jag vet, säger ${character} och så skrattar de båda två.`}</p>
      </section>
    </div>
  );
};

export default BaseStory7;
