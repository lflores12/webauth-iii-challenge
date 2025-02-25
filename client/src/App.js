import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import Login from './login/Login';
import UserList from './users/UserList';
import SignUp from './SignUp/SignUp';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to = '/signup'>Sign Up</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
          <Route path = '/signup' component ={SignUp} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  };
}

export default withRouter(App);
