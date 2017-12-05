import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import {connect} from 'react-redux'


import "./UserFriendList.css"

class UserFriendList extends Component {
  render() {
    console.log(this.props.list);
    return (
      <div className="list">
        {
          this.props.list.map((key, index) => {
            return <div key={index} className="list__img"><UserAvatar  ava={key.photo_200}/></div>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.user.friendList
});

export default connect(mapStateToProps)(UserFriendList);