import React, {Component} from "react"
import ListItem from './ListItem'
import {NavLink} from 'react-router-dom'
import "./List.css"

class List extends Component {
  constructor(props) {
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

    let borderStyle = this.state.flag ? {
      'border-bottom': '3px solid rgba(33, 150, 243, 0.9)'
    } : {'border-bottom': '3px solid rgba(33, 150, 243, 0.3)'};

    let imgStyle = this.state.flag ? {
      opacity: 0.9
    } : { opacity: 0.3};
    return (
      <div className="list">
        <div className="list__title"
             onClick={() => {
               this.setState({flag: !this.state.flag})
             }}
             style={borderStyle}
        >
          <h3 className="list__title__text">{this.props.title}</h3>
          <img style={imgStyle}
               className="list__title__img"
               alt={"V"}
               src="/img/v.svg"/>
        </div>
        {
          this.props.list.map((key, index) => {
            if (this.state.flag) return (
              <ListItem style={myStyle2} key={index} index={index} name={key.name} ava={key.ava}/>)
            else
              return (
                <ListItem style={myStyle} key={index} index={index} name={key.name} ava={key.ava}/>)
          })
        }
      </div>
    );
  }
}

export default List;