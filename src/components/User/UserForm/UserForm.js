import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"
import {connect} from 'react-redux'
import UserFriendList from '../UserFriendList/UserFriendList'

import "./UserForm.css"

class UserForm extends Component {
  render() {
    return (
      <div className="user_form">
        <UserAvatar ava={this.props.user.ava}/>
        <UserMainInfo/>
        <UserFriendList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserForm);