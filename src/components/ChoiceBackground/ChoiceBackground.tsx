import React from 'react';
import { backgrounds } from '../../data/tree';
import './ChoiceBackground.scss';

const ChoiceBackground = () => {
  return (
    <div className="choice-background">
      <h3 className="toys__title">Выберите фон</h3>
      <div className="choice-background__field">
        {backgrounds.map((background) => (
          <img
            src={`./assets/bg/${background}.jpg`}
            className="choice-background__img"
            data-background={background}
            key={background}
          />
        ))}
      </div>
    </div>
  );
}

export { ChoiceBackground };
