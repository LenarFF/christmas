import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import './Search.scss';

const Search = () => {
  const { appState, setAppState } = useContext(FilterContext);

  const handleClick = (str: string) => {
    setAppState({...appState, filterName: str.toLowerCase()});
  }

  return (
    <div className="search">
      <input
        className="search__input"
        value={appState.filterName}
        onChange={(e) => handleClick(e.target.value)}
        placeholder="Поиск"
        autoFocus
      />
      {appState.filterName ? (
        <div onClick={() => handleClick('')} className="search__clear" />
      ) : (
        <div className="search__icon" />
      )}
    </div>
  );
};

export { Search };
