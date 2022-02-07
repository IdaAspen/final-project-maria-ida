import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

// importing HamburgerMenu to NavBar
const Navbar = () => {
  const username = useSelector((store) => store.user.username);
  const accessToken = useSelector((store) => store.user.accessToken);

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
