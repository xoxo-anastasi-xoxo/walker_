import React, {Component} from 'react';
import "./LogIn.css"
import SocialNetworkList from "../../components/LogIn/SocialNetworkList/SocialNetworkList"
import UserCard from "../../components/User/UserCard/UserCard"
import {connect} from 'react-redux'
import {setCookie, getCookie} from '../../cookie'
import {loadInfo} from "../../reducers/user"
import Geolocation from "react-geolocation";


class LogIn extends Component {

  updateCookie() {
    let urlapi = require('url'),
      url = urlapi.parse(window.location.toString());

    url.hash.replace("#", "").split('&').forEach(
      el => {
        if (el.split('=')[0] === "access_token" || el.split('=')[0] === "user_id") {

          setCookie(el.split('=')[0],
            el.split('=')[1],
            {
              expires: "Mon, 26 Aug 2019 00:00:00 GMT"
            });
        }
      });

    // console.log("cookie:");
    // console.log(document.cookie);
  }

  componentDidMount() {
    setTimeout((function(){
      if (!this.props.user.valid)
      this.props.deleteCookie();
    }).bind(this), 1500)
    // console.log("d login");
    // console.log(this.props.user);
    // this.props.loadInfoNow.call(this, {id: this.props.user.id, access_token: this.props.user.access_token});
  }

  componentWillMount() {
    if (window.location.hash !== "") {
      // загрузаить куки + в инфу о пользователе тоже и сменить страницу
      this.updateCookie();
      this.props.loadCookie();
      this.props.loadInfoNow.call(this, {id: getCookie("user_id"), access_token: getCookie("access_token")});
        window.location.href = "/account/" + getCookie("user_id");
    }
  }


  render() {

    console.log("cookie при рендере:");
    console.log(document.cookie);

    console.log(this.props.user.access_token);
    return (
      <div className="login">
        <h1 className="login__header">Hi, I'm&nbsp;Walker!</h1>
        <p className="login__tagline">Let's&nbsp;go&nbsp;with&nbsp;me!</p>
        {this.props.user.valid ? <UserCard/> : <SocialNetworkList/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  loadInfoNow: (data) =>
    loadInfo.call(this, dispatch, data),
  loadCookie: () => dispatch({
    type: 'LOAD_COOKIE'
  }),
  loadPosition: (data) => dispatch({
    type: 'GET_POSITION',
    data: data
  }),
  deleteCookie: () => dispatch({
    type: 'LOGIN_FAIL'
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

