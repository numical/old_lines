import React from 'react';
import Host from './Host';
import Key from './Key.js';

const protocol = () => 'https://';

const resource = () => '/ecv/view/';

export default (props) => {
  return (
    <div id='url'>
      {protocol()}
      <Host />
      {resource()}
      <Key />
    </div>
  );
};
