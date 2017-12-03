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

        {/*<Marker*/}
          {/*title={'The marker`s title will appear as a tooltip.'}*/}
          {/*name={'SOMA'}*/}
          {/*draggable={true}*/}
        {/*animation={this.props.google.maps.Animation.DROP}*/}
          {/*position={{lat: -37.778519, lng: -122.405640}} />*/}
        {/*<Marker title={'The marker`s title will appear as a tooltip.'} />*/}
        {/*<Marker*/}
          {/*title={'SECOND'}*/}
          {/*name={'Dolores park'}*/}
          {/*position={{lat: 37.759703, lng: -122.428093}} />*/}

        {/*<Marker*/}
          {/*ref={(me) => {*/}
            {/*console.warn('ref: ' + (me ? 'not null' : 'null'));*/}
            {/*this.totMarker = me;*/}
          {/*}}*/}
          {/*name={'Your position'}*/}
          {/*// position={{lat: 0.762391, lng: -122.439192}}*/}
          {/*icon={{*/}
            {/*url: "img/kapelka-03.svg",*/}
            {/*anchor: new  this.props.google.maps.Point(32,32),*/}
            {/*scaledSize: new  this.props.google.maps.Size(164,164)*/}
          {/*}} />*/}
        {/*<Marker onClick={this.onMarkerClick}*/}
                {/*name={'Current location'} />*/}

        {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
          {/*<div>*/}
            {/*<h1>{this.state.selectedPlace.name}</h1>*/}
          {/*</div>*/}
        {/*</InfoWindow>*/}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)