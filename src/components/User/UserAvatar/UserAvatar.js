import React, {Component} from "react"
import "./UserAvatar.css"

class UserAvatar extends Component {
  render() {
    return(
      <div className="avatar-container">
        <img className="avatar" alt="Avatar" src={this.props.ava}/>
      </div>
    );
  }
}

export default UserAvatar;