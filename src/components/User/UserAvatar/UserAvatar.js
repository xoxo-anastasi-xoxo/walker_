import React, {Component} from "react"
import {connect} from 'react-redux'
import "./UserAvatar.css"

class UserAvatar extends Component {
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