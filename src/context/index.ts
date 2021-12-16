import { createContext } from 'react';
import { toys } from '../data';
import { IState, Sort } from '../types';

const favorites = toys.filter((toy) => toy.favorite).length;

export const state: IState = {
  filterName: '',
  isFavor: false,
  isBall: true,
  isBell: true,
  isCone: true,
  isSnowflake: true,
  isToy: true,
  isWhite: true,
  isYellow: true,
  isRed: true,
  isBlue: true,
  isGreen: true,
  isBig: true,
  isMiddle: true,
  isSmall: true,
  count: [1, 12],
  year: [1940, 2020],
  favorites,
  sort: Sort.name,
};

interface IContext {
  appState: IState;
  setAppState: React.Dispatch<React.SetStateAction<IState>>;
}

export const FilterContext = createContext<IContext>({ appState: state, setAppState: () => {} });
