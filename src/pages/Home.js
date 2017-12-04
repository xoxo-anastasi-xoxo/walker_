import React, { Component } from 'react';
import  MapContainer from '../components/Map/MapContainer'
import UserForm from "../components/User/UserForm/UserForm"
import {setCookie, deleteCookie, getCookie} from '../cookie'

class Home extends Component {

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

    return (
      <div>
        <a href={"https://api.vk.com/method/users.get?user_ids=184087942&fields=bdate&access_token="+ getCookie("access_token")} >mmmmmmmmmmmmmmmmm</a>
        {/*<MapContainer/>*/}
        {/*<UserForm/>*/}
      </div>
    );
  }
}

export default Home;