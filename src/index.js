import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store/store';

store.dispatch({type:"RENDER"});

store.subscribe( () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

