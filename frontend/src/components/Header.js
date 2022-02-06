import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Tjusig header</h1>
      <div className="header-links">
        <Link to="/om">Om Sagoväljaren</Link>
      </div>
    </header>
  );
};

export default Header;
