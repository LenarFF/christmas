import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import { FilterCard } from '../FilterCard/FilterCard';
import { ValueFilterCardForm } from '../ValueFilterCardForm/ValueFilterCardForm';
import './ValueFilterCard.scss';

const ValueFilterCard = () => {
  const {isFavor, setIsFavor} = useContext(FilterContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavor = () => {
    setIsFavorite(!isFavorite);
    setIsFavor(isFavorite);
  };

  return (
    <FilterCard title="Фильтры по значению">
      <div className="filter-card__controls">
        <ValueFilterCardForm/>
        <p className="filter-card__filter">
          <span>Цвет:</span>
        </p>
        <p className="filter-card__filter">
          <span>Размер:</span>
        </p>
        <p className="filter-card__filter">
          <span>Только любимые:</span>
          <input type="checkbox" checked={isFavor} onChange={handleFavor} />
        </p>
      </div>
    </FilterCard>
  );
}

export  {ValueFilterCard}
