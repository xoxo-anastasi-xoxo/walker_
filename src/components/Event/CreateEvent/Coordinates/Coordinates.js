import React from 'react'
import './Coordinates.css'

class Coordinates extends React.Component {
  render() {
    return (<div className="coo">{this.props.children}</div>);
  }
}

export default Coordinates;