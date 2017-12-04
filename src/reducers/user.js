/* global VK */
import {setCookie, deleteCookie, getCookie} from '../cookie'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_COOKIE = 'LOAD_COOKIE';

const currentUser = {
  access_token: undefined,
  id: undefined,
  age: undefined,
  ava: "",
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
      console.log(action.info);
      console.log("state");
      console.log(state);

      return newState;

    case LOGIN_FAIL:
      return {...state, error: action.payload.message};

    default:
      return state
  }
}

const urlInfoReqest = "https://api.vk.com/method/users.get?user_ids=184087942&fields=bdate&access_token=" + getCookie("access_token");

export const loadInfo = (dispatch, data) => {
  const urlInfoReqest = "https://api.vk.com/method/users.get?user_ids=184087942&fields=bdate&access_token=" + data.access_token;
  console.log("load");
  console.log(data.id);
  VK.Api.call('users.get', {user_ids: data.id, fields: 'bdate,photo_200,sex'}, function(r) {
    if(r.response) {
      return dispatch({ type: LOGIN_SUCCESS, info: r.response[0] })
    }
  });
  // return fetch(urlInfoReqest, {mode: "no-cors"})
  //   .then(response => {console.log(response); return response;},response => {console.log("--" + response); return response;})
  //    .then(response =>{return response.json()})
    // .then(data => {
    //   return dispatch({ type: LOGIN_SUCCESS, info: data })
    // }
    // );
};

