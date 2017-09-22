import moment from 'moment';
import * as firebaseApi from 'firebaseApi';
var firebase = require('firebase');

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
                    return getState;
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

export var registerUser = (email, password) => {
    return (dispatch, getState) => {
        var status = 1;

        firebaseApi.firebaseRef.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if(errorCode) {
                alert(errorMessage);
                console.log(errorCode);
                status = 0;
            }
        }).then(
            () => {
                if(status) {
                    alert("Thank you for registering");
                }

                return getState;
            }
        );
    }
};


export var deleteUser = (email, password) => {
    return (dispatch, getState) => {
        var user = firebaseApi.firebaseRef.currentUser;

        if(user) {
            var credential;

            var credential = firebaseApi.firebaseAuth.EmailAuthProvider.credential(
                email,
                password
            );

            user.reauthenticateWithCredential(credential).then(function() {
                // User re-authenticated.
                user.delete().then(function() {
                    // User deleted.
                    alert("User deleted succesfully");
                }).catch(function(error) {
                    // An error happened.
                    alert("Unable to delete the user " + error.message);
                });

            }).catch(function(error) {
                // An error happened.
                alert("Unable to authenticate the user " + error.message);
            });
        } else {
            alert ("You need to sign in first before being able to delete the user");
        }
    }
};

export var startFileUpload = (file) => {
    return (dispatch, getState) => {

        var uploadTask = firebaseApi.storageRef.child('images/' + file.name).put(file);


        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
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
            });
    }
};