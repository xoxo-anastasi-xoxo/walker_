import React, {Component} from 'react'
import {Map, /*InfoWindow, Marker,*/ GoogleApiWrapper} from 'google-maps-react';

import "./Map.css"

export class MapContainer extends Component {


  render() {
    if (!this.props.loaded) {
      return <div className="map">Loading...</div>
    }
    const style = {
      width: '100%',
      height: '100%'
    };


    return (
      <Map
        className="map"
        google={this.props.google}
           style={style}
           initialCenter={{
             lat: 58,
             lng: 47
           }}
           zoom={9}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)