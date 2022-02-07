import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storyElements from '../reducers/storyElements';
import './main.css';
// import { API_URL } from '../utils/constants';

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If not having accessToken, redirect to login
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: accessToken
  //     }
  //   };

  //   fetch(API_URL('main'), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log('HURRA');
  //         //   dispatch(thoughts.actions.setItems(data.response));
  //         //   dispatch(thoughts.actions.setError(null));
  //         // } else {
  //         //   dispatch(thoughts.actions.setItems([]));
  //         //   dispatch(thoughts.actions.setError(data.response));
  //       }
  //     });
  // }, [accessToken]);

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    // setVisible(false);
    dispatch(storyElements.actions.restartGame());
  };
  const onBookshelfClick = () => {
    navigate('/bokhylla');
    // setVisible(false);
  };

  return (
    <div className="main-container">
      <div className="main-text">
        <h1>{`Hej ${username}!`}</h1>
        <p>Vad vill du göra?</p>
      </div>
      <div className="main-btn">
        <button className="story-btn" onClick={onCreateStoryClick}>
          Ny saga
        </button>
        <button className="story-btn" onClick={onBookshelfClick}>
          Min bokhylla
        </button>
      </div>
    </div>
  );
};

export default Main;
