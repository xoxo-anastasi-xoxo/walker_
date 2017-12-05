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
          <SocialNetwork className="user_card__item__button"
            key={this.props.entryButton.key} index={this.props.entryButton.key}
            to={this.props.entryButton.to + this.props.user.id} name={this.props.entryButton.name}
            src={this.props.entryButton.src}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  entryButton: state.login.entryButton,
  user: state.user
});
//
// const mapDispatchToProps = dispatch => ({
//   createAccount: (account) => dispatch(updateFirebaseAction('accounts', account))
// });

export default connect(mapStateToProps)(UserCard);