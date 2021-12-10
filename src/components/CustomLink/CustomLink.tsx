import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './CustomLink.scss';

const CustomLink = ({ children, to, ...props }: { children: JSX.Element | string; to: string }) => {
  const match = useMatch(to);

  return (
    <Link to={to} {...props} className={match ? 'nav__link nav__link_active' : 'nav__link'}>
      {children}
    </Link>
  );
};

export { CustomLink };
