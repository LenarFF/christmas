import React from 'react';
import './FilterCard.scss';

interface FilterCardProps {
  children?: JSX.Element | string;
  title: string;
}

const FilterCard = ({ children, title }: FilterCardProps): JSX.Element => (
  <div className="filter-card">
    <h3 className="filter-card__title">{title}</h3>
    {children}
  </div>
);

export { FilterCard };
