import { createContext } from 'react';

export interface IContext {
  filterName: string;
  setFilterName: React.Dispatch<React.SetStateAction<string>>;
}

export const state = {
  filterText: '',
};

export const FilterContext = createContext<IContext>({ filterName: '', setFilterName: () => {} });
