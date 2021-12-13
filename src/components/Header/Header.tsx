import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import './Header.scss';

const Header = () => {
  console.log(window.location.pathname);
  return (
    <header className="header">
      <div className="container header__wrap">
        <Navigation />
        {window.location.pathname === '/toys' && <Search />}
      </div>
    </header>
  );
};

export { Header };
