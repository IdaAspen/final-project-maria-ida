import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import storyElements from '../../reducers/storyElements';
import user from '../../reducers/user';

const BurgerList = (ref, { close }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  // const forwardRef = useRef(null);

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    // setVisible(false);
    dispatch(storyElements.actions.restartGame());
  };
  const onBookshelfClick = () => {
    navigate('/bokhylla');
    // setVisible(false);
  };
  const onStartClick = () => {
    dispatch(storyElements.actions.restartGame());
    navigate('/');
    // setVisible(false);
  };
  const onAboutClick = () => {
    navigate('/om');
    // setVisible(false);
  };
  const onLogout = () => {
    //  dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setAccessToken(null));
    navigate('/');
  };

  const onLogin = () => {
    navigate('/');
  };

  if (!accessToken) {
    return (
      <div className="menu">
        {/* <div className="menu" ref={forwardRef}> */}
        <ul>
          <li onClick={close}>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onLogin}>Logga in/Skapa konto</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link
              to="/om"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onAboutClick}>Om sagoväljaren</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <ul>
          <li onClick={close}>
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onStartClick}>Start</p>
            </Link>
          </li>
          <li onClick={close}>
            {' '}
            <Link
              to="/skapasaga"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onCreateStoryClick}>Ny saga</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link
              to="/bokhylla"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onBookshelfClick}>Bokhylla</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link
              to="/om"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onAboutClick}>Om sagoväljaren</p>
            </Link>
          </li>
          <li onClick={close}>
            <Link
              to="/login"
              className={({ isActive }) =>
                isActive ? 'menu-link-active' : 'menu-link'
              }
            >
              <p onClick={onLogout}>Logga ut</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default BurgerList;
