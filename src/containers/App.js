import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LogIn from "../pages/LogIn/LogIn";
import Home from "../pages/Home";
import {setCookie, getCookie} from '../cookie'
import {loadInfo} from "../reducers/user"


class App extends Component {
componentWillMount() {
  if(document.cookie) {
    this.props.loadCookie();

    this.props.loadInfoNow.call(this, {id: getCookie("user_id"), access_token: getCookie("access_token")});
  }
}

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LogIn}/>
            <Route
              path='/account/'
              component={Home}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  loadInfoNow: (data) =>
    loadInfo.call(this, dispatch, data),
  loadCookie: () => dispatch({
    type: 'LOAD_COOKIE'
  })
});
export default connect(mapStateToProps, mapDispatchToProps)(App);