var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App scss
require('style!css!sass!applicationStyles');

//load bootstrap
require('bootstrapStyle');

var Main = require('Main');
var Home = require('Home');
var About = require('About');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute  component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
);