import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { API_URL } from '../utils/constants';
import { dynamicData, showCharacters } from '../reducers/dynamicData';
// import user from '../reducers/user';

const CreateStory = () => {
  const characterList = useSelector(
    (store) => store.dynamicData.items[0]?.list
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCharacters());
  }, [dispatch]);
  // const elements = useSelector((store) => store.dynamicData.storyElements);
  // const accessToken = useSelector((store) => store.user.accessToken);
  // const [characterList, setCharacterList] = useState([]);

  //behöver vi passa in props? KAnske bara console.log först?
  // const onAnswerSubmit = () => {
  //   if (character) return;
  //   // preventing to add several answers to a question
  //   else {
  //     dispatch(character.actions.setSelectedCharacter({ character }));
  //   }
  // };
  console.log(characterList);
  return (
    <>
      <div>
        <h2>Välj din huvudroll i sagan!</h2>
        <div>
          {characterList?.map((item) => (
            <button
              type="submit"
              className="option-buttons"
              key={item}
              // onClick={() => onAnswerSubmit(question.id, index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateStory;

// useEffect(() => {
//   const options = {
//     method: 'GET',
//     headers: {
//       Authorization: accessToken
//     }
//   };

//   fetch(API_URL('element'), options)
//     .then((res) => res.json())
//     .then((data) => {
//       setCharacterList(data.response[0].list);
//     });
// }, [accessToken]);
// console.log(characterList);

// return (
//   <div>
//     <h2>Välj din huvudroll i sagan!</h2>
//     <p></p>
//     <div>
//       {characterList.map((item) => (
//         <button
//           type="submit"
//           className="option-buttons"
//           key={item}
//           // onClick={() => onAnswerSubmit(question.id, index)}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>
// );
// };
