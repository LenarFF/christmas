import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import { toys } from '../../data/data';
import './ChoiceToys.scss';

const ChoiceToys = () => {
  const { appState, setAppState } = useContext(FilterContext);
  return (
    <div className="choice-toys">
      <h3 className="toys__title">Игрушки</h3>
      <div className="choice-toys__field">
        {toys.map(
          (toy) =>
            toy.favorite && (
              <div className="choice-toys__img-wrap" key={toy.name}>
                <img className="choice-toys__img" src={`./assets/toys/${toy.num}.png`} alt="" />
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export  {ChoiceToys}
