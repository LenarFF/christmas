import React from 'react';
import './Filter.scss';

interface FilterProps {
  title: string;
  buttons: JSX.Element[];
}

const Filter = ({ title, buttons }: FilterProps): JSX.Element => (
  <div className="filter-card__filter-wrap">
    <span className="filter-card__title">{title}</span>
    <div className="filter-card__buttons">{...buttons}</div>
  </div>
);

export { Filter };
