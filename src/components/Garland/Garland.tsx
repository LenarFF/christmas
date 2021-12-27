import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './Garland.scss'

interface IGarlandProps {
  len: number;
  top: number
}

const Garland = ({ len, top }: IGarlandProps) => {

  const { appState, setAppState } = useContext(FilterContext);

  return (
    <ul className="garland" style={{ top: `${top}px` }}>
      {[...Array(len)].map((lamp, index) => (
        <li
          key={Math.random()}
          className={`garland__lamp garland__lamp_${appState.garlandColor}`}
          style={{ top: `${(len - Math.abs(len / 2 - index)) * 4}px` }}
        />
      ))}
    </ul>
  );
};

export  {Garland}
