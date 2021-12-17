import React from 'react';
import { FilterCard } from '../FilterCard/FilterCard';
import { ValueFilterCardColor } from '../ValueFilterCardColor/ValueFilterCardColor';
import { ValueFilterCardFavorite } from '../ValueFilterCardFavorite/ValueFilterCardFavorite';
import { ValueFilterCardForm } from '../ValueFilterCardForm/ValueFilterCardForm';
import { ValueFilterCardSize } from '../ValueFilterCardSize/ValueFilterCardSize';
import './ValueFilterCard.scss';

const ValueFilterCard = (): JSX.Element => (
  <FilterCard title="Фильтры по значению">
    <ul className="filter-card__controls">
      <ValueFilterCardForm />
      <ValueFilterCardColor />
      <ValueFilterCardSize />
      <ValueFilterCardFavorite />
    </ul>
  </FilterCard>
);

export { ValueFilterCard };
