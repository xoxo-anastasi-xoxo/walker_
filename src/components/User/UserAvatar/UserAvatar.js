import React, {Component} from "react"
import {connect} from 'react-redux'
import "./UserAvatar.css"

class UserAvatar extends Component {
  setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }
  componentWillMount() {
    let urlapi = require('url'),
      url = urlapi.parse(window.location.toString());

//     http://localhost:3000/account/#access_token=846e4e822135d46a7993970c06b0c0d116ce5f977ba20a0041a3c60f7480d99572b226bbd5bbe103adafe&expires_in=86400&user_id=184087942
//       http:
//     localhost
//     3000
//     /account/
//     null
// #access_token=846e4e822135d46a7993970c06b0c0d116ce5f977ba20a0041a3c60f7480d99572b226bbd5bbe103adafe
// &expires_in=86400
// &user_id=184087942
    console.log(
      url.href + '\n' +           // the full URL
      url.protocol + '\n' +       // http:
      url.hostname + '\n' +       // site.com
      url.port + '\n' +           // 81
      url.pathname + '\n' +       // /path/page
      url.search + '\n' +         // ?a=1&b=2
      url.hash                    // #hash
    );
    this.setCookie("access_token=", url.hash);
    console.log("cookie:")
    console.log(document.cookie);
if (url.hash !== null)
    window.location.href = url.protocol +
      url.hostname +
      url.port +
      url.pathname  + "184087942";

    console.log("new");
    console.log(window.location.href);
  }

  render() {


    return(
      <div className="avatar-container">
        <img className="avatar" alt="Avatar" src={this.props.userAvatar}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAvatar: state.user.ava
});
//
// const mapDispatchToProps = dispatch => ({
//   createAccount: (account) => dispatch(updateFirebaseAction('accounts', account))
// });

export default connect(mapStateToProps)(UserAvatar);