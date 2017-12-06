import React, {Component} from "react"
import UserAvatar from '../User/UserAvatar/UserAvatar'
import "./List.css"

class ListItem extends Component {
  render() {
    return (
      <div className="list__item" style={this.props.style}>
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

export default ListItem;