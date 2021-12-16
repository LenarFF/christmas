import React from 'react';
import './FilterCard.scss';

const FilterCard = ({
  children,
  title,
}: {
  children?: JSX.Element | string;
  title: string;
}): JSX.Element => (
  <div className="filter-card">
    <h3 className="filter-card__title">{title}</h3>
    {children}
  </div>
);

export { FilterCard };
