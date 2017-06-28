var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App scss
require('style!css!sass!applicationStyles');

//load bootstrap
require('bootstrapStyle');

var Nav = require('Navigation');

ReactDOM.render(
    <Nav />,
    document.getElementById('app')
);