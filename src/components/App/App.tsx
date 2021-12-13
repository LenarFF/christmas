import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FilterContext, IContext } from '../../context';
import { toys } from '../../data';
import ChristmasTreePage from '../../pages/ChristmasTreePage/ChristmasTreePage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import StartPage from '../../pages/StartPage/StartPage';
import ToysPage from '../../pages/ToysPage/ToysPage';
import Layout from '../Layout/Layout';
import './App.scss';

function App(): JSX.Element {
  const [filterName, setFilterName] = useState('');
  const [isFavor, setIsFavor] = useState(false);
  const [isBall, setIsBall] = useState(true);
  const [isBell, setIsBell] = useState(true);
  const [isCone, setIsCone] = useState(true);
  const [isSnowflake, setIsSnowflake] = useState(true);
  const [isToy, setIsToy] = useState(true);
  const [isWhite, setIsWhite] = useState(true);
  const [isYellow, setIsYellow] = useState(true);
  const [isRed, setIsRed] = useState(true);
  const [isBlue, setIsBlue] = useState(true);
  const [isGreen, setIsGreen] = useState(true);

  return (
    <>
      <div>
        <FilterContext.Provider
          value={{
            filterName,
            setFilterName,
            isFavor,
            setIsFavor,
            isBall,
            setIsBall,
            isBell,
            setIsBell,
            isCone,
            setIsCone,
            isSnowflake,
            setIsSnowflake,
            isToy,
            setIsToy,
            isWhite,
            setIsWhite,
            isYellow,
            setIsYellow,
            isRed,
            setIsRed,
            isBlue,
            setIsBlue,
            isGreen,
            setIsGreen,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<StartPage />} />
              <Route path="toys" element={<ToysPage toys={toys} />} />
              <Route path="tree" element={<ChristmasTreePage />} />
              <Route path="*" element={<StartPage />} />
            </Route>
          </Routes>
        </FilterContext.Provider>
      </div>
    </>
  );
}

export default App;
