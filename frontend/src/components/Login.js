import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import user from '../reducers/user';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signup');
  const [error, setError] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
          setError('Sorry, invalid login or password.');
        }
      });
  };

  return (
    <>
      <label htmlFor="signup">Sign up</label>
      <input
        id="signup"
        type="radio"
        checked={mode === 'signup'}
        onChange={() => setMode('signup')}
      ></input>
      <label htmlFor="signin">Sign in</label>
      <input
        id="signin"
        type="radio"
        checked={mode === 'signin'}
        onChange={() => setMode('signin')}
      ></input>

      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">
          <h2>Username</h2>
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">
          <h2>Password</h2>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        <p> {error}</p>
      </form>
    </>
  );
};

////////////////////här är ordinarie login ////////////////////////////////////////////

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [mode, setMode] = useState('signup');

//   // const accessToken = useSelector((store) => store.user.accessToken);

//   const dispatch = useDispatch();

//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   if (accessToken) {
//   //     navigate('/');
//   //   }
//   // }, [accessToken, navigate]);

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     };

//     fetch(API_URL(mode), options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           batch(() => {
//             dispatch(user.actions.setUserId(data.response.userId));
//             dispatch(user.actions.setUsername(data.response.username));
//             dispatch(user.actions.setAccessToken(data.response.setAccessToken));
//             dispatch(user.actions.setError(null));
//           });
//         } else {
//           batch(() => {
//             dispatch(user.actions.setUserId(null));
//             dispatch(user.actions.setUsername(null));
//             dispatch(user.actions.setAccessToken(null));
//             dispatch(user.actions.setError(data.response));
//           });
//         }
//       });
//   };

//   return (
//     <>
//       <label htmlFor="signup">Signup</label>
//       <input
//         id="signup"
//         type="radio"
//         checked={mode === 'signup'}
//         onChange={() => setMode('signup')}
//       />
//       <label htmlFor="sigin">Signin</label>
//       <input
//         id="signin"
//         type="radio"
//         checked={mode === 'signin'}
//         onChange={() => setMode('signin')}
//       />
//       <form onSubmit={onFormSubmit}>
//         <label htmlFor="username" />
//         <input
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="password" />
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

export default Login;
