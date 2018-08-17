/* eslint-disable */
import { Component } from 'react';
import { PropTypes } from 'prop-types';

import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = (event) => {
      if (event.which === 13) {
        this.handleSubmit(event);
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.props.onInputChange({ [name]: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <Input
          disableUnderline={true}
          className={this.props.type === 'register' ? '' : 'hidden'}
          type="text"
          name="name"
          placeholder="First name"
          value={this.props.name}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <Input
          disableUnderline={true}
          className={this.props.type === 'register' ? '' : 'hidden'}
          type="text"
          name="surname"
          placeholder="Last name"
          value={this.props.surname}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <Input
          disableUnderline={true}
          type="text"
          name="email"
          placeholder="Email"
          value={this.props.email}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <Input
          disableUnderline={true}
          type="password"
          name="password"
          placeholder="Password"
          value={this.props.password}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </form>
    );
  }
}

Register.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

Register.defaultProps = {
  type: 'register',
};

export default withStyles(styles)(Register);
