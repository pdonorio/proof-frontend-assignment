import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import profileAction from './actions';
import { initialState } from './reducer';
import './main.css';
import ProfileView from './components/ProfileView';

class Profile extends Component {
  /**
   * We call the function to load data in componentDidMount because of a double
   * repetition potential issue. The more obvious alternative could have been
   * componentWillMount but the function can get called twice for example when
   * doing SSR (Server side rendering). It gets called once on the server and
   * once on the client.
   */
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

export { Profile as PureProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
