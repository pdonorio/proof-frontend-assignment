import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ProfileComponent from '../components/ProfileComponent';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    if (localStorage.getItem('session')) {
      axios.get('http://localhost:8080/auth/profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('session'))}`,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.setState({ ...this.state, user: res.data.Response.data });
        }
      });
    } else {
      this.props.history.push('/login');
    }
  }

  handleLogOut = () => {
    localStorage.removeItem('session');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <ProfileComponent
          user={this.state.user}
          handleLogOut={this.handleLogOut}
        />
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

ProfileContainer.defaultProps = {
  history: {},
};

export default withRouter(ProfileContainer);
