import React from 'react';
import ReactDOM from 'react-dom';

import Graph from './Graph.js';
import ModelElementGroup from './ModelElementGroup.js';

const createUI = () => {
  const container = {
    className: 'container'
  };
  const graph = {
    className: 'graph'
  };
  const model = {
    className: 'model'
  };
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
    <div {...container}>
      <Graph {...graph} />
      <div {...model}>
        <ModelElementGroup {...finances} />
        <ModelElementGroup {...events} />
        <ModelElementGroup {...targets} />
      </div>
    </div>
  );
};

const getContainerElement = () => document.getElementById('react-container');

const start = () => {
  ReactDOM.render(createUI(), getContainerElement());
};

export default start;
