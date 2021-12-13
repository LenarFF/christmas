import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import { FilterCard } from '../FilterCard/FilterCard';
import { ValueFilterCardColor } from '../ValueFilterCardColor/ValueFilterCardColor';
import { ValueFilterCardForm } from '../ValueFilterCardForm/ValueFilterCardForm';
import { ValueFilterCardSize } from '../ValueFilterCardSize/ValueFilterCardSize';
import './ValueFilterCard.scss';

const ValueFilterCard = () => {
  const { isFavor, setIsFavor } = useContext(FilterContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavor = () => {
    setIsFavorite(!isFavorite);
    setIsFavor(isFavorite);
  };

  return (
    <FilterCard title="Фильтры по значению">
      <div className="filter-card__controls">
        <ValueFilterCardForm />
        <ValueFilterCardColor />
        <ValueFilterCardSize />
        <p className="filter-card__filter">
          <span>Только любимые:</span>
          <input type="checkbox" checked={isFavor} onChange={handleFavor} />
        </p>
      </div>
    </FilterCard>
  );
};

export { ValueFilterCard };
