import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardFavorite.scss';

const ValueFilterCardFavorite = () => {
  const { isFavor, setIsFavor } = useContext(FilterContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavor = () => {
    setIsFavorite(!isFavorite);
    setIsFavor(isFavorite);
  };

  return (
    <div className="filter-card__filter">
      <span>Только любимые:</span>
      <input
        className="filter-card__favorite-checkbox"
        type="checkbox"
        checked={isFavor}
        onChange={handleFavor}
        id="favorite"
      />
      <label
        htmlFor="favorite"
        className={
          isFavor
            ? 'filter-card__favorite-label filter-card__favorite-label_checked'
            : 'filter-card__favorite-label'
        }
      />
    </div>
  );
};

export { ValueFilterCardFavorite };
