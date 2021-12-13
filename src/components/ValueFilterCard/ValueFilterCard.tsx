import React from 'react';
import { FilterCard } from '../FilterCard/FilterCard';
import './ValueFilterCard.scss';

const ValueFilterCard = () => {
  return (
    <FilterCard title="Фильтры по значению">
      <div className="filter-card__controls">
        <p className="filter-card__filter">
          <span>Форма:</span>
        </p>
        <p className="filter-card__filter">
          <span>Цвет:</span>
        </p>
        <p className="filter-card__filter">
          <span>Размер:</span>
        </p>
        <p className="filter-card__filter">
          <span>Только любимые:</span>
        </p>
      </div>
    </FilterCard>
  );
}

export  {ValueFilterCard}
