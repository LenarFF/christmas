import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardColor.scss';

const ValueFilterCardColor = () => {
  const {
    isWhite,
    setIsWhite,
    isYellow,
    setIsYellow,
    isRed,
    setIsRed,
    isBlue,
    setIsBlue,
    isGreen,
    setIsGreen,
  } = useContext(FilterContext);

  const classNames = 'filter-card__color filter-card__color_';
  return (
    <div className="filter-card__filter">
      <span>Цвет:</span>
      <div className="filter-card__color-wrap">
        <button
          onClick={() => setIsWhite(!isWhite)}
          className={
            isWhite ? `${classNames}white filter-card__color_select` : `${classNames}white`
          }
        />
        <button
          onClick={() => setIsYellow(!isYellow)}
          className={
            isYellow ? `${classNames}yellow filter-card__color_select` : `${classNames}yellow`
          }
        />
        <button
          onClick={() => setIsRed(!isRed)}
          className={isRed ? `${classNames}red filter-card__color_select` : `${classNames}red`}
        />
        <button
          onClick={() => setIsBlue(!isBlue)}
          className={isBlue ? `${classNames}blue filter-card__color_select` : `${classNames}blue`}
        />
        <button
          onClick={() => setIsGreen(!isGreen)}
          className={
            isGreen ? `${classNames}green filter-card__color_select` : `${classNames}green`
          }
        />
      </div>
    </div>
  );
};

export { ValueFilterCardColor };
