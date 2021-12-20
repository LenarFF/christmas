import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './CustomLink.scss';

interface CustomLinkProps {
  children: JSX.Element | string;
  to: string;
}

const CustomLink = ({ children, to, ...props }: CustomLinkProps): JSX.Element => {
  const match = useMatch(to);

  return (
    <Link to={to} {...props} className={match ? 'nav__link nav__link_active' : 'nav__link'}>
      {children}
    </Link>
  );
};

export { CustomLink };
