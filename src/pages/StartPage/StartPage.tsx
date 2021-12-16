import React from 'react';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { StartButton } from '../../components/StartButton/StartButton';
import './StartPage.scss';

function StartPage(): JSX.Element {
  return (
    <div className="container start-page">
      <MainTitle />
      <StartButton />
    </div>
  );
}

export default StartPage;
