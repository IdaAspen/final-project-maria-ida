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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
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
    <div className="login-bg">
      <div className="start-card">
        {/* <h1>SAGOMASKINEN</h1>
        <h2>
          Följ med in i sagomaskinens värld och bestäm ingredienserna i din egen
          saga.
        </h2> */}
        <img
          className="start-img"
          src="https://res.cloudinary.com/cloudinary-story/image/upload/v1644223877/storyimg/soglivvtho5tsg7ptigf.jpg"
          alt="huvudbild"
        ></img>
      </div>
      <div className="login-form card">
        <label htmlFor="signup">Registrera dig</label>
        <input
          id="signup"
          type="radio"
          checked={mode === 'signup'}
          onChange={() => setMode('signup')}
        ></input>
        <label htmlFor="signin">Logga in</label>
        <input
          id="signin"
          type="radio"
          checked={mode === 'signin'}
          onChange={() => setMode('signin')}
        ></input>

        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">{/* <h3>Användarnamn</h3> */}</label>
          <input
            id="username"
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password">{/* <h3>Lösenord</h3> */}</label>
          <input
            id="password"
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="login-signup-btn"
            type="submit"
            disabled={password.length < 8 || password.length > 20}
          >
            Logga in
          </button>
          <p> {error}</p>
        </form>
      </div>
      {/* <a
        className="login-attribute"
        href="https://www.vecteezy.com/free-vector/wallpaper"
      >
        Wallpaper Vectors by Vecteezy
      </a> */}
    </div>
  );
};

export default Login;

// return (
//   <div className="login-bg">
//     <div className="card">
//       <h1>Sagomaskinen</h1>
//       <h2>- För små viljestarka sagolyssnarne</h2>
//     </div>
//     <div className="login-form card">
//       <label htmlFor="signup">Registrera dig</label>
//       <input
//         id="signup"
//         type="radio"
//         checked={mode === 'signup'}
//         onChange={() => setMode('signup')}
//       ></input>
//       <label htmlFor="signin">Logga in</label>
//       <input
//         id="signin"
//         type="radio"
//         checked={mode === 'signin'}
//         onChange={() => setMode('signin')}
//       ></input>

//       <form onSubmit={onFormSubmit}>
//         <label htmlFor="username">
//           <h3>Användarnamn</h3>
//         </label>
//         <input
//           id="username"
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         ></input>
//         <label htmlFor="password">
//           <h3>Lösenord</h3>
//         </label>
//         <input
//           id="password"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <button type="submit">Login</button>
//         <p> {error}</p>
//       </form>
//     </div>
//     {/* <a
//       className="login-attribute"
//       href="https://www.vecteezy.com/free-vector/wallpaper"
//     >
//       Wallpaper Vectors by Vecteezy
//     </a> */}
//   </div>
// );
