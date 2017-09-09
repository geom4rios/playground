import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// App scss
require('applicationStyles');

//load bootstrap
//require('bootstrapStyle');
//require('bootstrapJs');

import Main from 'Main';
import Home from 'Home';
import About from 'About';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('app')
);
