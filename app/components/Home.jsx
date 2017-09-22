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

        this.state = {
            imagesArray: []
        };

        this.showUser = this.showUser.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.handleFileSumit = this.handleFileSumit.bind(this);
    };

    handleFileSumit(e) {
        e.preventDefault();

        var {dispatch} = this.props;

        var max_num_files_allowed = 3;

        var ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];

        if (this.state.imagesArray.length > 0) {
            Array.from(this.state.imagesArray).forEach(file => {
                var fileType = file["type"];

                if (ValidImageTypes.includes(fileType)) {
                    console.log("Will start uploading " + file.filename);
                    dispatch(actions.startFileUpload(file));
                } else {
                    alert("Sorry " + fileType + " is not allowed");
                }
            });
        }
    }

    handleFiles(e) {
        var {dispatch} = this.props;

        var upFiles = e.target.files;

        Array.from(upFiles).forEach(file => {
            var tempFiles = this.state.imagesArray;

            tempFiles.push(file);
            this.setState({
                imagesArray: tempFiles
            });
        });

        console.log(this.state.imagesArray);

    }

    showUser() {

        var {dispatch} = this.props;

        var user = firebaseApi.firebaseRef.currentUser;

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

                <form method="post" encType="multipart/form-data" action="/upload">
                    <input type="file" name="profile" />
                    <input type="submit" value="Submit with multer" />
                </form>

                <hr />

                <form onSubmit={this.handleFileSumit}>
                    <input type="file" id="input" multiple onChange={this.handleFiles} />
                    <input type="submit" value="Upload files to firebase" />
                </form>

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