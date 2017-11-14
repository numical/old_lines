import React from 'react';
import ReactDOM from 'react-dom';

import Graph from './Graph.js';
import Finances from './Finances.js';
import Events from './Events.js';
import Targets from './Targets.js';

const getContainer = () => (
  <div>
    <Graph />
    <Finances />
    <Events />
    <Targets />
  </div>
);

const getContainerElement = () => document.getElementById('react-container');

const start = () => {
  ReactDOM.render(getContainer(), getContainerElement());
};

export default start;
