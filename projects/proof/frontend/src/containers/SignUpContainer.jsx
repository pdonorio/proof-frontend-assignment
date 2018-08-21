import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SignUpComponent from '../components/SignUpComponent';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        name: '',
        surname: '',
      },
      error: null,
    };

    if (localStorage.getItem('session')) {
      this.props.history.push('/profile');
    }
  }

  handleChange = (key, value) => {
    this.setState({ ...this.state, user: { ...this.state.user, [key]: value } });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/auth/profile', this.state.user)
      .then(() => {
        this.props.history.push('/login');
      })
      .catch((res) => {
        if (res.response && res.response.data && res.response.data.Response.errors[0]) {
          this.setState({ error: res.response.data.Response.errors[0] });
        }
      });
  }

  render() {
    return (
      <div>
        <SignUpComponent
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
        />
      </div>
    );
  }
}

SignUpContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

SignUpContainer.defaultProps = {
  history: {},
};

export default SignUpContainer;
