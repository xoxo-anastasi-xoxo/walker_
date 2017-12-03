import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LogIn from "../pages/LogIn/LogIn";
import CreateEvent from '../pages/CreateEvent'
import Home from "../pages/Home";
import Event from '../pages/Event'

class App extends Component {


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
            {/*<Route*/}
              {/*path='/account/:accountId/create-event/:eventId'*/}
              {/*component={CreateEvent}*/}
            {/*/>*/}
            {/*<Route path='/account/:accountId/event/:eventId' component={Event}/>*/}
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);