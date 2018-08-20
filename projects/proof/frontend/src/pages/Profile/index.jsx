import React, { Component } from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import profileAction from './actions';
import { initialState } from './reducer';
// import CONSTANTS from '../../modules/constants';
import './main.css';
import ProfileView from './components/ProfileView';

class Profile extends Component {
  componentDidMount() {
    this.props.profileAction();
  }

  render = () => <ProfileView isLoading={this.props.isFetching} {...this.props.data} />
}

const mapDispatchToProps = dispatch => bindActionCreators({
  profileAction: data => profileAction(data),
}, dispatch);

const mapStateToProps = ({ ProfileReducer }) => ({ ...ProfileReducer });

Profile.propTypes = {
  profileAction: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  data: PropTypes.shape(),
};

Profile.defaultProps = { ...initialState };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
