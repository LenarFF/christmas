import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrap">
        <Navigation />
      </div>
    </header>
  );
};

export { Header };
