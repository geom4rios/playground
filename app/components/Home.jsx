import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import * as firebaseApi from 'firebaseApi';
import Login from 'partials/Login';
import Register from 'partials/Register';
import DeleteUser from 'partials/DeleteUser';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.showUser = this.showUser.bind(this);
    };

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

                <h3> Login Form </h3>
                {this.showUser()}

                <hr />

                <h3> Register Form </h3>

                <Register />

                <hr />

                <DeleteUser />

                <hr />



            </div>
        );
    }
}


export default connect(
    (state) => {
        return state;
    }
)(Home);