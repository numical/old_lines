import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const getContainerElement = () => document.getElementById('react-container');

const start = () => {
  ReactDOM.render(<Form />, getContainerElement());
};

start();
