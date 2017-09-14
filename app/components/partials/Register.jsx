import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registerEmail: '',
            registerPassword1: '',
            registerPassword2: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var {dispatch} = this.props;

        //console.log(this.state);

        if (this.state.registerPassword1 != this.state.registerPassword2) {
            alert("Passwords don't match");
        } else {
            var email = this.state.registerEmail;
            var password = this.state.registerPassword1;

            dispatch(actions.registerUser(email, password));
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="registerEmail" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="registerPassword1" onChange={this.handleInputChange} className="form-control"  id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Verify Password</label>
                        <input type="password" name="registerPassword2" onChange={this.handleInputChange} className="form-control"  id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit">
                        Register
                    </button>
                </form>
            </div>
        )

    };

};

export default Redux.connect()(Register);