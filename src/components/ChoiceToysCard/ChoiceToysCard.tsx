import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ChoiceToysCard.scss';

interface IChoiceToysCardProp {
  num: string,
  count: string
}

const ChoiceToysCard = ({ num, count }: IChoiceToysCardProp) => {

   const { appState, setAppState } = useContext(FilterContext);
   const { toysOnTree } = appState;

const dragStartHandler = () => {
  console.log('dragStart', num);
  setAppState({ ...appState, dropNum: num });
}

const dragLeaveHandler = () => {
  console.log('leave', num);

};

const dragEndHandler = (e: React.DragEvent) => {
  console.log('end', num, appState.drop );
  if(appState.drop) {
    setAppState({...appState, drop: false})
  }
};

const dragOverHandler = (e: React.DragEvent) => {
  e.preventDefault()
  // console.log('over')
};

const dropHandler = (e: React.DragEvent) => {
  e.preventDefault();
  console.log('drop', num, e.target);

};

const toysCount = +count - toysOnTree.filter((toy) => toy.num === num).length;


  return (
    <div className="choice-toys__img-wrap">
      {toysCount ? <img
        onDragStart={dragStartHandler}
        onDragLeave={dragLeaveHandler}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        className="choice-toys__img"
        src={`./assets/toys/${num}.png`}
        alt=""
      /> : null}
      <span className="choice-toys__num">{toysCount}</span>
    </div>
  );
};

export  {ChoiceToysCard}
