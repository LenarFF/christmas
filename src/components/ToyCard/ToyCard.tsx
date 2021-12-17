import React, { useContext, useState } from 'react';
import { FilterContext } from '../../context';
import { toys } from '../../data';
import { IToys } from '../../types';
import { Modal } from '../modal/modal';
import './ToyCard.scss';

const ToyCard = ({
  num, name, count, year, shape, color, size, favorite,
}: IToys): JSX.Element => {
  const [favor, setFavor] = useState(favorite);
  const [isFull, setIsFull] = useState(false);
  const { appState, setAppState } = useContext(FilterContext);

  const handleClick = () => {
    if (appState.favorites >= 20 && !favor) {
      setIsFull(true);
      return;
    }
    setIsFull(false);
    setFavor(!favor);
    toys[+num - 1].favorite = !favor;
    setAppState({
      ...appState,
      favorites: !favor ? appState.favorites + 1 : appState.favorites - 1,
    });
  };

  return (
    <div className="toy-card" onClick={handleClick}>
      {isFull ? <Modal /> : ''}
      <h3 className="toy-card__title">{name}</h3>
      <div className="toy-card__content">
        <div className="toy-card__visual">
          <img className="toy-card__img" src={`./assets/toys/${num}.png`} alt={name} />
          <div
            className={
              toys[+num - 1].favorite
                ? 'toy-card__ribbon toy-card__ribbon_like'
                : 'toy-card__ribbon'
            }
          />
        </div>
        <div className="toy-card__info">
          <p>
            Количество: <span>{count}</span>
          </p>
          <p>
            Год покупки: <span>{year}</span>
          </p>
          <p>
            Форма: <span>{shape}</span>
          </p>
          <p>
            Цвет: <span>{color}</span>
          </p>
          <p>
            Размер: <span>{size}</span>
          </p>
          <p>
            Любимая: <span>{toys[+num - 1].favorite ? 'да' : 'нет'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ToyCard };
