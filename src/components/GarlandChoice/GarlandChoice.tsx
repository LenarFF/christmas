import Switch from '@mui/material/Switch/Switch';
import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './GarlandChoice.scss';

const GarlandChoice = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { garlandOn } = appState;

  const changeColor = (e: React.MouseEvent) => {
    const attr = (e.target as HTMLElement).getAttribute('data-color');
    if (!attr) return;
    setAppState({ ...appState, garlandColor: attr, garlandOn: true });
  };

  return (
    <div className="garland-choice">
      <div className="garland-choice__top">
        <h3 className="toys__title">Гирлянда</h3>
        <Switch
          checked={garlandOn}
          onChange={() => setAppState({ ...appState, garlandOn: !garlandOn })}
          color="warning"
        />
      </div>

      <ul className="garland-choice__colors" onClick={changeColor}>
        <li data-color="multi" className="garland-choice__color garland-choice__color_multi" />
        <li data-color="red" className="garland-choice__color garland-choice__color_red" />
        <li data-color="blue" className="garland-choice__color garland-choice__color_blue" />
        <li data-color="yellow" className="garland-choice__color garland-choice__color_yellow" />
        <li data-color="green" className="garland-choice__color garland-choice__color_green" />
      </ul>
    </div>
  );
};

export { GarlandChoice };
