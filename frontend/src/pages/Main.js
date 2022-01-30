import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateStory from '../components/CreateStory';
import Navbar from '../components/Navbar';
import './main.css';
// import { API_URL } from '../utils/constants';

const Main = () => {
  // const secretsItems = useSelector((store) => store.secrets.items);
  const accessToken = useSelector((store) => store.user.accessToken);
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

  // Shows two buttons BOOKSHELF or CREATE STORY
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <CreateStory />
      </div>
    </div>
  );
};

export default Main;
