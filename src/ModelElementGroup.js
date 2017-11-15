import React from 'react';

class ModelElementGroup extends React.Component {
  renderElement (element, index) {
    return <div key={index}>{element}</div>;
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.elements.map(this.renderElement)}
      </div>
    );
  }
}

export default ModelElementGroup;
