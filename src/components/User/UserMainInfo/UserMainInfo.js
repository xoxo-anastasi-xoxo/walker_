import React, {Component} from "react"
import {connect} from 'react-redux'
import "./UserMainInfo.css"

class UserMainInfo extends Component {
  render() {
    return(
      <div className="main-info">
        <p className="main-info__name">{this.props.user.surname} {this.props.user.name}</p>
        <p className="main-info__birthday">{this.props.user.birthday}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserMainInfo);