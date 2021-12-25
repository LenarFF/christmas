import React from 'react';
import { ChoiceBase } from '../../components/ChoiceBase/ChoiceBase';
import { ChoiceToys } from '../../components/ChoiceToys/ChoiceToys';
import { Tree } from '../../components/Tree/Tree';
import './ChristmasTreePage.scss';

function ChristmasTreePage(): JSX.Element {
  return (
    <div className="blur">
      <div className="container tree-page">
        <ChoiceBase />
        <Tree />
        <ChoiceToys/>
      </div>
    </div>
  );
}

export default ChristmasTreePage;
