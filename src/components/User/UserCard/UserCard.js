import React, {Component} from "react"
import UserAvatar from "../UserAvatar/UserAvatar"
import UserMainInfo from "../UserMainInfo/UserMainInfo"
import SocialNetwork from "../../LogIn/SocialNetwork/SocialNetwork"
import "./UserCard.css"
import {connect} from 'react-redux'


class UserCard extends Component {
  render() {
    return (
      <div className="user_card">
        <div className="user_card__item">
          <UserAvatar ava={this.props.user.ava}/>
        </div>
        <div className="user_card__item">
          <UserMainInfo/>
          <div className="user_card__buttons">
            <SocialNetwork className="user_card__item__button"
                           key={this.props.entryButton.key} index={this.props.entryButton.key}
                           to={this.props.entryButton.to + this.props.user.id} name={this.props.entryButton.name}
                           src={this.props.entryButton.src}
            />
            <div onClick={
              () =>  this.props.exitNow()
            }>
              <SocialNetwork className="user_card__item__button"
                             key={this.props.exitButton.key} index={this.props.exitButton.key}
                             to={this.props.exitButton.to} name={this.props.exitButton.name}
                             src={this.props.exitButton.src}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  entryButton: state.login.entryButton,
  exitButton: state.login.exitButton,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  exitNow: () => dispatch({
    type: 'LOGIN_FAIL'
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);