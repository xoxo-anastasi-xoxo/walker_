/* global VK */
import {deleteCookie, getCookie} from '../cookie'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_COOKIE = 'LOAD_COOKIE';
export const LOAD_FRIEND = 'LOAD_FRIEND';

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
  eventList: [{
    lat: 55,
    lng: 55,
    data: undefined,
    name: "Научная конференция \"Яркость!\"",
    logo:"/img/events/RoundIcons_FreeSet-60.svg",
    description: "",
    mode: "",
    participants: []
  }, {
      lat: 56,
      lng: 55,
    data: undefined,
      name: "Велосипедная прогулка",
      logo:"/img/events/RoundIcons_FreeSet-52.svg",
      description: "",
      mode: "",
      participants: []
    }, {
    lat: 55,
    lng: 57,
    data: undefined,
    name: "МК по живописи",
    logo:"/img/events/RoundIcons_FreeSet-7.svg",
    description: "",
    mode: "",
    participants: []
  }, {
    lat: 54,
    lng: 55,
    data: undefined,
    name: "Университетский матч",
    logo:"/img/events/RoundIcons_FreeSet-8.svg",
    description: "",
    mode: "",
    participants: []
  }],
  friendList: []

};

export default function user(state = currentUser, action) {
  switch (action.type) {
    case LOAD_FRIEND:
      console.log("list:");
      console.log(action.list);
      return {...state, friendList: action.list};
    case LOAD_COOKIE:
      return {...state, access_token: getCookie("access_token"), id: getCookie("user_id")};

    case LOGIN_SUCCESS:
      let newState = {...state};
      if (!state.access_token) return state;
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
  VK.Api.call('friends.getAppUsers', {}, function (r) {
    console.log("response");
    console.log(r.response);
    VK.Api.call('users.get', {
      user_ids: r.response,
      fields: 'bdate,photo_200,sex,city'
    }, function (r) {
      return dispatch({type: LOAD_FRIEND, list: r.response})
    });
  });
};

