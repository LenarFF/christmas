import { createContext } from 'react';

export interface IState {
  filterName: string;
  isFavor: boolean;
  isBall: boolean;
  isBell: boolean;
  isCone: boolean;
  isSnowflake: boolean;
  isToy: boolean;
  isWhite: boolean;
  isYellow: boolean;
  isRed: boolean;
  isBlue: boolean;
  isGreen: boolean;
  isBig: boolean;
  isMiddle: boolean;
  isSmall: boolean;
  count: number[];
  year: number[];
}


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
  year: [1940, 2020]
};

interface IContext {
  appState: IState;
  setAppState: React.Dispatch<React.SetStateAction<IState>>
}

export const FilterContext = createContext<IContext>({appState: state, setAppState: () => {}});