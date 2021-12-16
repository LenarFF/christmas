import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './SelectToys.scss';

const SelectToys = (): JSX.Element => {
  const { appState } = useContext(FilterContext);

  return (
    <div className="select-toys">
      <span className="select-toys__number">{appState.favorites}</span>
    </div>
  );
};

export { SelectToys };
