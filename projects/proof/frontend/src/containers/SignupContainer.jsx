import React, { Component } from 'react';
import axios from 'axios';
import SignupComponent from '../components/SignupComponent';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      errors: '',
      message: '',
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
    const {
      name, surname, email, password,
    } = this.state;
    try {
      const response = await axios.post('http://localhost:8080/auth/profile', {
        name, surname, email, password,
      });
      if (response.data && response.data.Response.data) {
        this.setState({ errors: '', message: 'Signup successful to access profile please verify account' });
      }
    } catch (e) {
      this.setState({ errors: e.response.data.Response.errors[0], message: '' });
    }
  }

  render() {
    return (
      <SignupComponent
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default SignupContainer;
