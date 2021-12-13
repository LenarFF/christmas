import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardSize.scss';

const ValueFilterCardSize = () => {
  const {
    isBig,
    setIsBig,
    isMiddle,
    setIsMiddle,
    isSmall,
    setIsSmall,
  } = useContext(FilterContext);

  const classNames = 'filter-card__size filter-card__size_';
  return (
    <div className="filter-card__filter">
      <span>Размер:</span>
      <div className="filter-card__size-wrap">
        <button
          onClick={() => setIsBig(!isBig)}
          className={isBig ? `${classNames}big filter-card__size_gold` : `${classNames}big`}
        />
        <button
          onClick={() => setIsMiddle(!isMiddle)}
          className={
            isMiddle ? `${classNames}middle filter-card__size_gold` : `${classNames}middle`
          }
        />
        <button
          onClick={() => setIsSmall(!isSmall)}
          className={isSmall ? `${classNames}small filter-card__size_gold` : `${classNames}small  `}
        />
      </div>
    </div>
  );
};

export { ValueFilterCardSize };
