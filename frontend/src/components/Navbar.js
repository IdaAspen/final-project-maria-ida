import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Header from './Header';
import user from '../reducers/user';
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
    navigate('/bookshelf');
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
          <>
            <Link className="styled-link" to="/">
              <p onClick={onStartClick}>Start</p>
            </Link>
            <Link className="styled-link" to="/skapasaga">
              <p onClick={onCreateStoryClick}>Ny saga</p>
            </Link>
            <Link className="styled-link" to="/bokhylla">
              <p onClick={onBookshelfClick}>Bokhylla</p>
            </Link>
            <p className="navbar-text">
              inloggad som: <span>{username}</span>
            </p>
            {/* <button className="nav-button" onClick={onLogout}>
           Logout
         </button> */}
          </>
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
