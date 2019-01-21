var firebase = require('firebase');
import {store} from 'configureStore';
import * as actions from 'actions';

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);
export var firebaseRef = firebase.auth();
export var firebaseAuth = firebase.auth;
export var storageRef = firebase.storage().ref();

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


/*

 Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('images/myfile.txt');

var file = new File(["foo"], "app/uploads/node_mailer_bak.txt", {
    type: "text/plain",
});
mountainsRef.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
});*/

// File or Blob named mountains.jpg
/*var file = new File(["image"], "app/uploads/image.jpg", {
    type: "image/jpeg",
});

console.log(file);*/

// Create the file metadata
/*var metadata = {
    contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        /!*switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }*!/
    }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;
            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            default:
                console.log(error.code);
                break;
        }
    }, function() {
        // Upload completed successfully, now we can get the download URL
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log("download url: " + downloadURL);
    });*/

