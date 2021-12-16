import React, { useContext } from 'react';
import Slider from '@mui/material/Slider';
import './RangeFilter.scss';
import { FilterContext } from '../../context';
import { Ranges } from '../../types';

const RangeFilter = ({
  title,
  min,
  max,
}: {
  title: string;
  min: number;
  max: number;
}): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { count, year } = appState;

  const handleChange = (event: Event, newValue: number[]) => {
    setAppState(
      title === Ranges.count
        ? { ...appState, count: [...newValue] }
        : { ...appState, year: [...newValue] },
    );
  };

  return (
    <div className="range-filter">
      <h3>{title}</h3>
      <div className="range-filter__ranges">
        <div className="range-filter__value">{title === Ranges.count ? count[0] : year[0]}</div>
        <div className="range-filter__slider">
          <Slider
            value={title === Ranges.count ? count : year}
            onChange={(e, value) => handleChange(e, value as number[])}
            valueLabelDisplay="auto"
            min={min}
            max={max}
          />
        </div>
        <div className="range-filter__value">{title === Ranges.count ? count[1] : year[1]}</div>
      </div>
    </div>
  );
};

export { RangeFilter };
