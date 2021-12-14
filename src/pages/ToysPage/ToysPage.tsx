import React, { useContext } from 'react';
import { RangeFilterCard } from '../../components/RangeFilterCard/RangeFilterCard';
import { SortCard } from '../../components/SortCard/SortCard';
import { ToyCard } from '../../components/ToyCard/ToyCard';
import { ValueFilterCard } from '../../components/ValueFilterCard/ValueFilterCard';
import { FilterContext } from '../../context';
import { IToys } from '../../types';
import './ToysPage.scss';

function ToysPage({ toys }: { toys: IToys[] }) {
  const { filterName, setFilterName } = useContext(FilterContext);
  const { isFavor, setIsFavor } = useContext(FilterContext);
  let filteredToys = toys.filter((toy) => toy.name.toLowerCase().includes(filterName));
  console.log(isFavor)
  if (isFavor) filteredToys = filteredToys.filter((toy) => toy.favorite);

  return (
    <div className="container toys-page">
      <div className="blur">
        <section className="filters">
          <ValueFilterCard />
          <RangeFilterCard />
          <SortCard/>
        </section>
        <section className="toys">
          {filteredToys.map((toy) => (
            <ToyCard key={toy.num} {...toy} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ToysPage;
