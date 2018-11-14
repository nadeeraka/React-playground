import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import Contact from './playground/bred';
//import Test from './playground/test';
//import VtApp from './playground/vt';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<VtApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
