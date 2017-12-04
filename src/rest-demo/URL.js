import React from 'react';
import Host from './Host';

const protocol = () => 'https://';

const resource = () => '/view/'

const id = () => 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f';

export default (props) => {
    return (
      <div id='url'>
        {protocol()}
        <Host />
        {resource()}
        {id()}
      </div>
    );
  }

