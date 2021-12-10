import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import './Navigation.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav__link nav__link_active' : 'nav__link';

function Navigation(): JSX.Element {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/toys">toys</CustomLink>
        </li>
        <li>
          <CustomLink to="/tree">tree</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
