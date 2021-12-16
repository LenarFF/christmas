import React from 'react';
import './Filter.scss';

const Filter = ({ title, buttons }: { title: string; buttons: JSX.Element[] }): JSX.Element => (
  <div className="filter-card__filter-wrap">
    <span className="filter-card__title">{title}</span>
    <div className="filter-card__buttons">{...buttons}</div>
  </div>
);

export { Filter };
