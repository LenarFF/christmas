import React from 'react';
import { ChoiceBackground } from '../ChoiceBackground/ChoiceBackground';
import { ChoiceTree } from '../ChoiceTree/ChoiceTree';
import { Effects } from '../Effects/Effects';
import { Garland } from '../Garland/Garland';

const ChoiceBase = () => {
  return (
    <div className="choice-base">
      <Effects />
      <ChoiceTree />
      <ChoiceBackground />
      <Garland/>
    </div>
  );
};

export { ChoiceBase };
