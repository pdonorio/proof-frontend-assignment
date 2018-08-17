import React, { Component } from 'react';
import axios from 'axios';
import VerificationComponent from '../components/VerificationComponent';

class VerificationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      errors: '',
    };
  }

  async componentWillMount() {
    try {
      const activationToken = this.props.location.search.split('=')[1];
      const response = await axios.put(`http://localhost:8080/auth/profile/activate/${activationToken}`);
      if (response.data && response.data.Response.data) {
        const message = response.data.Response.data;
        this.setState({ message });
      }
    } catch (e) {
      this.setState({ errors: e.response.data.Response.errors[0] });
    }
  }

  render() {
    return (
      <VerificationComponent {...this.state} />
    );
  }
}

export default VerificationContainer;
