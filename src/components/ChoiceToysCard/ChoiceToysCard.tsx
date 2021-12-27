import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import './ChoiceToysCard.scss';

interface IChoiceToysCardProp {
  num: string;
  count: string;
}

const ChoiceToysCard = ({ num, count }: IChoiceToysCardProp): JSX.Element => {
  const { appState, setAppState } = useContext(FilterContext);
  const { toysOnTree } = appState;

  const dragStartHandler = () => {
    setAppState({ ...appState, dropNum: num });
  };

  const dragEndHandler = () => {
    if (appState.drop) {
      setAppState({ ...appState, drop: false });
    }
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const toysCount = Number(count) - toysOnTree.filter((toy) => toy.num === num).length;

  return (
    <div className="choice-toys__img-wrap">
      {toysCount ? (
        <img
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          onDrop={dropHandler}
          className="choice-toys__img"
          src={`./assets/toys/${num}.png`}
          alt=""
        />
      ) : null}
      <span className="choice-toys__num">{toysCount}</span>
    </div>
  );
};

export { ChoiceToysCard };
