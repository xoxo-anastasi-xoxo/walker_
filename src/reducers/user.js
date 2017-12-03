export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_FAIL = 'LOGIN_FAIL';

const currentUser = {
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
    case LOGIN_SUCCES:
      console.log("reducerrr");
      let newState = {...state};
      newState.name = action.payload;
      return newState;

    case LOGIN_FAIL:
      return {...state, error: action.payload.message};

    default:
      return state
  }
}
