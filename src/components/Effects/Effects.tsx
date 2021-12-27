import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import './Effects.scss';

const audio = new Audio('./assets/audio/audio.mp3');

const Effects = () => {

  const { appState, setAppState } = useContext(FilterContext);

  const {music , snow} = appState

  const toggleSound = () => {
    setAppState({ ...appState, music: !music });
    if (!music) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const toggleSnow = () => {
    setAppState({...appState, snow: !snow});
  };

  return (
    <div className="effects">
      <button onClick={toggleSound} className="effects__sound"></button>
      <button onClick={toggleSnow} className="effects__snow"></button>
    </div>
  );
};

export { Effects };
