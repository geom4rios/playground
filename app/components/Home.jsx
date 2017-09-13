import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import * as firebaseApi from 'firebaseApi';
import Login from 'Login';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.showUser = this.showUser.bind(this);
        //this.handleSignIn = this.handleSignIn.bind(this);
    };

    /* handleSignIn(email,password) {
     console.log('here in handleSignIn');
     firebaseApi.firebaseRef.signInWithEmailAndPassword(email, password).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     });
     }*/

    showUser() {

        var {dispatch} = this.props;

        var user = firebaseApi.firebaseRef.currentUser;
        //var email = "geom4rios.dev@gmail.com";
        //var password="pass1234";

        if(user) {
            return (
                <div>
                    <p>Welcome + {user.email}</p>
                    <button onClick={
                        () => { dispatch(actions.startSignOutUser()); }
                    }>
                        sign out
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <Login />
                </div>
            )
        }
    }

    componentDidMoiunt

    render () {
        var {counter, language, user, dispatch} = this.props;

        return (
            <div>
                <button onClick={
                    () => {dispatch(actions.addCounter());}
                }>
                    Click
                </button>
                <p>{counter}</p>
                <hr />

                <h1>{language.marios}</h1>

                <button onClick={
                    () => dispatch(actions.changeLanguageEN())
                }>
                    Change Language to English
                </button>
                <button onClick={
                    () => dispatch(actions.changeLanguageGR())
                }>
                    Change Language to Greek
                </button>

                <hr />

                {this.showUser()}

            </div>
        );
    }
}


export default connect(
    (state) => {
        return state;
    }
)(Home);