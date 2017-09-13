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

export var startSignInUser = (loginEmail, loginPass) => {

    return (dispatch, getState) => {
        var email = loginEmail;
        var password = loginPass;
        var falsePassword = false;

        firebaseApi.firebaseRef.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
            falsePassword = true;
        }).then(
            function() {
                console.log("coming in then anyway");
                if(falsePassword) {
                    return -1;
                } else {
                    return dispatch(signInUser());
                }
            }
        );
    }
};

export var signInUser = () => {
    return {
        type: 'SIGN_IN'
    }
};

export var startSignOutUser = () => {

    return (dispatch, getState) => {
        firebaseApi.firebaseRef.signOut().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        }).then(
            function() {
                return dispatch(signOutUser());
            }
        );
    }
};

export var signOutUser = () => {
    return {
        type: 'SIGN_OUT'
    }
};


