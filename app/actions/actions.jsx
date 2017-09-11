import moment from 'moment';
import * as firebaseApi from 'firebaseApi';

export var addCounter = () => {
    return {
        type: 'ADD_COUNTER'
    }
};

export var changeLanguageEN = () => {
    return {
        type: 'CHANGE_LANGUAGE_EN'
    }
};

export var changeLanguageGR = () => {
    return {
        type: 'CHANGE_LANGUAGE_GR'
    }
};

export var startSignInUser = () => {

    return (dispatch, getState) => {
        var email = "geom4rios.dev@gmail.com";
        var password = "pass1234";

        firebaseApi.firebaseRef.signInWithEmailAndPassword(email, password);
        var user = firebaseApi.firebaseRef.currentUser;

        if (user) {
            // User is signed in.
            return dispatch(signInUser());
        } else {
            // No user is signed in
            console.log("NOT SIGNED IN");
        }

    }
};

export var signInUser = () => {
    return {
        type: 'SIGN_IN'
    }
};

export var startSignOutUser = () => {

    return (dispatch, getState) => {


        var user = firebaseApi.firebaseRef.signOut();

console.log(user);
        if (user) {
            // User is signed in.
            return dispatch(signOutUser());
        } else {
            // No user is signed in
            console.log("NOT SIGNED OUT");
        }

    }
}

export var signOutUser = () => {
    return {
        type: 'SIGN_OUT'
    }
};


