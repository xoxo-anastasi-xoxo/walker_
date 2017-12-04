import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"
import SocialNetwork from "../../LogIn/SocialNetwork/SocialNetwork"
import "./UserCard.css"

class UserCard extends Component {
  render() {
    return (
      <div className="user_form">
        <UserAvatar/>
        <UserMainInfo/>
        <SocialNetwork key={0} index={0}/>
      </div>
    );
  }
}

export default UserCard;