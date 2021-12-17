import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardFavorite.scss';

const ValueFilterCardFavorite = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);

  const handleFavor = () => {
    setAppState({ ...appState, isFavor: !appState.isFavor });
  };

  return (
    <li className="filter-card__filter">
      <span>Только любимые:</span>
      <input
        className="filter-card__favorite-checkbox"
        type="checkbox"
        checked={appState.isFavor}
        onChange={handleFavor}
        id="favorite"
      />
      <label
        htmlFor="favorite"
        className={
          appState.isFavor
            ? 'filter-card__favorite-label filter-card__favorite-label_checked'
            : 'filter-card__favorite-label'
        }
      />
    </li>
  );
};

export { ValueFilterCardFavorite };
