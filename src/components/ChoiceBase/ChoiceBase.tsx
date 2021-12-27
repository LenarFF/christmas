import React from 'react';
import { ChoiceBackground } from '../ChoiceBackground/ChoiceBackground';
import { ChoiceTree } from '../ChoiceTree/ChoiceTree';
import { Effects } from '../Effects/Effects';
import { GarlandChoice } from '../GarlandChoice/GarlandChoice';

const ChoiceBase = () => {
  return (
    <div className="choice-base">
      <Effects />
      <ChoiceTree />
      <ChoiceBackground />
      <GarlandChoice/>
    </div>
  );
};

export { ChoiceBase };
