import * as redux from 'redux';
import thunk from 'redux-thunk';

import {counterReducer, languageReducer, userReducer} from 'reducers';


var user = {
    signedIn: false
}

var init = {
    counter: 0,
    language: {marios: 'marios'},
    user: user
}

export var configure = (initialState = {counter: 0, language: {marios: 'marios'}}) => {
    var reducer = redux.combineReducers({
        counter: counterReducer,
        language: languageReducer,
        user: userReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};



