import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FilterContext, state } from '../../context';
import { toys } from '../../data';
import ChristmasTreePage from '../../pages/ChristmasTreePage/ChristmasTreePage';
import StartPage from '../../pages/StartPage/StartPage';
import ToysPage from '../../pages/ToysPage/ToysPage';
import Layout from '../Layout/Layout';
import './App.scss';

function App(): JSX.Element {
  const [appState, setAppState] = useState(state);

  return (
    <>
      <div>
        <FilterContext.Provider value={{ appState, setAppState }}>
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
