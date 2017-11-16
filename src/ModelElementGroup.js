import React from 'react';

class ModelElementGroup extends React.Component {
  renderElement (element, index) {
    const props = {
      key: index,
      className: 'element'
    };
    const configureImageProps = {
      src: '/images/cog.svg',
      alt: 'Configure',
      className: 'icon'
    };
    const importImageProps = {
      src: '/images/account-login.svg',
      alt: 'Live Import',
      className: 'icon'
    };
    const agentImageProps = {
      src: '/images/person.svg',
      alt: 'Agent',
      className: 'icon'
    };
    return (
      <div {...props}>
        {element}
        <img {...agentImageProps} />
        <img {...configureImageProps} />
        <img {...importImageProps} />
      </div>);
  }

  renderAdd () {
    const props = {
      className: 'element'
    };
    return <div {...props}>+</div>;
  }

  render () {
    return (
      <div className='group'>
        <h2>{this.props.title}</h2>
        {this.props.elements.map(this.renderElement)}
        {this.renderAdd()}
      </div>
    );
  }
}

export default ModelElementGroup;
