import React, { useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import user from '../reducers/user';
// import { API_URL } from '../utils/constants';

const Main = () => {
  // const secretsItems = useSelector((store) => store.secrets.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function for logout using local storage
  const logout = () => {
    batch(() => {
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setAccessToken(null));

      localStorage.removeItem('user');
    });
  };

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

  // mapping over secret reducer
  return (
    <div>
      <h1>It's a secret!</h1>
      {/* <img src={secret} alt="super secret" />

      {secretsItems.map((secret) => (
        <div key={secret.id}>{secret.text}</div>
      ))} */}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Main;
