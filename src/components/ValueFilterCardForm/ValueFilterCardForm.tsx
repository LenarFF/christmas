import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ValueFilterCardForm.scss';

const ValueFilterCardForm = () => {
  const {
    isBall,
    setIsBall,
    isBell,
    setIsBell,
    isCone,
    setIsCone,
    isSnowflake,
    setIsSnowflake,
    isToy,
    setIsToy,
  } = useContext(FilterContext);

  const classNames = 'filter-card__forms filter-card__forms_';
  return (
    <div className="filter-card__filter">
      <span>Форма:</span>
      <div className="filter-card__forms-wrap">
        <button
          onClick={() => setIsBall(!isBall)}
          className={isBall ? `${classNames}ball filter-card__forms_gold` : `${classNames}ball`}
        />
        <button
          onClick={() => setIsBell(!isBell)}
          className={isBell ? `${classNames}bell filter-card__forms_gold` : `${classNames}bell`}
        />
        <button
          onClick={() => setIsCone(!isCone)}
          className={isCone ? `${classNames}cone filter-card__forms_gold` : `${classNames}cone`}
        />
        <button
          onClick={() => setIsSnowflake(!isSnowflake)}
          className={
            isSnowflake
              ? `${classNames}snowflake filter-card__forms_gold`
              : `${classNames}snowflake`
          }
        />
        <button
          onClick={() => setIsToy(!isToy)}
          className={isToy ? `${classNames}toy filter-card__forms_gold` : `${classNames}toy`}
        />
      </div>
    </div>
  );
};

export { ValueFilterCardForm };
