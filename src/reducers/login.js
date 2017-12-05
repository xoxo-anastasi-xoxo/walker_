const socialNetworks = [{
  key: 1,
  name: "VK",
  to: "https://oauth.vk.com/authorize?client_id="
  + 6278299 + "&display=popup&redirect_uri="
  + "https://nkwalker.herokuapp.com/"
  // + "http://localhost:3000/"
  + "&scope=offline,friends,photos&response_type=token&v=5.69",
  src: "img/vk.svg"
}, {
  key: 2,
  name: "Twitter",
  to: "http://localhost:3000/account/12345",
  src: "img/twitter.svg"
}, {
  key: 3,
  name: "Google",
  to: "http://localhost:3000/account/12345",
  src: "img/google.svg"
}, {
  key: 4,
  name: "Facebook",
  to: "http://localhost:3000/account/12345",
  src: "img/facebook.svg"
}];

const entryButton = { key: 0,
  name: "Вход",
  to: "https://nkwalker.herokuapp.com/account/",
  // to: "http://localhost:3000/account/",
  src: "img/entry.svg"};

const exitButton = { key: -1,
  name: "Выход",
  to: "https://nkwalker.herokuapp.com/",
  // to: "http://localhost:3000/",
  src: "img/exit.svg"};

export default function login(state = {
  socialNetworks: socialNetworks,
  entryButton: entryButton,
  exitButton: exitButton
}, action) {

  return state
}
