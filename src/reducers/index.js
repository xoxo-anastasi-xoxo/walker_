import { combineReducers } from 'redux'
import login from './login';
import user from './user'
import page from './page'

const rootReducer = combineReducers({
  user,
  page,
  login
});

export default rootReducer;