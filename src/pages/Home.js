import React, { Component } from 'react';
import  MapContainer from '../components/Map/MapContainer'
import UserForm from "../components/User/UserForm/UserForm"

class Home extends Component {



  render() {
    return (
      <div>
        <MapContainer/>
        <UserForm/>
      </div>
    );
  }
}

export default Home;