import * as redux from 'redux';
import thunk from 'redux-thunk';

import {counterReducer} from 'reducers';

export var configure = (initialState = {counter: 0}) => {
    var reducer = redux.combineReducers({
        counter: counterReducer,
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};



