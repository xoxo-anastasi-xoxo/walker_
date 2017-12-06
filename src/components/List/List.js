import React, {Component} from "react"
import ListItem from './ListItem'
import {NavLink} from 'react-router-dom'
import "./List.css"

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false
    }
  }

  render() {
    let myStyle = {
      display: 'none'
    };

    let myStyle2 = {
      display: 'flex'
    };

    return (
      <div className="list">
       <div className="list__title" onClick={()=>{this.setState({flag: !this.state.flag})}}>
          <h3 className="list__title__text">{this.props.title}</h3>
          <img className="list__title__img" alt={"V"} src="/img/v.svg"/>
       </div>
        {
          this.props.list.map((key, index) => {
            if (this.state.flag) return (
              <ListItem style={myStyle2} key={index} name={key.name} ava={key.ava}/>)
            else
            return (
              <ListItem style={myStyle} key={index} name={key.name} ava={key.ava}/>)
          })
        }
      </div>
    );
  }
}

export default List;