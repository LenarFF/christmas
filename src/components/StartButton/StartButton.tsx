import React from 'react';
import './StartButton.scss';
import { Link } from 'react-router-dom';

function StartButton(): JSX.Element {
  return (
    <Link to={'/toys'} className="start-btn">
      Начать
    </Link>
  );
}

export { StartButton };
