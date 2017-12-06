import React, {Component} from 'react';
import GoogleMap from '../components/Map/GoogleMap'
import './Home.css'
import Filter from '../components/Filter/FilterList/FilferList'
import UserForm from "../components/User/UserForm/UserForm"
import CreateEvent from "../components/Event/CreateEvent/CreateEvent"
import {connect} from 'react-redux'


class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     flag: props.user.isCreating
  //   }
  // }

  // setCookie(name, value, options) {
  //   options = options || {};
  //
  //   var expires = options.expires;
  //
  //   if (typeof expires == "number" && expires) {
  //     var d = new Date();
  //     d.setTime(d.getTime() + expires * 1000);
  //     expires = options.expires = d;
  //   }
  //   if (expires && expires.toUTCString) {
  //     options.expires = expires.toUTCString();
  //   }
  //
  //   value = encodeURIComponent(value);
  //
  //   var updatedCookie = name + "=" + value;
  //
  //   for (var propName in options) {
  //     updatedCookie += "; " + propName;
  //     var propValue = options[propName];
  //     if (propValue !== true) {
  //       updatedCookie += "=" + propValue;
  //     }
  //   }
  //
  //   document.cookie = updatedCookie;
  // }
  componrntDidMount() {
    // VK.Api.call("users.get", {user_ids:"184087942", fields: "bdate",
    //     access_token: getCookie("access_token")
    //   },res => {
    //     // console.log("глубже");
    //     console.log(res);
    //     if (res.status !== 200) {
    //       console.log("status");
    //       console.log(res.status);
    //
    //       return;
    //     }
    //     res.json()
    //       .then(function (res) {
    //         console.log("result");
    //         console.log(res);
    //       })}
    // );
  }

  render() {
    // console.log(getCurrentPosition());
    // console.log("cookie:");
    return (
      <div className="map">
        <UserForm/>
        { (this.props.user.isCreating)? <CreateEvent lat={this.props.user.creatingEvent.lat} lng={this.props.user.creatingEvent.lng}/> : ""}
        <GoogleMap/>
        {/*<Filter/>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);