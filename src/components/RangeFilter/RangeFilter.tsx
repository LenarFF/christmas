import React from 'react';
import Slider from '@mui/material/Slider';
import './RangeFilter.scss';


const RangeFilter = ({title, min, max} : {title: string, min: number, max: number}) => {

  const [value, setValue] = React.useState<number[]>([min, max]);

  const handleChange = (event: Event, newValue: number[]) => {
     setValue(newValue);
  };


  return (
    <div className="range-filter">
      <h3>{title}</h3>
      <div className="range-filter__ranges">
        <div className="range-filter__value">{value[0]}</div>
        <div className="range-filter__slider">
          <Slider
            value={value}
            onChange={(e, value) => handleChange(e, value as number[])}
            valueLabelDisplay="auto"
            min={min}
            max={max}
          />
        </div>
        <div className="range-filter__value">{value[1]}</div>
      </div>
    </div>
  );
}

export {RangeFilter};
