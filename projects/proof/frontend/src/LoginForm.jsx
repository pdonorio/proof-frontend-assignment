import { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, ListItemIcon, Typography, TextField, FormLabel } from '@material-ui/core';
import { Schedule, PlayCircleFilled } from '@material-ui/icons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import './LoginForm.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ad9d58',
      main: '#f8e17f',
      dark: '#f9e798',
      contrastText: '#928859',
    },
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleClick() {
    const authBase = 'http://localhost:8080/auth/';
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post(`${authBase}login`, payload)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.Response.data));
          this.props.history.push('/profile');
          console.log(200);
        } else {
          alert('Unknown error');
        }
      })
      .catch((error) => {
        alert(error.response.data.Response.errors[0]);
      });
  }

  render() {
    return (
      <div>
        <FormLabel style={{ color: '#aa9e54', fontSize: '14px' }}>Let&apos;s play games in 2 hours (we&apos;ll email you)</FormLabel>
        <form>
          <TextField
            placeholder="Email"
            id="email-input"
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          /><br />
          <TextField
            placeholder="Password"
            id="password-input"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          /><br />

          <FormLabel style={{
              color: '#758189',
              fontSize: '12px',
              marginLeft: '20px',
            }}
          >
            Password rules go here
          </FormLabel><br />

          <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={event => this.handleClick(event)}>
              <PlayCircleFilled style={{ paddingRight: '5px' }} />
              Log In
            </Button>
          </MuiThemeProvider>
          <NavLink
            to="/"
            style={{
              textDecoration: 'none',
              color: '#758189',
              fontSize: '12px',
              marginLeft: '20px',
            }}
          >
            Sign Up
          </NavLink><br />
        </form>

        <br />
        <FormLabel style={{ color: '#717C85' }}>Coming up</FormLabel>

        <List>
          <ListItem>
            <ListItemIcon>
              <Schedule style={{ color: '#BBC1C4' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#BCC2C6', fontSize: '14px' }}>
                  Game name 1
                </Typography>
              }
              secondary={
                <Typography style={{ color: '#717C85', fontSize: '13px' }}>
                  Starts in 2 hours
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Schedule style={{ color: '#BBC1C4' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#BCC2C6', fontSize: '14px' }}>
                  Game name 2
                </Typography>
              }
              secondary={
                <Typography style={{ color: '#717C85', fontSize: '13px' }}>
                  Starts in 3 hours
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(LoginForm);
