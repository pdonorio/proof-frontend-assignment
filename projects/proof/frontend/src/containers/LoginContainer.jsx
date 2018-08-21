import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        email: '',
        password: '',
      },
      error: null,
      success: null,
    };
    if (localStorage.getItem('session')) {
      this.props.history.push('/profile');
    }
  }

  componentWillMount() {
    if (this.props.history.location.search) {
      const token = this.props.history.location.search.split('=')[1];
      axios.put(`http://localhost:8080/auth/profile/activate/${token}`)
        .then((res) => {
          if (res.status === 200) {
            this.setState({ success: 'Successfully activated profile' });
          }
        }).catch((res) => {
          if (res.response && res.response.data && res.response.data.Response.errors[0]) {
            this.setState({ error: res.response.data.Response.errors[0] });
          }
        });
    }
  }

  handleChange = (key, value) => {
    this.setState({ ...this.state, auth: { ...this.state.auth, [key]: value } });
  }

  handleClose = () => {
    this.setState({ error: null, success: null });
  };


  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/auth/login', this.state.auth)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('session', JSON.stringify(res.data.Response.data.token));
          this.props.history.push('/profile');
        }
      }).catch((res) => {
        if (res.response && res.response.data && res.response.data.Response.errors[0]) {
          this.setState({ error: res.response.data.Response.errors[0] });
        }
      });
  }

  navigateSignUp = () => {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <LoginComponent
          auth={this.state.auth}
          error={this.state.error}
          success={this.state.success}
          handleChange={this.handleChange}
          navigateSignUp={this.navigateSignUp}
          handleSubmit={this.handleSubmit}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
    }),
  }),
};

LoginContainer.defaultProps = {
  history: {},
};

export default withRouter(LoginContainer);
