import React from 'react';
import { trees } from '../../data/tree';
import './ChoiceTree.scss';

const ChoiceTree = () => {
  return (
    <div className="choice-tree">
      <h3 className="toys__title">Выберите ёлку</h3>
      <div className="choice-tree__field">
        {trees.map((tree) => (
          <div className="choice-tree__img-wrap" data-tree={tree} key={tree}>
            <img className="choice-tree__img" src={`./assets/tree/${tree}.png`} alt="tree" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ChoiceTree };
