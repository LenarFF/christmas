import { createContext } from 'react';
import { IState, Sort } from '../types';



export const state: IState = {
  filterName: '',
  isFavor: false,
  shapes: {
    шар: true,
    колокольчик: true,
    шишка: true,
    снежинка: true,
    фигурка: true,
  },
  colors: {
    синий: true,
    красный: true,
    зелёный: true,
    белый: true,
    желтый: true,
  },
  sizes: {
    большой: true,
    средний: true,
    малый: true,
  },
  count: [1, 12],
  year: [1940, 2020],
  favorites: [],
  sort: Sort.name,
  treeState: {
    tree: '1',
    background: '1',
  },
  snow: false,
  music: false,
  toysOnTree: [],
  drop: false,
  dropNum: '',
};

interface IContext {
  appState: IState;
  setAppState: React.Dispatch<React.SetStateAction<IState>>;
}

export const FilterContext = createContext<IContext>({ appState: state, setAppState: () => {} });
