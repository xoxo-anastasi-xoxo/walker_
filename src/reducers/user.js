/* global VK */
import {deleteCookie, getCookie} from '../cookie'

export const START_CREATE_EVENT = 'START_CREATE_EVENT';
export const CONTINUE_CREATE_EVENT = 'CONTINUE_CREATE_EVENT';
export const UPDATE_DATE = 'UPDATE_DATE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_COOKIE = 'LOAD_COOKIE';
export const LOAD_FRIEND = 'LOAD_FRIEND';
export const CREATE_EVENT = 'CREATE_EVENT';
export const PREVENT_CREATING = 'PREVENT_CREATING';
export const CHANGE_CENTER='CHANGE_CENTER'


const currentUser = {
  center: { lat: 55.756429, lng: 37.607753 },
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
    id: 10000009,
    lat: 55,
    lng: 55,
    date: undefined,
    name: "Научная конференция \"Яркость!\"",
    logo: "/img/events/RoundIcons_FreeSet-60.svg",
    description: "",
    mode: "",
    participants: []
  }, {
    id: 78954345,
    lat: 56,
    lng: 55,
    date: undefined,
    name: "Велосипедная прогулка",
    logo: "/img/events/RoundIcons_FreeSet-52.svg",
    description: "",
    mode: "",
    participants: []
  }, {
    id: 9998888654,
    lat: 55,
    lng: 57,
    date: undefined,
    name: "МК по живописи",
    logo: "/img/events/RoundIcons_FreeSet-7.svg",
    description: "",
    mode: "",
    participants: []
  }, {
    id: 87643114,
    lat: 54,
    lng: 55,
    date: undefined,
    name: "Университетский матч",
    logo: "/img/events/RoundIcons_FreeSet-8.svg",
    description: "",
    mode: "",
    participants: []
  }],
  friendList: [],
  creatingEvent: {
    id: Math.random(),
    logo: undefined,
    lat: undefined,
    lng: undefined,
    name: undefined,
    description: undefined,
    date: new Date()
  },
  isCreating: false
};

export default function user(state = currentUser, action) {
  console.log("user redusor");
  switch (action.type) {
    case LOGIN_SUCCESS:
      let newState = {...state};
      if (!state.access_token) return state;
      newState.birthday = action.info.bdate;
      newState.name = action.info.first_name;
      newState.surname = action.info.last_name;
      newState.ava = action.info.photo_200;
      newState.valid = true;


      return newState;
    case CHANGE_CENTER:
      newState = {...state};
      // console.log(newState.eventList[parseInt(action.id)]);
      newState.center.lat = newState.eventList[action.id].lat;
      newState.center.lng = newState.eventList[action.id].lng;
      console.log("CHANGE_CENTER");
      console.log(action);


      return newState;
    case START_CREATE_EVENT:
      newState = {...state};
      newState.creatingEvent.lat = action.data.lat;
      newState.creatingEvent.lng = action.data.lng;
      newState.isCreating = true;
      // console.log(newState);

      return newState;

    case CONTINUE_CREATE_EVENT:
      newState = {...state};
      newState.creatingEvent.logo = action.data.logo;

      return newState;

    case PREVENT_CREATING:
      return {
        ...state, creatingEvent: {
          logo: undefined,
          lat: undefined,
          lng: undefined,
          name: undefined,
          description: undefined,
          date: new Date()
        },
        isCreating: false
      };

    case CREATE_EVENT:
      newState = {...state};

      newState.creatingEvent.name
        = action.data.name;
      newState.creatingEvent.description = action.data.description;
      newState.creatingEvent.lng = action.data.lng;
      newState.creatingEvent.lat = action.data.lat;
      newState.creatingEvent.logo = action.data.logo;


      newState.eventList = [...state.eventList, {
        ...newState.creatingEvent, mode: "",
        participants: []
      }];
      return newState;

    case UPDATE_DATE:
      newState = {...state};
      newState.creatingEvent.date = action.data;
      return newState;

    case LOAD_FRIEND:
      return {...state, friendList: action.list};

    case LOAD_COOKIE:
      return {...state, access_token: getCookie("access_token"), id: getCookie("user_id")};


    case LOGIN_FAIL:
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

