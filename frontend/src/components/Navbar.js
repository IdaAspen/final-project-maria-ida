import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';
import Header from './Header';
import user from '../reducers/user';

// const NavList = styled.ul`
//   display: flex;

//   a {
//     text-decoration: none;
//   }

//   li {
//     color: var(--navActive);
//     margin: 0 0.8rem;
//     font-size: 1.3rem;
//     position: relative;
//     list-style: none;
//   }

//   .current {
//     li {
//       border-bottom: 2px solid black;
//     }
//   }
// `;

const Navbar = () => {
  const username = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setAccessToken(null));
    navigate('/');
  };

  const links = [
    { name: 'Start', path: '/' },
    { name: 'Skapa saga', path: '/skapasaga' },
    { name: 'Bokhylla', path: '/bokhylla' }
  ];
  if (!accessToken) {
    return <Header />;
  } else {
    return (
      <nav>
        <ul>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={(navData) => (navData.isActive ? 'current' : '')}
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
        <p className="navbar-text">
          inloggad som: <span>{username}</span>
        </p>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </nav>
    );
  }
};

export default Navbar;
