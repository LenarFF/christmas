import { IToys, Sort, SortFunctionType } from './types';

export const sortByName: SortFunctionType = (arr: IToys[]) => arr.sort((a, b) => (a.name > b.name ? 1 : -1));

export const sortByNameReverse: SortFunctionType = (arr: IToys[]) => sortByName(arr).reverse();

export const sortByCount: SortFunctionType = (arr: IToys[]) => arr.sort((a, b) => +a.count - +b.count);

export const sortByCountReverse: SortFunctionType = (arr: IToys[]) => sortByCount(arr).reverse();

export const sortToys = (toys: IToys[], sortType: string): void => {
  switch (sortType) {
    case Sort.name:
      sortByName(toys);
      break;
    case Sort.nameRevers:
      sortByNameReverse(toys);
      break;
    case Sort.count:
      sortByCount(toys);
      break;
    case Sort.countReverse:
      sortByCountReverse(toys);
      break;
    default:
      sortByName(toys);
      break;
  }
};
