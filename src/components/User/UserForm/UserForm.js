import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"
import {connect} from 'react-redux'
import List from '../../List/List'

import "./UserForm.css"

class UserForm extends Component {
  render() {
    return (
      <div className="user_form">
        <div className="user_form__info">
        <UserAvatar ava={this.props.user.ava}/>
        <UserMainInfo/>
      </div>
        <div className="user_form__lists">
          <div className="user_form__lists_item">
        <List title="Друзья" list={this.props.user.friendList.map((elem) => {
          let name = elem.first_name + " " + elem.last_name;
          return {name: name, ava: elem.photo_200}
        })}/>
          </div>

            <div className="user_form__lists_item">
        <List title="События" list={this.props.user.eventList.map((elem) => {
          return {name: elem.name, ava: elem.logo}
        })}/>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(UserForm);