import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardForm.scss';

const ValueFilterCardForm = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const {
    shapes,
  } = appState;

  const classNames = 'filter-card__forms filter-card__forms_';
  const handleClick = () => {
    setAppState({ ...appState, shapes });
  };

  return (
    <li className="filter-card__filter">
      <span>Форма:</span>
      <div className="filter-card__forms-wrap">
        <button
          onClick={() => {
            shapes['шар'] = !shapes['шар'];
            handleClick();
          }}
          className={
            shapes['шар'] ? `${classNames}ball filter-card__forms_gold` : `${classNames}ball`
          }
        />
        <button
          onClick={() => {
            shapes['колокольчик'] = !shapes['колокольчик'];
            handleClick();
          }}
          className={
            shapes['колокольчик']
              ? `${classNames}bell filter-card__forms_gold`
              : `${classNames}bell`
          }
        />
        <button
          onClick={() => {
            shapes['шишка'] = !shapes['шишка'];
            handleClick();
          }}
          className={
            shapes['шишка'] ? `${classNames}cone filter-card__forms_gold` : `${classNames}cone`
          }
        />
        <button
          onClick={() => {
            shapes['снежинка'] = !shapes['снежинка'];
            handleClick();
          }}
          className={
            shapes['снежинка']
              ? `${classNames}snowflake filter-card__forms_gold`
              : `${classNames}snowflake`
          }
        />
        <button
          onClick={() => {
            shapes['фигурка'] = !shapes['фигурка'];
            handleClick();
          }}
          className={
            shapes['фигурка'] ? `${classNames}toy filter-card__forms_gold` : `${classNames}toy`
          }
        />
      </div>
    </li>
  );
};

export { ValueFilterCardForm };
