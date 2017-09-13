var express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();

    console.log("IN DEV MODE");
    console.log("FIREBASE_API_KEY: " + process.env.FIREBASE_API_KEY);
    console.log("FIREBASE_AUTH_DOMAIN: " + process.env.FIREBASE_AUTH_DOMAIN);
    console.log("FIREBASE_DATABASE_URL: " + process.env.FIREBASE_DATABASE_URL);
    console.log("FIREBASE_PROJECT_ID: " + process.env.FIREBASE_PROJECT_ID);
    console.log("FIREBASE_STORAGE_BUCKET: " + process.env.FIREBASE_STORAGE_BUCKET);
    console.log("FIREBASE_MESSAGING_SENDER_ID: " + process.env.FIREBASE_MESSAGING_SENDER_ID);
}

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});