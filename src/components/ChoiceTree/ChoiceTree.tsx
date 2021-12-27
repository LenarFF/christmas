import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import { trees } from '../../data/tree';
import './ChoiceTree.scss';

const ChoiceTree = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);

  const handleClick = (target: HTMLElement) => {
    const attr = target.getAttribute('data-tree') || target.parentElement?.getAttribute('data-tree');
    if (!attr) return;
    appState.treeState.tree = attr;
    setAppState({ ...appState });
  };

  return (
    <div className="choice-tree">
      <h3 className="toys__title">Выберите ёлку</h3>
      <div className="choice-tree__field" onClick={(e) => handleClick(e.target as HTMLElement)}>
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
