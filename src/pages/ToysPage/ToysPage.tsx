import React from 'react';
import { FilterCard } from '../../components/FilterCard/FilterCard';
import { ToyCard } from '../../components/ToyCard/ToyCard';
import { ValueFilterCard } from '../../components/ValueFilterCard/ValueFilterCard';
import { IToys } from '../../types';
import './ToysPage.scss';

function ToysPage({toys} : {toys: IToys[]}) {
  return (
    <div className="container toys-page">
      <div className="blur">
        <section className="filters">
          <ValueFilterCard />
          <FilterCard title="Фильтры по диапазону" />
          <FilterCard title="Сортировка" />
        </section>
        <section className='toys'>
          {toys.map(toy => <ToyCard key={toy.num} {...toy}/>)}
        </section>
      </div>
    </div>
  );
}

export default ToysPage;
