import { IToys } from './types';

export const sortByName = (arr: IToys[]) => arr.sort((a, b) => (a.name > b.name ? 1 : -1));

export const sortByNameReverse = (arr: IToys[]) => sortByName(arr).reverse();

export const sortByCount = (arr: IToys[]) => arr.sort((a, b) => +a.count - +b.count);

export const sortByCountReverse = (arr: IToys[]) => sortByCount(arr).reverse();
