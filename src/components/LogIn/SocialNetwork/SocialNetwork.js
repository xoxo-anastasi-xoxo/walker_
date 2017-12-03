import React from 'react';
import {connect} from 'react-redux'
// import {NavLink} from 'react-router-dom'
import "./SocialNetwork.css"

class SocialNetwork extends React.Component {
  client_id = 6278299;
  redirect_uri = "http://localhost:3000/account/121212";

  uri = 'https://oauth.vk.com/authorize?client_id='
    + this.client_id + '&display=popup&redirect_uri='
    + this.redirect_uri + '&scope=friends&response_type=token&v=5.69'

  render() {
    return (
      <a key={this.props.index}
         href={this.props.login.socialNetworks[this.props.index].to}
      // href={this.uri}
      >
        <button className="button" type="button">
          <img className="button__image" alt={this.props.login.socialNetworks[this.props.index].name} src={this.props.login.socialNetworks[this.props.index].src} />
        </button>
      </a>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});
//
// const mapDispatchToProps = dispatch => ({
//   createAccount: (account) => dispatch(updateFirebaseAction('accounts', account))
// });

export default connect(mapStateToProps)(SocialNetwork);