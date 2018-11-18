import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './base/main.scss';

import App from './playground/App';
//import Contact from './playground/bred';
//import Test from './playground/test';
//import VtApp from './playground/vt';
//import App from './playground/ind/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<VtApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
