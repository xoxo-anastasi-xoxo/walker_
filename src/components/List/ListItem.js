import React, {Component} from "react"
import UserAvatar from '../User/UserAvatar/UserAvatar'
import "./List.css"

class ListItem extends Component {
  render() {
    return (
      <div className="list__item">
        <div className="list__item__img">
          <UserAvatar ava={this.props.ava}/>
        </div>
        <div>
          <p className="list__item__name">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;