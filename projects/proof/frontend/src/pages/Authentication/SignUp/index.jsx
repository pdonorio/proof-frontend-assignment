import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import signUpAction from './actions';
import { initialState } from './reducer';
import CONSTANTS from '../../../modules/constants';
import Form from './Form';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      errorMessage: '',
    };

    this.setField = this.setField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  static getDerivedStateFromProps(props) {
    const { isFetching, success } = props;
    if (!isFetching && success === true) {
      props.history.push(CONSTANTS.ROUTES.VALIDATE_EMAIL);
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
    const {
      email,
      name,
      surname,
      password,
    } = this.state;

    if (!email || !name || !surname || !password) {
      this.setState({
        errorMessage: 'Please provide all fields to continue!',
      });
      return;
    }
    this.props.signUpAction(this.state);
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
  signUpAction: data => signUpAction(data),
}, dispatch);

const mapStateToProps = ({ SignUpReducer }) => ({ ...SignUpReducer });

SignUp.propTypes = {
  signUpAction: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  data: PropTypes.string,
};

SignUp.defaultProps = { ...initialState };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
