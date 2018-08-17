import React, { Component } from 'react';
import axios from 'axios';
import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    };
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/profile');
    }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  handleSubmit = async () => {
    const { email, password } = this.state;
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { email, password });
      if (response.data && response.data.Response.data) {
        localStorage.setItem('token', response.data.Response.data.token);
        this.props.history.push('/profile');
      }
    } catch (e) {
      this.setState({ errors: e.response.data.Response.errors[0] });
    }
  }

  render() {
    return (
      <LoginComponent
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default LoginContainer;
