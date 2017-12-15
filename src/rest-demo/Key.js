import React from 'react';

const keys = [
  'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f',
  '{bank acounts since 2015}',
  '{pension & savings records, mortgage records (non numerical)}',
  '{#betterfuture tasks + gig references}',
  '{references from p2p transactions}'
];

const colours = [
  'black',
  '#FF851B',
  '#FF4136',
  '#85144B',
  '#F012BE'
];

class Key extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      keyIndex: 0
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    let index = this.state.keyIndex;
    index++;
    if (index === keys.length) {
      index = 0;
    }
    this.setState({keyIndex: index});
  }

  render () {
    return (
      <span style={{color: colours[this.state.keyIndex]}} onClick={this.onClick}>
        {keys[this.state.keyIndex]}
      </span>
    );
  }
}

export default Key;
