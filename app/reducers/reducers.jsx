var uuid = require('node-uuid');
var moment = require('moment');

import * as actions from 'actions';


export var counterReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + 1;
        default:
            return state;
    };
};