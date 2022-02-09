import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import user from '../reducers/user';
import styled from 'styled-components';
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
    <LoginContainer>
      <StartCard>
        {/* <h1>SAGOMASKINEN</h1>
        <h2>
          Följ med in i sagomaskinens värld och bestäm ingredienserna i din egen
          saga.
        </h2> */}
        <StartImage
          src="https://res.cloudinary.com/cloudinary-story/image/upload/v1644223877/storyimg/soglivvtho5tsg7ptigf.jpg"
          alt="huvudbild"
        ></StartImage>
      </StartCard>
      <LoginCard>
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

        <Form onSubmit={onFormSubmit}>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <LoginButton disabled={password.length < 8 || password.length > 20}>
            Logga in
          </LoginButton>
          <p> {error}</p>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 70vh;
  display: grid;
  align-items: center;
  padding: 2% 10% 10% 10%;
  background-color: var(--background);
`;

const StartCard = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StartImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 0%;
  box-shadow: none;
  margin: 0 auto;
  padding-bottom: 2%;
  display: flex;
`;

const LoginCard = styled.div`
  padding: 10%;
  box-shadow: 0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);
  border-radius: 6px;
  background-color: var(--yellow);
`;

const LoginButton = styled.button.attrs({ type: 'submit' })`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: black;
  background-color: #d5e5c6;
  border-color: #d5e5c6;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: #d5e5c6;
    background-color: black;
    border-color: black;
  }
  &:disabled {
    color: #888;
    cursor: not-allowed;
    background-color: rgba(213, 229, 198, 0.8);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--yellow);

  input,
  button,
  label {
    margin: 5px;
  }
`;
