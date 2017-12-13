import ContentType from './ContentType';
import React from 'react';
import URL from './URL';
import jsonDisplay from './types/json';
import scoreDisplay from './types/score';
import svgDisplay from './types/svg';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.displayResource = this.displayResource.bind(this);
    this.selectResource = this.selectResource.bind(this);
  }

  selectResource() {
    switch(this.state.type) {
      case 'application/json':
        return jsonDisplay;
      case 'application/vnd.tesco.mfl.score':
        return scoreDisplay;
      case 'image/svg+xml':
        return svgDisplay;
      default:
        return null;
    }
  }

  displayResource (type) {
    this.setState({type});
  }

  render() {
    return (
      <div id='form'>
        <div id='title'>ReST Demo</div>
        <URL />
        <ContentType GET={this.displayResource} />
        <div id='resource'>
          {this.selectResource()}
        </div>
      </div>
    );
  }
};

export default Form;
