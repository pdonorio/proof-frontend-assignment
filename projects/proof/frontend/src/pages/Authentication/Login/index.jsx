import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Form from './Form';
import loginAction from './actions';
import { initialState } from './reducer';
import CONSTANTS from '../../../modules/constants';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
    this.setField = this.setField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  static getDerivedStateFromProps(props) {
    const { isFetching, success } = props;
    if (!isFetching && success === true) {
      props.history.push(CONSTANTS.ROUTES.PROFILE);
    }
    return null;
  }

  /**
   * @param {*} e
   * where e is the element that we are trying to store it's fields data,
   * the field will contain the name of state as id. This is so we don't
   * have multiple setfields for each.
   */
  setField({ currentTarget }) {
    const state = {};
    Object.assign(state, this.state);
    state[currentTarget.id] = currentTarget.value;
    this.setState(state);
  }

  submitForm(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ errorMessage: 'Please provide all fields!' });
    } else {
      this.props.loginAction(this.state);
    }
  }

  render = () => (
    <React.Fragment>
      <Form
        setField={this.setField}
        {...this.state}
        loading={this.props.isFetching}
        submitForm={this.submitForm}
      />
      <Snackbar
        anchorOrigin={CONSTANTS.SNACKBAR.ORIGIN}
        open={this.props.data != null}
        autoHideDuration={CONSTANTS.SNACKBAR.TIMEOUT}
        message={<span id="message-id">{this.props.data}</span>}
      />
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginAction: data => loginAction(data),
}, dispatch);

const mapStateToProps = ({ LoginReducer }) => ({ ...LoginReducer });

Login.propTypes = {
  loginAction: PropTypes.func,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  data: PropTypes.string,
};

Login.defaultProps = { ...initialState };

export { Login as PureLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
