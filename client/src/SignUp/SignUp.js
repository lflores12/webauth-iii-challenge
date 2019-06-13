import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        department: ''
    };

    render() {
        return (
            <>
            <h1>Sign Up</h1>
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor="Username">Username</label>
                    <input 
                        type = 'text'
                        name = 'username'
                        value = {this.state.username}
                        onChange = {this.handleChanges}
                        placeholder= 'username'
                    />
                </div>
                <div>
                    <label htmlFor = "Password">Password</label>
                    <input 
                        type = 'password'
                        name = 'password'
                        value = {this.state.password}
                        onChange = {this.handleChanges}
                        placeholder = 'password'
                    />
                </div>
                <div>
                    <label htmlFor = "Department">Department</label>
                    <input 
                        type = 'text'
                        name = 'department'
                        value = {this.state.department}
                        onChange = {this.handleChanges}
                        placeholder = 'department'
                    />
                </div>
                <div>
                    <button type = 'submit'>Sign Up</button>
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
        const endpoint = 'http://localhost:5000/api/auth/register';
        axios
        .post(endpoint, this.state)
        .then(res => {
            console.log(res)
            this.props.history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }
}