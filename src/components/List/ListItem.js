import React, {Component} from "react"
import UserAvatar from '../User/UserAvatar/UserAvatar'
import {connect} from 'react-redux'
import "./List.css"

class ListItem extends Component {
  render() {
    return (
      <div className="list__item"
           style={this.props.style}
           // onClick={this.props.changeCenter.bind(this, this.props.index)}
      >
        <div className="list__item__img">
          <UserAvatar ava={this.props.ava}/>
        </div>
        <div className="list__item__name">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  changeCenter: (id) => dispatch({
    type: 'CHANGE_CENTER',
    id: id
  })
});

export default connect(undefined, mapDispatchToProps)(ListItem);