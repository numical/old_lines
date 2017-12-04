import React from 'react';

const hosts = [
  'myfinanciallife.org',
  'tescobank.com/smartbanking',
  'experian.com/saveourbusiness',
  'ambientfinance.org'
];

const colours = [
  'darkblue',
  'blue',
  'darkgreen',
  'darkred'
];

class Host extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hostIndex: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let index = this.state.hostIndex;
    index++;
    if (index === hosts.length) {
      index = 0;
    }
    this.setState({hostIndex:index});
  }

  render () {
    return (
      <span style={{color: colours[this.state.hostIndex]}} onClick={this.onClick}>
        {hosts[this.state.hostIndex]}
      </span>
    );
  }
}

export default Host;
