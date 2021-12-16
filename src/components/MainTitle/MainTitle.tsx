import React from 'react';
import './MainTitle.scss';

function MainTitle(): JSX.Element {
  return (
    <h1 className="main-title">
      Новогодняя игра
      <span className="main-title__span">«Наряди ёлку»</span>
    </h1>
  );
}

export { MainTitle };
