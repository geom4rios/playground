import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class DeleteUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteEmail: '',
            deletePassword: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var {dispatch} = this.props;

        //console.log(this.state);
        var email = this.state.deleteEmail;
        var password = this.state.deletePassword;

        dispatch(actions.deleteUser(email, password));
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
                        <input type="email" name="deleteEmail" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="deletePassword" onChange={this.handleInputChange} className="form-control"  id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit">
                        Delete User
                    </button>
                </form>
            </div>
        )

    };

};

export default Redux.connect()(DeleteUser);