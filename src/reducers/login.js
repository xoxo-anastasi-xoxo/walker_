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
  to: "/",
  src: "img/twitter.svg"
}, {
  key: 3,
  name: "Google",
  to: "/",
  src: "img/google.svg"
}, {
  key: 4,
  name: "Facebook",
  to: "/",
  src: "img/facebook.svg"
}];

const entryButton = { key: 0,
  name: "Вход",
  to: "/account/",
  src: "img/entry.svg"};

const exitButton = { key: -1,
  name: "Выход",
  to: "/",
  src: "img/exit.svg"};

export default function login(state = {
  socialNetworks: socialNetworks,
  entryButton: entryButton,
  exitButton: exitButton
}, action) {
  console.log("login redusor");
  return state
}
