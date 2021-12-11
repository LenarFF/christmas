import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ChristmasTreePage from '../../pages/ChristmasTreePage/ChristmasTreePage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import StartPage from '../../pages/StartPage/StartPage';
import ToysPage from '../../pages/ToysPage/ToysPage';
import Layout from '../Layout/Layout';
import './App.scss';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="toys" element={<ToysPage />} />
            <Route path="tree" element={<ChristmasTreePage />} />
            <Route path="*" element={<StartPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
