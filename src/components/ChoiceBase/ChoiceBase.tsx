import React from 'react';
import { ChoiceBackground } from '../ChoiceBackground/ChoiceBackground';
import { ChoiceTree } from '../ChoiceTree/ChoiceTree';
import { Effects } from '../Effects/Effects';
import { GarlandChoice } from '../GarlandChoice/GarlandChoice';
import './ChoiceBase.scss';

const ChoiceBase = (): JSX.Element => (
  <div className="choice-base">
    <Effects />
    <ChoiceTree />
    <ChoiceBackground />
    <GarlandChoice />
  </div>
);

export { ChoiceBase };
