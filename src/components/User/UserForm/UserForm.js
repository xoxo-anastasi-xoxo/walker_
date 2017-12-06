import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"
import {connect} from 'react-redux'
import List from '../../List/List'

import "./UserForm.css"

class UserForm extends Component {
  render() {
    console.log("mmmm");
    console.log(this.props.user.friendList);
    return (
      <div className="user_form">
        <UserAvatar ava={this.props.user.ava}/>
        <UserMainInfo/>

        <List title="Друзья" list={this.props.user.friendList.map((elem) => {
          let name = elem.first_name + " " + elem.last_name;
          return {name: name, ava: elem.photo_200}
        })}/>
        <List title="События" list={this.props.user.eventList.map((elem) => {
          return {name: elem.name, ava: elem.logo}
        })}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserForm);