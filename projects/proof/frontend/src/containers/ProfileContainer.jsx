import React, { Component } from 'react';
import axios from 'axios';
import ProfileComponent from '../components/ProfileComponent';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: '', surname: '', email: '' },
      errors: '',
    };
  }

  async componentWillMount() {
    try {
      if (!localStorage.getItem('token')) {
        this.props.history.push('/');
      } else {
        const response = await axios.get('http://localhost:8080/auth/profile', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        if (response.data && response.data.Response.data) {
          const { name, surname, email } = response.data.Response.data;
          this.setState({
            user: {
              ...this.state.user, name, surname, email,
            },
          });
        }
      }
    } catch (e) {
      this.setState({ errors: e.response.data.Response.errors[0] });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <ProfileComponent {...this.state} handleLogout={this.handleLogout} />
    );
  }
}

export default ProfileContainer;
