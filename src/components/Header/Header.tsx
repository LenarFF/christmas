import React from 'react';
import { useLocation } from 'react-router-dom';
import {Navigation} from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import { SelectToys } from '../SelectToys/SelectToys';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrap">
        <Navigation />
        <div className="header__controls">
          {useLocation().pathname === '/toys' && <Search />}
          <SelectToys />
        </div>
      </div>
    </header>
  );
};

export { Header };
