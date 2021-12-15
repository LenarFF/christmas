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

export interface IToysCard extends IToys {
  index: number
}

export enum Ranges {
  year = 'Количество экземпляров:',
  count = 'Количество экземпляров:',
}