import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John',
      surname: 'Smith',
    };
  }

  handleClick() {
    localStorage.removeItem('user');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        Hello, {this.state.name} {this.state.surname} <br />

        <Button variant="contained" color="primary" onClick={event => this.handleClick(event)}>
          Log Out
        </Button>
      </div>
    );
  }
}

export default withRouter(Profile);
