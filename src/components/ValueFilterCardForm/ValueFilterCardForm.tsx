import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardForm.scss';

const ValueFilterCardForm = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const {
    isBall, isBell, isCone, isSnowflake, isToy,
  } = appState;

  const classNames = 'filter-card__forms filter-card__forms_';
  return (
    <li className="filter-card__filter">
      <span>Форма:</span>
      <div className="filter-card__forms-wrap">
        <button
          onClick={() => setAppState({ ...appState, isBall: !isBall })}
          className={isBall ? `${classNames}ball filter-card__forms_gold` : `${classNames}ball`}
        />
        <button
          onClick={() => setAppState({ ...appState, isBell: !isBell })}
          className={isBell ? `${classNames}bell filter-card__forms_gold` : `${classNames}bell`}
        />
        <button
          onClick={() => setAppState({ ...appState, isCone: !isCone })}
          className={isCone ? `${classNames}cone filter-card__forms_gold` : `${classNames}cone`}
        />
        <button
          onClick={() => setAppState({ ...appState, isSnowflake: !isSnowflake })}
          className={
            isSnowflake
              ? `${classNames}snowflake filter-card__forms_gold`
              : `${classNames}snowflake`
          }
        />
        <button
          onClick={() => setAppState({ ...appState, isToy: !isToy })}
          className={isToy ? `${classNames}toy filter-card__forms_gold` : `${classNames}toy`}
        />
      </div>
    </li>
  );
};

export { ValueFilterCardForm };
