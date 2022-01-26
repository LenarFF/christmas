import React, { useContext } from 'react';
import { FilterContext, state } from '../../context';
import { FilterCard } from '../FilterCard/FilterCard';
import './SortCard.scss';

const SortCard = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);

  const handleChange = (value: string): void => {
    setAppState({ ...appState, sort: value });
  };

  return (
    <FilterCard title="Сортировка">
      <div className="sort-card">
        <select
          value={appState.sort}
          onChange={(e) => handleChange(e.target.value)}
          className="sort-card__select"
        >
          <option value="sortByName" className="sort-card__option">
            По названию от «А» до «Я»
          </option>
          <option value="sortByNameReverse" className="sort-card__option">
            По названию от «Я» до «А»
          </option>
          <option value="sortByCount" className="sort-card__option">
            По количеству по возрастанию
          </option>
          <option value="sortByCountReverse" className="sort-card__option">
            По количеству по убыванию
          </option>
        </select>
        <button onClick={() => setAppState({ ...state, favorites: appState.favorites })} className="sort-card__clear">
          Сброс фильтров
        </button>
      </div>
    </FilterCard>
  );
};

export { SortCard };
