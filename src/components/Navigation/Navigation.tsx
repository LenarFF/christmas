import React from 'react';
import { CustomLink } from '../CustomLink/CustomLink';
import './Navigation.scss';

function Navigation(): JSX.Element {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__li">
          <CustomLink to="/">
            <div className="nav__tree"></div>
          </CustomLink>
        </li>
        <li className="nav__li">
          <CustomLink to="/toys">Игрушки</CustomLink>
        </li>
        <li className="nav__li">
          <CustomLink to="/tree">Ёлка</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
export  {Navigation};
