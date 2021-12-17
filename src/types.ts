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
  favorites: number;
  sort: string;
}

export interface IToys {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export enum Ranges {
  year = 'Количество экземпляров:',
  count = 'Количество экземпляров:',
}

export enum Sort {
  name = 'sortByName',
  nameRevers = 'sortByNameReverse',
  count = 'sortByCount',
  countReverse = 'sortByCountReverse',
}

export type SortFunctionType = (arr: IToys[]) => IToys[];

export enum Form {
  ball = 'шар',
  bell = 'колокольчик',
  cone = 'шишка',
  snowflake = 'снежинка',
  toy = 'фигурка',
}