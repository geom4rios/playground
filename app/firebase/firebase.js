var firebase = require('firebase');

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
        console.log(email + " just signed in");
        // ...
    } else {
        // User is signed out.
        // ...
        console.log("user just signed out");
    }
});


/*export var createNewUser = function (email, password) {
    this.firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

    });
}


export var signInUser = function (email, password) {
    this.firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}


*/

/*
var user = firebase.auth().currentUser;

if(user) {
    user.updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function () {
        // Update successful.
        console.log("update succesfull");
    }).catch(function (error) {
        // An error happened.
        console.log("unable to update the user");
    });
} else {
    console.log("user is not signed in");
}
*/





