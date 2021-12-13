import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="search">
      <input
        className="search__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
      {value ? <div onClick={() => setValue('')} className="search__clear" /> : <div className="search__icon" />}
    </div>
  );
};

export { Search };
