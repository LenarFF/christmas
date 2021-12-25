import React, { useState } from 'react';
import './Effects.scss';

const audio = new Audio('./assets/audio/audio.mp3');

const Effects = () => {

  const [sound, setSound] = useState(false);
  const toggleSound = () => {
    setSound(!sound);
    if (!sound) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="effects">
      <button onClick={toggleSound} className="effects__sound"></button>
      <button className="effects__snow"></button>
    </div>
  );
};

export { Effects };
