import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardSize.scss';

const ValueFilterCardSize = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { isBig, isMiddle, isSmall } = appState;

  const classNames = 'filter-card__size filter-card__size_';
  return (
    <div className="filter-card__filter">
      <span>Размер:</span>
      <div className="filter-card__size-wrap">
        <button
          onClick={() => setAppState({ ...appState, isBig: !isBig })}
          className={isBig ? `${classNames}big filter-card__size_gold` : `${classNames}big`}
        />
        <button
          onClick={() => setAppState({ ...appState, isMiddle: !isMiddle })}
          className={
            isMiddle ? `${classNames}middle filter-card__size_gold` : `${classNames}middle`
          }
        />
        <button
          onClick={() => setAppState({ ...appState, isSmall: !isSmall })}
          className={isSmall ? `${classNames}small filter-card__size_gold` : `${classNames}small  `}
        />
      </div>
    </div>
  );
};

export { ValueFilterCardSize };
