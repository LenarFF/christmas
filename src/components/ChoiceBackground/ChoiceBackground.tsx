import React, { useContext } from 'react';
import { FilterContext } from '../../context';
import { backgrounds } from '../../data/tree';
import './ChoiceBackground.scss';

const ChoiceBackground = () => {

  const { appState, setAppState } = useContext(FilterContext);

  const handleClick = (target: HTMLElement) => {
    if (!target.getAttribute('data-background')) return;
    appState.treeState.background = target.getAttribute('data-background') as string;
    setAppState({ ...appState });
  };

  return (
    <div className="choice-background">
      <h3 className="toys__title">Выберите фон</h3>
      <div className="choice-background__field" onClick={e => handleClick(e.target as HTMLElement)}>
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
