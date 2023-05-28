import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import '../styles/layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div id="layout">
    <nav>
      <img src={require("../assets/logo-kasa.png")} alt="logo Kasa" />
      <ul>
         <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} >Accueil</Link> 
        <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active-link' : ''}>A propos</Link> 
      </ul>
    </nav>
      <div id="children">
        {children}
      </div>
      <footer>
      <img src={require("../assets/logo-footer.png")} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
