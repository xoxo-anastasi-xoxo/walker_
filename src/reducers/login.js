const socialNetworks = [{
  key: 0,
  name: "VK",
  to: "https://oauth.vk.com/authorize?client_id="
  + 6278299 + "&display=popup&redirect_uri="
  + "http://localhost:3000/"
  + "&scope=offline,friends,photos&response_type=token&v=5.69",
  src: "img/vk.svg"
}, {
  key: 1,
  name: "Twitter",
  to: "http://localhost:3000/account/12345",
  src: "img/twitter.svg"
}, {
  key: 4,
  name: "Google",
  to: "http://localhost:3000/account/12345",
  src: "img/google.svg"
}, {
  key: 5,
  name: "Facebook",
  to: "http://localhost:3000/account/12345",
  src: "img/facebook.svg"
}];

export default function login(state = {
  socialNetworks: socialNetworks
}, action) {

  return state
}
