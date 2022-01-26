import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import { toys } from '../../data/data';
import { ChoiceToysCard } from '../ChoiceToysCard/ChoiceToysCard';
import './ChoiceToys.scss';

const ChoiceToys = (): JSX.Element => {
  const { appState } = useContext(FilterContext);
  const { favorites } = appState;

  let favoriteToys = toys.filter((toy, index) => favorites.includes(String(index + 1)));
  favoriteToys = favoriteToys.length > 0 ? favoriteToys : toys.slice(0, 21);

  return (
    <div className="choice-toys">
      <h3 className="toys__title">Игрушки</h3>
      <div className="choice-toys__field">
        {favoriteToys.map((toy) => (
          <ChoiceToysCard key={toy.num + toy.name} num={toy.num} count={toy.count} name={toy.name} />
        ))}
      </div>
    </div>
  );
};

export { ChoiceToys };
