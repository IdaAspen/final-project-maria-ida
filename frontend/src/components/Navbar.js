import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import Header from './Header';
import user from '../reducers/user';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);
  const wrapperRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const showMenu = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const onLogout = () => {
    // dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setAccessToken(null));
    navigate('/');
  };

  const onCreateStoryClick = () => {
    navigate('/skapasaga');
    setVisible(false);
  };
  const onBookshelfClick = () => {
    navigate('/bookshelf');
    setVisible(false);
  };
  const onStartClick = () => {
    navigate('/');
    setVisible(false);
  };

  const OutsideOfMenu = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  OutsideOfMenu(wrapperRef);

  const links = [
    { name: 'Start', path: '/' },
    { name: 'Skapa saga', path: '/skapasaga' },
    { name: 'Bokhylla', path: '/bokhylla' },
    { name: 'Om projektet', path: '/om' }
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
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </nav>
    );
  }
};

export default Navbar;

// {
/* <header>
      <Link to="/">
        <div>Logo klicka till hem</div>
      </Link>
      {visible && (
        <>
          <nav className="styled-nav" ref={wrapperRef}>
            {!accessToken ? (
              <>
                <Link to="/">
                  <p onClick={() => setVisible(false)}>Logga in</p>
                </Link>
                <Link to="/om">
                  <p onClick={() => setVisible(false)}>Om</p>
                </Link>
              </>
            ) : (
              <>
                <div>
                  <p onClick={onStartClick}>Start</p>
                  <p onClick={onCreateStoryClick}>Skapa saga</p>
                  <p onClick={onBookshelfClick}>Bokhylla</p>
                  <p onClick={onLogout}>Logga ut</p>
                </div>
              </>
            )}
          </nav>
        </>
      )}
      <nav className="styled-nav">
        <ul className="styled-list">
          {!accessToken && <Link to="/">Logga in</Link>}
          <div>
            {accessToken && <Link to="/">Start</Link>}
            {accessToken && (
              // <button onClick={() => navigate("")}></button>
              <Link to="/skapasaga">Skapa saga</Link>
            )}
            {/* {accessToken && <button></button>} */
// }
//         {accessToken && (
//           //  <button onClick={onLogOut}>Logga ut</button>
//           <Link to="/" onClick={onLogout}>
//             Log out
//           </Link>
//         )}
//       </div>
//     </ul>
//     <ul>{!accessToken && <Link to="/om">om</Link>}</ul>
//   </nav>
//   {!accessToken ? (
//     <div className="hamburger-wrapper" onClick={showMenu}>
//       <div className="hamburger"></div>
//       <div className="hamburger"></div>
//       <div className="hamburger"></div>
//     </div>
//   ) : (
//     <div className="img-container" onClick={showMenu}>
//       {/* <FaUserCircle style={{ height: 35, width: 35, color: "#56baa0" }} /> */}

//       <img src={require()} alt="img här" />
//       <div className="user">{username}</div>
//     </div>
//   )}
// </header> */}
