import React, {Component} from 'react';
import "./LogIn.css"
import SocialNetworkList from "../../components/LogIn/SocialNetworkList/SocialNetworkList"
import UserCard from "../../components/User/UserCard/UserCard"
import {connect} from 'react-redux'
import {setCookie, deleteCookie, getCookie} from '../../cookie'
import {loadInfo} from "../../reducers/user"

class LogIn extends Component {

  componentDidMount() {
    console.log("d login");
    console.log(this.props.user);
    this.props.loadInfoNow.call(this, {id: this.props.user.id, access_token: this.props.user.access_token});
  }

  componentWillMount() {
    let urlapi = require('url'),
      url = urlapi.parse(window.location.toString());

    if (url.hash !== null) {
      alert("updateCookie");
      url.hash.replace("#", "").split('&').forEach(
        el => {
          if (el.split('=')[0] !== "expires_in")
            setCookie(el.split('=')[0],
              el.split('=')[1],
              {path: "/", domain: "localhost:3000", expires: "Mon, 26 Aug 2019 00:00:00 GMT"});
        });
    }
    console.log("cookie:");
    console.log(document.cookie);
    if (url.hash !== null)
      window.location.href = "/account/184087942";

    console.log("new");
    console.log(window.location.href);
  }


  render() {

    console.log(document.cookie);
    return (
      <div className="login">
        <h1 className="login__header">Hi,&nbsp;I'm&nbsp;Walker!</h1>
        <p className="login__tagline">Let's&nbsp;go&nbsp;with&nbsp;me!</p>
        {getCookie("access_token") ? <UserCard/> : <SocialNetworkList/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  createAccount: (username) => dispatch({
    type: 'LOGIN_SUCCESS',
    payload: username
  }),
  accountError: () => dispatch({
    type: 'LOGIN_FAIL',
    error: true,
    payload: new Error('Ошибка авторизации')
  }),
  loginRequest: () => dispatch({
    type: 'LOGIN_REQUEST'
  }),
  loadInfoNow: (data) =>
    loadInfo.call(this, dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

