export interface IState {
  filterName: string;
  isFavor: boolean;
  shapes: {
    [key: string]: boolean;
  };
  colors: {
    [key: string]: boolean;
  };
  sizes: {
    [key: string]: boolean;
  };
  count: number[];
  year: number[];
  favorites: string[];
  sort: string;
  treeState: {
    tree: string;
    background: string;
  };
  snow: boolean;
  music: boolean;
  toysOnTree: { num: string; id: string; top: number; left: number }[];
  drop: boolean;
  dropNum: string;
  garlandColor: string;
  garlandOn: boolean
}

export interface IToys {
  [key: string]: string | boolean;
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

export enum Shapes {
  ball = 'шар',
  bell = 'колокольчик',
  cone = 'шишка',
  snowflake = 'снежинка',
  toy = 'фигурка',
}

export enum GarlandColor {
  red = 'red',
  blue = 'blue',
  wellow = 'yellow',
  green = 'green',
  multi = 'multi',
}
