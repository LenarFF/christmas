import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardColor.scss';

const ValueFilterCardColor = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { colors } = appState;

  const classNames = 'filter-card__color filter-card__color_';
  const handleClick = () => {
    setAppState({ ...appState, colors });
  };

  return (
    <li className="filter-card__filter">
      <span>Цвет:</span>
      <div className="filter-card__color-wrap">
        <button
          onClick={() => {
            colors['белый'] = !colors['белый'];
            handleClick();
          }}
          className={
            colors['белый'] ? `${classNames}white filter-card__color_select` : `${classNames}white`
          }
        />
        <button
          onClick={() => {
            colors['желтый'] = !colors['желтый'];
            handleClick();
          }}
          className={
            colors['желтый']
              ? `${classNames}yellow filter-card__color_select`
              : `${classNames}yellow`
          }
        />
        <button
          onClick={() => {
            colors['красный'] = !colors['красный'];
            handleClick();
          }}
          className={
            colors['красный'] ? `${classNames}red filter-card__color_select` : `${classNames}red`
          }
        />
        <button
          onClick={() => {
            colors['синий'] = !colors['синий'];
            handleClick();
          }}
          className={
            colors['синий'] ? `${classNames}blue filter-card__color_select` : `${classNames}blue`
          }
        />
        <button
          onClick={() => {
            colors['зелёный'] = !colors['зелёный'];
            handleClick();
          }}
          className={
            colors['зелёный']
              ? `${classNames}green filter-card__color_select`
              : `${classNames}green`
          }
        />
      </div>
    </li>
  );
};

export { ValueFilterCardColor };
