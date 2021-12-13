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
  isWhite: boolean;
  setIsWhite: React.Dispatch<React.SetStateAction<boolean>>;
  isYellow: boolean;
  setIsYellow: React.Dispatch<React.SetStateAction<boolean>>;
  isRed: boolean;
  setIsRed: React.Dispatch<React.SetStateAction<boolean>>;
  isBlue: boolean;
  setIsBlue: React.Dispatch<React.SetStateAction<boolean>>;
  isGreen: boolean;
  setIsGreen: React.Dispatch<React.SetStateAction<boolean>>;
  isBig: boolean;
  setIsBig: React.Dispatch<React.SetStateAction<boolean>>;
  isMiddle: boolean;
  setIsMiddle: React.Dispatch<React.SetStateAction<boolean>>;
  isSmall: boolean;
  setIsSmall: React.Dispatch<React.SetStateAction<boolean>>;
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
  isWhite: true,
  setIsWhite: () => {},
  isYellow: true,
  setIsYellow: () => {},
  isRed: true,
  setIsRed: () => {},
  isBlue: true,
  setIsBlue: () => {},
  isGreen: true,
  setIsGreen: () => {},
  isBig: true,
  setIsBig: () => {},
  isMiddle: true,
  setIsMiddle: () => {},
  isSmall: true,
  setIsSmall: () => {},
});
