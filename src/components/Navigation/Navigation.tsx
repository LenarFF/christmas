import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(): JSX.Element {
  const setActive = ({ isActive } : {isActive: boolean}) => (isActive ? ' active' : '');
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={setActive}>
            toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/tree" className={setActive}>
            tree
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
