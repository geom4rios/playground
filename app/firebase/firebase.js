var firebase = require('firebase');
import {store} from 'configureStore';
import * as actions from 'actions';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDcSoxWZAfq5zgelkdFsCRiMdjn1m_ZSPU",
    authDomain: "playground-b2740.firebaseapp.com",
    databaseURL: "https://playground-b2740.firebaseio.com",
    projectId: "playground-b2740",
    storageBucket: "playground-b2740.appspot.com",
    messagingSenderId: "143853100214"
};

firebase.initializeApp(config);
export var firebaseRef = firebase.auth();
export var firebaseAuth = firebase.auth;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log("User just signed in");
        console.log(store.getState());
        store.dispatch(actions.signInUser());
    } else {
        console.log("User just signed out");
    }
});

