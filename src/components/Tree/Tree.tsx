import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './Tree.scss';
import { checkToysInsideTree } from '../../dragNDrop';

const Tree = () => {
  const { appState, setAppState } = useContext(FilterContext);
  const { treeState, snow, toysOnTree, drop, dropNum } = appState;

  const dragStartHandler = () => {
    console.log('dragStart', 'tree');
  };

  const dragLeaveHandler = () => {
    console.log('leave', 'tree');
  };

  const dragEndHandler = () => {
    console.log('end', 'tree');

  };

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
    // console.log('over','tree')
  };

  const dragToyStartHandler = (e: any) => {
    setAppState({ ...appState, dropNum: e.target.getAttribute('data-num') });
  }

  const dragToyEndHandler = (e: any) => {
    setAppState({ ...appState, toysOnTree: toysOnTree.filter(toy => toy.id != e.target.id) });
  };

  const dropHandler = (e: any) => {
     e.preventDefault();
    const x = e.clientX - e.target.x + 70;
    const y = e.clientY - e.target.y;   ;
    if (checkToysInsideTree(x, y)) {
      toysOnTree.push({ num: dropNum, id: dropNum + x + y, top: y, left: x });
      setAppState({ ...appState, drop: true });
    }
    console.log('drop', 'tree', e.clientX - e.target.x, x , e.clientY - e.target.y, y);
  };
  console.log(toysOnTree);
  console.log(dropNum)

  return (
    <div
      className="tree"
      style={{ backgroundImage: `url(./assets/bg/${treeState.background}.jpg)` }}
    >
      {/* {snow && <Snowfall />} */}
      <img
        className="tree__img"
        onDragStart={dragStartHandler}
        onDragLeave={dragLeaveHandler}
        onDragEnd={dragEndHandler}
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
