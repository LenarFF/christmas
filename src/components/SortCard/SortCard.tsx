import React, { useContext } from 'react';
import { FilterContext, state } from '../../context';
import { FilterCard } from '../FilterCard/FilterCard';
import './SortCard.scss';

const SortCard = () => {

  const { appState, setAppState } = useContext(FilterContext);

  return (
    <FilterCard title="Сортировка">
      <div className="sort-card">
        <select className="sort-card__select">
          <option className="sort-card__option" defaultValue="По названию от «А» до «Я»">
            По названию от «А» до «Я»
          </option>
          <option className="sort-card__option">По названию от «Я» до «А»</option>
          <option className="sort-card__option">По количеству по возрастанию</option>
          <option className="sort-card__option">По количеству по убыванию</option>
        </select>
        <button onClick={() => setAppState({...state})} className="sort-card__clear">Сброс фильтров</button>
      </div>
    </FilterCard>
  );
};

export { SortCard };
