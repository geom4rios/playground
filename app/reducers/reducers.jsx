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

export var languageReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE_EN':
            var language = {marios: 'MARIOS'}
            return language;
        case 'CHANGE_LANGUAGE_GR':
            var language = {marios: 'Μάριος'}
            return language;
        default:
            return state;
    };

};

export var userReducer = (state = '', action) => {
    switch(action.type) {
        case 'SIGN_IN':
            var user = {signedIn: true};
            return user;
        case 'SIGN_OUT':
            var user = {signIn: false};
            return user;
        default:
            return state;
    };
};

