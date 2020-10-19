import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {TextField, Button} from '@material-ui/core';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    team_id: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        team_id: this.state.team_id
      }
    });
    // if (this.props.store.user.team_id === null) {
    //   this.props.history.push('/create-team');
    // }
    // else {
    //   this.props.history.push('/home');
    // }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Username"
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="team_id">
            Team ID:
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Team ID"
              type="number"
              name="team_id"
              value={this.state.team_id}
              onChange={this.handleInputChangeFor('team_id')}
            />
          </label>
        </div>
        <div>
          <Button variant="contained" className="btn" type="submit" name="submit" value="Register">Register</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegisterForm));
