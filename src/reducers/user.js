/* global VK */
import {deleteCookie, getCookie} from '../cookie'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_COOKIE = 'LOAD_COOKIE';

const currentUser = {
  valid: false,
  access_token: undefined,
  id: undefined,
  age: undefined,
  ava: "",
  city: undefined,
  description: "",
  name: "",
  male: "",
  surname: "",
  birthday: "",
  groupList: [],
  eventList: [],
  friendList: []

};

export default function user(state = currentUser, action) {
  switch (action.type) {
    case LOAD_COOKIE:
      return {...state, access_token: getCookie("access_token"), id: getCookie("user_id")};

    case LOGIN_SUCCESS:
      let newState = {...state};

      newState.birthday = action.info.bdate;
      newState.name = action.info.first_name;
      newState.surname = action.info.last_name;
      newState.ava = action.info.photo_200;
      newState.valid = true;

      // console.log("action.info");
      // console.log(action.info);
      console.log("я закончиваю сс");

      return newState;

    case LOGIN_FAIL:
      console.log("login fail");
      console.log(state.name);

      newState = {...state};
      deleteCookie("user_id");
      deleteCookie("access_token");
      newState.access_token = undefined;
      newState.id = undefined;


      return newState;

    default:
      return state
  }
}

export const loadInfo = (dispatch, data) => {
  // console.log(data);
  console.log("load");

  VK.Api.call('users.get', {
    user_ids: data.id,
    fields: 'bdate,photo_200,sex,city',
    access_token: data.access_token
  }, function (r) {
    if (r.response) {
      console.log("s");
      return dispatch({type: LOGIN_SUCCESS, info: r.response[0]})
    }
  });
};

