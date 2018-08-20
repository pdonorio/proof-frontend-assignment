import { Component } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MasterLayout from '../layouts/MasterLayout';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInformation: null,
  };

  componentDidCatch() {
    this.setState({ hasError: true, errorInformation: 'An Error occurred!' });
  }

  errorDisplay() {
    return (
      <MasterLayout>
        <div className="centered-container">
          <h1>{this.state.errorInformation}</h1>;
        </div>
      </MasterLayout>
    );
  }

  routesDisplay() {
    return (
      <Switch>
        {this.props.children}
      </Switch>
    );
  }

  render() {
    return this.state.hasError ? this.errorDisplay() : this.routesDisplay();
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
