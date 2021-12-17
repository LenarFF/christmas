import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardSize.scss';

const ValueFilterCardSize = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { sizes } = appState;

  const classNames = 'filter-card__size filter-card__size_';
  const handleClick = () => {
    setAppState({ ...appState, sizes });
  };

  return (
    <li className="filter-card__filter">
      <span>Размер:</span>
      <div className="filter-card__size-wrap">
        <button
          onClick={() => {
            sizes['большой'] = !sizes['большой'];
            handleClick();
          }}
          className={
            sizes['большой'] ? `${classNames}big filter-card__size_gold` : `${classNames}big`
          }
        />
        <button
          onClick={() => {
            sizes['средний'] = !sizes['средний'];
            handleClick();
          }}
          className={
            sizes['средний'] ? `${classNames}middle filter-card__size_gold` : `${classNames}middle`
          }
        />
        <button
          onClick={() => {
            sizes['малый'] = !sizes['малый'];
            handleClick();
          }}
          className={
            sizes['малый'] ? `${classNames}small filter-card__size_gold` : `${classNames}small  `
          }
        />
      </div>
    </li>
  );
};

export { ValueFilterCardSize };
