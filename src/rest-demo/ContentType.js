import React from 'react';

const types = [
  'application/json',
  'application/vnd.tesco.mfl.score',
  'image/svg+xml'
];

class ContentType extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selected: types[0],
      GET: props.GET
    }
    this.fireGET = this.fireGET.bind(this);
  }

  fireGET () {
    this.state.GET(this.state.selected);
  }

  render () {
    const options = types.map((type, index) => {
      return (<option key={index} value={type}>{type}</option>);
    });

    const typeSelected = (event) => {
      this.setState({selected: event.target.value, GET: this.state.GET});
    };

    return (
      <div id='contentType'>
        Content Type:
        <select name="contentType" onChange={typeSelected}>
          {options}
        </select>
        <button onClick={this.fireGET}>GET</button>
      </div>
    );
  }
}

export default ContentType;
