import React from 'react';

class Graph extends React.Component {
  render () {
    const margin = 5;
    const width = window.innerWidth;
    const height = 400;

    const svg = {
      width,
      height
    };

    const xAxis = {
      x1: margin,
      x2: width - (margin * 8),
      y1: height - margin,
      y2: height - margin,
      'stroke-width': 2,
      stroke: 'white'
    };

    const yAxis = {
      x1: margin,
      x2: margin,
      y1: margin,
      y2: height - margin,
      'stroke-width': 2,
      stroke: 'white'
    };

    const salary = {
      x1: margin,
      x2: width - (margin * 8),
      y1: height / 2,
      y2: height / 2,
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
