import React, {Component} from "react"
import ListItem from './ListItem'
import "./List.css"

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list__title">
          <h3 className="list__title__text">{this.props.title}</h3>
          <img className="list__title__img" alt={"V"} src="/img/v.svg"/>
        </div>
        {
          this.props.list.map((key, index) => {
            return (
              <ListItem key={index} name={key.name} ava={key.ava}/>)
          })
        }
      </div>
    );
  }
}

export default List;