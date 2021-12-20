import React, { useContext } from 'react';
import { RangeFilterCard } from '../../components/RangeFilterCard/RangeFilterCard';
import { SortCard } from '../../components/SortCard/SortCard';
import { ToyCard } from '../../components/ToyCard/ToyCard';
import { ValueFilterCard } from '../../components/ValueFilterCard/ValueFilterCard';
import { FilterContext } from '../../context';
import { sortToys } from '../../sort';
import { IToys } from '../../types';
import './ToysPage.scss';

function ToysPage({ toys }: { toys: IToys[] }): JSX.Element {
  const { appState } = useContext(FilterContext);

  const { filterName, isFavor, shapes, colors, sizes, count, year, sort } = appState;

  let filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  const filterToys = (
    stateProp: {
      [key: string]: boolean;
    },
    dataProp: string,
  ) => {
    Object.keys(stateProp).forEach((key) => {
      if (!stateProp[key]) filteredToys = filteredToys.filter((toy) => toy[dataProp] !== key);
    });
  };

  filterToys(shapes, 'shape');
  filterToys(colors, 'color');
  filterToys(sizes, 'size');

  if (isFavor) filteredToys = filteredToys.filter((toy) => toy.favorite);
  filteredToys = filteredToys.filter((toy) => +toy.count >= count[0] && +toy.count <= count[1]);
  filteredToys = filteredToys.filter((toy) => +toy.year >= year[0] && +toy.year <= year[1]);
  sortToys(filteredToys, sort);

  return (
    <div className="blur">
      <section className="container toys-page">
        <div className="filters">
          <ValueFilterCard />
          <RangeFilterCard />
          <SortCard />
        </div>
        <div className="toys">
          {filteredToys.map((toy) => (
            <ToyCard key={toy.num} {...toy} />
          ))}
          {!filteredToys.length ? <span className="not-found">¯\_(ツ)_/¯</span> : ''}
        </div>
      </section>
    </div>
  );
}

export default ToysPage;
