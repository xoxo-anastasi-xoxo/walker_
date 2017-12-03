import { createStore/*, applyMiddleware */} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer
 // applyMiddleware(subscribeFirebase, updateFirebase, thunk)
);

export default store;



// const currentUser = {
//   id: 1,
//   age: 19,
//   ava: "https://pp.userapi.com/c639423/v639423942/33869/7TTCS4sbeu0.jpg",
//   description: "",
//   name: "Anastasia",
//   male: "female",
//   surname: "Kazantseva",
//   birthday: "12.07.98",
//   groupList: {},
//   eventList: [{
//     X: 55,
//     Y: 55,
//     name: "Cinema Tomorrow",
//     description: "That new movie was so mush-awaited! It must be cool! Let's go!",
//     logo: "",
//     startTime: "09.12.2017 9:00",
//     duration: 3,
//     // нужна единица измеренич времени
//     price: 150,
//     // нужна валюта
//     owner: {}, // а может только id?
//     groups: [],
//     members: []
//   }],
//   friendList: {}
//
// };