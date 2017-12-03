import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"

import "./UserForm.css"

class UserForm extends Component {
  render() {
    return (
      <div className="user_form">
        <UserAvatar/>
        <UserMainInfo/>
      </div>
    );
  }
}

export default UserForm;