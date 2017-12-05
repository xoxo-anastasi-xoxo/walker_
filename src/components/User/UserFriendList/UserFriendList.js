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
            return (
              <div key={index} className="list__elem">
                <div key={index} className="list__img">
                  <UserAvatar ava={key.photo_200}/>
                </div>
                <div>
                  <p className="list__elem__name">{key.first_name}</p>
                  <p className="list__elem__name">{key.last_name}</p>
                </div>
              </div>)
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