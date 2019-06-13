import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        username: 'chance',
        password: 'pass',
    };

    render() {
        return (
            <>
            <h1>Login</h1>
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor="Username">Username</label>
                    <input 
                        type = 'text'
                        name = 'username'
                        value = {this.state.username}
                        onChange = {this.handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor = "Password">Password</label>
                    <input 
                        type = 'password'
                        name = 'password'
                        value = {this.state.password}
                        onChange = {this.handleChanges}
                    />
                </div>
                <div>
                    <button type = 'submit'>Login</button>
                </div>
            </form>
            </>
        )
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:5000/api/auth/login';
        axios
        .post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt',res.data.token);
        })
        .catch(err => {
            console.log(err)
        })
    }
}