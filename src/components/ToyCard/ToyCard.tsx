import React from 'react'
import { IToys } from '../../types';
import './ToyCard.scss';

const ToyCard = ({ num, name, count, year, shape, color, size, favorite }: IToys) => {
  return (
    <div className="toy-card">
      <h3 className="toy-card__title">{name}</h3>
      <div className="toy-card__content">
        <div className="toy-card__visual">
          <img className="toy-card__img" src={`./assets/toys/${num}.png`} alt={name} />
          <div className="toy-card__ribbon" />
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
            Любимая: <span>{favorite ? 'да' : 'нет'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export  {ToyCard}
