import React, {Component} from "react"
import {connect} from 'react-redux'
import SocialNetwork from "../SocialNetwork/SocialNetwork"
import "./SocialNetworkList.css"

class SocialNetworkList extends Component {
  render() {
    return (
      <div className="social-network-list">
        {this.props.list.map((key, index) => {
          if (index !== 0)
            return <SocialNetwork key={index} index={index}/>;
        })}
      </div>
    );

  }
}

const mapStateToProps = state => ({
  list: state.login.socialNetworks
});

export default connect(mapStateToProps)(SocialNetworkList);