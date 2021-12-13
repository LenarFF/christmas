import { createContext } from 'react';

export interface IContext {
  filterName: string;
  setFilterName: React.Dispatch<React.SetStateAction<string>>;
  isFavor: boolean;
  setIsFavor: React.Dispatch<React.SetStateAction<boolean>>;
  isBall: boolean;
  setIsBall: React.Dispatch<React.SetStateAction<boolean>>;
  isBell: boolean;
  setIsBell: React.Dispatch<React.SetStateAction<boolean>>;
  isCone: boolean;
  setIsCone: React.Dispatch<React.SetStateAction<boolean>>;
  isSnowflake: boolean;
  setIsSnowflake: React.Dispatch<React.SetStateAction<boolean>>;
  isToy: boolean;
  setIsToy: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterContext = createContext<IContext>({
  filterName: '',
  setFilterName: () => {},
  isFavor: true,
  setIsFavor: () => {},
  isBall: true,
  setIsBall: () => {},
  isBell: true,
  setIsBell: () => {},
  isCone: true,
  setIsCone: () => {},
  isSnowflake: true,
  setIsSnowflake: () => {},
  isToy: true,
  setIsToy: () => {},
});
