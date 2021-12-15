import React, { useContext, useEffect } from 'react';
import { RangeFilterCard } from '../../components/RangeFilterCard/RangeFilterCard';
import { SortCard } from '../../components/SortCard/SortCard';
import { ToyCard } from '../../components/ToyCard/ToyCard';
import { ValueFilterCard } from '../../components/ValueFilterCard/ValueFilterCard';
import { FilterContext } from '../../context';
import { IToys } from '../../types';
import './ToysPage.scss';

function ToysPage({ toys }: { toys: IToys[] }) {
  const { appState, setAppState } = useContext(FilterContext);

  const {
    filterName,
    isFavor,
    isBall,
    isBell,
    isCone,
    isSnowflake,
    isToy,
    isBlue,
    isRed,
    isGreen,
    isWhite,
    isYellow,
    isBig,
    isMiddle,
    isSmall,
    count,
    year
  } = appState;

  let filteredToys = toys.filter((toy) => toy.name.toLowerCase().includes(filterName));
  if (isFavor) filteredToys = filteredToys.filter((toy) => toy.favorite);
  if (!isBall) filteredToys = filteredToys.filter((toy) => toy.shape !== 'шар');
  if (!isBell) filteredToys = filteredToys.filter((toy) => toy.shape !== 'колокольчик');
  if (!isCone) filteredToys = filteredToys.filter((toy) => toy.shape !== 'шишка');
  if (!isSnowflake) filteredToys = filteredToys.filter((toy) => toy.shape !== 'снежинка');
  if (!isToy) filteredToys = filteredToys.filter((toy) => toy.shape !== 'фигурка');
  if (!isBlue) filteredToys = filteredToys.filter((toy) => toy.color !== 'синий');
  if (!isRed) filteredToys = filteredToys.filter((toy) => toy.color !== 'красный');
  if (!isGreen) filteredToys = filteredToys.filter((toy) => toy.color !== 'зелёный');
  if (!isWhite) filteredToys = filteredToys.filter((toy) => toy.color !== 'белый');
  if (!isYellow) filteredToys = filteredToys.filter((toy) => toy.color !== 'жёлтый');
  if (!isBig) filteredToys = filteredToys.filter((toy) => toy.size !== 'большой');
  if (!isMiddle) filteredToys = filteredToys.filter((toy) => toy.size !== 'средний');
  if (!isSmall) filteredToys = filteredToys.filter((toy) => toy.size !== 'малый');
  filteredToys = filteredToys.filter((toy) => +toy.count >= count[0] && +toy.count <= count[1]);
  filteredToys = filteredToys.filter((toy) => +toy.year >= year[0] && +toy.year <= year[1]);

  return (
    <div className="container toys-page">
      <div className="blur">
        <section className="filters">
          <ValueFilterCard />
          <RangeFilterCard />
          <SortCard />
        </section>
        <section className="toys">
          {filteredToys.map((toy, index) => (
            <ToyCard key={toy.num} {...toy} index={index} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ToysPage;
