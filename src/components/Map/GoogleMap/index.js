import React from 'react';
import GoogleMapReact from 'google-map-react';
import supercluster from 'points-cluster';
import {connect} from 'react-redux'

import Marker from '../Marker';
import ClusterMarker from '../ClusterMarker';

import mapStyles from './mapStyles.json';
import {markersData, susolvkaCoords} from '../fakeData';

import MapWrapper from './MapWrapper';

const MAP = {
  defaultZoom: 8,
  defaultCenter: susolvkaCoords,
  options: {
    styles: mapStyles,
    maxZoom: 19,
  },
};

export class GoogleMap extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    mapOptions: {
      center: this.props.user.center,
      zoom: MAP.defaultZoom,
    },
    clusters: [],
  };

  getClusters = () => {

    let arr = markersData;
    if (this.props.user.creatingEvent.lat) arr = arr.concat(this.props.user.creatingEvent);
    const clusters = supercluster(arr.concat(this.props.user.eventList), {
      minZoom: 0,
      maxZoom: 16,
      radius: 60,
    });
    return clusters(this.state.mapOptions);
  };

  createClusters = props => {
    this.setState({
      clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({wx, wy, numPoints, points}) => ({
          lat: wy,
          lng: wx,
          numPoints,
          id: `${numPoints}_${points[0].id}`,
          points,
        }))
        : [],
    });
  };

  handleMapChange = ({center, zoom, bounds}) => {
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds,
        },
      },
      () => {
        this.createClusters(this.props);
      }
    );
  };

  render() {
    return (
      <MapWrapper>
        <GoogleMapReact
          onClick={(obj) => {
            // console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
            this.props.createEvent({lat: obj.lat, lng: obj.lng});
            this.createClusters(this.props);
          }}
          defaultZoom={MAP.defaultZoom}
          defaultCenter={this.props.user.center}
          options={MAP.options}
          onChange={this.handleMapChange}
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{key: 'AIzaSyAS3ix4rVY4A-T4yPzWlEi766ycl2mY818'}}
        >
          {this.state.clusters.map(item => {
            // console.log(item)
            if (item.numPoints === 1) {
              console.log(item.points[0].logo)
              return (
                <Marker
                  logo={item.points[0].logo}
                  key={item.id}
                  lat={item.points[0].lat}
                  lng={item.points[0].lng}
                />
              );
            }

            return (
              <ClusterMarker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                points={item.points}
              />
            );
          })}
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  createEvent: (data) => dispatch({
    type: 'START_CREATE_EVENT',
    data: data
  })
});
export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
