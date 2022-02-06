import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';
// import user from '../reducers/user';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import storyElements from '../reducers/storyElements';

const Navbar = () => {
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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

  // const links = [
  //   { name: 'Start', path: '/' },
  //   { name: 'Skapa saga', path: '/skapasaga' },
  //   { name: 'Bokhylla', path: '/bokhylla' },
  //   { name: 'Om sagoväljaren', path: '/om' }
  // ];
  // if (!accessToken) {
  //   return <Header />;
  // } else {
  return (
    <>
      <nav>
        <BurgerMenu />
        {accessToken && (
          <p className="navbar-text">
            inloggad som: <span>{username}</span>
          </p>
        )}
      </nav>
    </>
  );
};
// };

export default Navbar;

// if (!accessToken) {
//   return <Header />;
// } else {
//   return (
//     <nav>
//       <ul>
//         {links.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             className={(navData) => (navData.isActive ? 'current' : '')}
//           >
//             <li>{link.name}</li>
//           </NavLink>
//         ))}
//       </ul>
//       <p className="navbar-text">
//         inloggad som: <span>{username}</span>
//       </p>
//       <button className="logout-button" onClick={onLogout}>
//         Logout
//       </button>
//     </nav>
//   );
// }
