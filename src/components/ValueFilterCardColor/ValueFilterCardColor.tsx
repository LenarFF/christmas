import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardColor.scss';

const ValueFilterCardColor = () => {
  const { appState, setAppState } = useContext(FilterContext);
  const {isWhite, isYellow, isRed, isBlue, isGreen} = appState;

  const classNames = 'filter-card__color filter-card__color_';
  return (
    <div className="filter-card__filter">
      <span>Цвет:</span>
      <div className="filter-card__color-wrap">
        <button
          onClick={() => setAppState({ ...appState, isWhite: !isWhite })}
          className={
            isWhite ? `${classNames}white filter-card__color_select` : `${classNames}white`
          }
        />
        <button
          onClick={() => setAppState({ ...appState, isYellow: !isYellow })}
          className={
            isYellow ? `${classNames}yellow filter-card__color_select` : `${classNames}yellow`
          }
        />
        <button
          onClick={() => setAppState({ ...appState, isRed: !isRed })}
          className={isRed ? `${classNames}red filter-card__color_select` : `${classNames}red`}
        />
        <button
          onClick={() => setAppState({ ...appState, isBlue: !isBlue })}
          className={isBlue ? `${classNames}blue filter-card__color_select` : `${classNames}blue`}
        />
        <button
          onClick={() => setAppState({ ...appState, isGreen: !isGreen})}
          className={
            isGreen ? `${classNames}green filter-card__color_select` : `${classNames}green`
          }
        />
      </div>
    </div>
  );
};

export { ValueFilterCardColor };
