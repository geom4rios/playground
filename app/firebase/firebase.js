var firebase = require('firebase');

/* Initialize Firebase
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};*/

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


/*firebaseApi.firebaseRef.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email + " just signed in");
        console.log("going to call dispatch");
        store.dispatch(actions.signInUser);
    } else {
        // User is signed out
        console.log("user just signed out");
    }
});*/



