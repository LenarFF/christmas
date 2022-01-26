import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './Effects.scss';

const audio = new Audio('./assets/audio/audio.mp3');

const Effects = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);

  const { music, snow } = appState;

  const toggleSound = (): void => {
    setAppState({ ...appState, music: !music });
    if (!music) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const toggleSnow = (): void => {
    setAppState({ ...appState, snow: !snow });
  };

  return (
    <div className="effects">
      <button onClick={toggleSound} className="effects__sound"></button>
      <button onClick={toggleSnow} className="effects__snow"></button>
    </div>
  );
};

export { Effects };
