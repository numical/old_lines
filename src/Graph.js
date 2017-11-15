import React from 'react';

class Graph extends React.Component {
  render () {
    const svg = {
      width: 400,
      height: 400
    };
    const xAxis = {
      x1: 5,
      x2: 395,
      y1: 395,
      y2: 395,
      'stroke-width': 2,
      stroke: 'black'
    };
    const yAxis = {
      x1: 5,
      x2: 5,
      y1: 5,
      y2: 395,
      'stroke-width': 2,
      stroke: 'black'
    };
    const salary = {
      x1: 5,
      x2: 395,
      y1: 195,
      y2: 195,
      'stroke-width': 2,
      stroke: 'red'
    };
    return (
      <svg {...svg}>
        <line {...xAxis} />
        <line {...yAxis} />
        <line {...salary} />
      </svg>
    );
  }
}

export default Graph;
