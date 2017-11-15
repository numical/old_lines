import React from 'react';
import ReactDOM from 'react-dom';

import Graph from './Graph.js';
import ModelElementGroup from './ModelElementGroup.js';

const createUI = () => {
  const finances = {
    title: 'Finances',
    elements: ['salary', 'pension', 'savings', 'life assurance']
  };
  const events = {
    title: 'Life Events',
    elements: ['new job', 'buy house', 'maternity', 'retirement']
  };
  const targets = {
    title: 'Targets',
    elements: ['sufficient house deposit', 'minimum pension level']
  };

  return (
    <div>
      <Graph />
      <ModelElementGroup {...finances} />
      <ModelElementGroup {...events} />
      <ModelElementGroup {...targets} />
    </div>
  );
};

const getContainerElement = () => document.getElementById('react-container');

const start = () => {
  ReactDOM.render(createUI(), getContainerElement());
};

export default start;
