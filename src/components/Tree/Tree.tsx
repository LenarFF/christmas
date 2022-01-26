import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './Tree.scss';
import { checkToysInsideTree } from '../../dragNDrop';
import { Garland } from '../Garland/Garland';

const Tree = (): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const {
    treeState, toysOnTree, dropNum, garlandOn,
  } = appState;

  const dragOverHandler = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const dragToyStartHandler = (e: React.DragEvent): void => {
    setAppState({
      ...appState,
      dropNum: (e.target as HTMLElement).getAttribute('data-num') as string,
    });
  };

  const dragToyEndHandler = (e: React.DragEvent): void => {
    setAppState({
      ...appState,
      toysOnTree: toysOnTree.filter((toy) => toy.id !== (e.target as HTMLElement).id),
    });
  };

  const dropHandler = (e: any): void => {
    e.preventDefault();
    const x = e.clientX - e.target.x + 40;
    const y = e.clientY - e.target.y - 35;
    if (checkToysInsideTree(x, y)) {
      toysOnTree.push({
        num: dropNum,
        id: dropNum + x + y,
        top: y,
        left: x,
      });
      setAppState({ ...appState, drop: true });
    }
  };

  return (
    <div
      className="tree"
      style={{ backgroundImage: `url(./assets/bg/${treeState.background}.jpg)` }}
    >
      {garlandOn && (
        <>
          <Garland len={9} top={28} />
          <Garland len={13} top={40} />
          <Garland len={17} top={52} />
          <Garland len={21} top={65} />
        </>
      )}
      <img
        draggable={false}
        className="tree__img"
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        src={`./assets/tree/${treeState.tree}.png`}
        alt="tree"
      />
      {toysOnTree.map((toy) => (
        <img
          id={toy.num + toy.left + toy.top}
          data-num={toy.num}
          onDragStart={dragToyStartHandler}
          onDragEnd={dragToyEndHandler}
          key={toy.num + toy.left}
          className="tree__toy"
          src={`./assets/toys/${toy.num}.png`}
          style={{ top: `${toy.top}px`, left: `${toy.left}px` }}
        />
      ))}
    </div>
  );
};

export { Tree };
