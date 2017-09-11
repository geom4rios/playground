var express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();

    console.log("IN DEV MODE");
    console.log(process.env.FIREBASE_API_KEY);

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