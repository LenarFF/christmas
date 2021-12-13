import React from 'react'
import { FilterCard } from '../FilterCard/FilterCard';
import { RangeFilter } from '../RangeFilter/RangeFilter';
import './RangeFilterCard.scss'

const RangeFilterCard = () => {
  return (
    <FilterCard title="Фильтры по диапазону">
      <div className="filter-card__ranges-wrap">
        <RangeFilter title="Количество экземпляров:" min={1} max={12} />
        <RangeFilter title="Год приобретения:" min={1940} max={2020} />
      </div>
    </FilterCard>
  );
}

export  {RangeFilterCard}
