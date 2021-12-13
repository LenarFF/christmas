import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import './Search.scss';

const Search = () => {
  const [search, setSearch] = useState<string>('');
  const { filterName, setFilterName } = useContext(FilterContext);

  const handleClick = (str: string) => {
    setSearch(str);
    setFilterName(str.toLowerCase());
  }

  return (
    <div className="search">
      <input
        className="search__input"
        value={search}
        onChange={(e) => handleClick(e.target.value)}
        placeholder="Поиск"
        autoFocus
      />
      {search ? (
        <div onClick={() => setSearch('')} className="search__clear" />
      ) : (
        <div className="search__icon" />
      )}
    </div>
  );
};

export { Search };
