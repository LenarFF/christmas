import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ChristmasTreePage from '../../pages/ChristmasTreePage/ChristmasTreePage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import StartPage from '../../pages/StartPage/StartPage';
import ToysPage from '../../pages/ToysPage/ToysPage';
import Layout from '../Layout/Layout';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <div className="container">
        <TransitionGroup>
          <CSSTransition timeout={100} classNames="page" key={location.key} unmountOnExit>
            <Routes location={location}>
              <Route path="/" element={<Layout/>}>
                <Route index element={<StartPage />} />
                <Route path="toys" element={<ToysPage />} />
                <Route path="tree" element={<ChristmasTreePage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
