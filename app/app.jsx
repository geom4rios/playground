import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//get redux functinality
import * as actions from 'actions';
var store = require('configureStore').configure();

store.getState();


// App scss
require('applicationStyles');

//load jquery
require('jquery');

//load popper.js (bootstrap prerequisitie)
require('popperJS');

//load bootstrap
require('bootstrapStyle');
require('bootstrapJs');

import Main from 'Main';
import Home from 'Home';
import About from 'About';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
