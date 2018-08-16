import { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, ListItemIcon, Typography, TextField, FormLabel } from '@material-ui/core';
import { Schedule, PlayCircleFilled } from '@material-ui/icons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import './RegisterForm.css';

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

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
    };
  }

  handleClick() {
    const authBase = 'http://localhost:8080/auth/';
    const payload = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      surname: this.state.surname,
    };
    axios.post(`${authBase}profile`, payload)
      .then((response) => {
        if (response.status === 200) {
          alert('An email has been sent to your email address to activate your account');
          console.log(200);
        } else if (response.status === 401) {
          alert('Sorry, this account has not been activated');
        } else {
          alert('Incorrect username/password');
        }
      })
      .catch((error) => {
        console.log(error);
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
          <TextField
            placeholder="Name"
            id="name-input"
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          /><br />
          <TextField
            placeholder="Surname"
            id="surname-input"
            type="text"
            onChange={e => this.setState({ surname: e.target.value })}
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
              Sign Up
            </Button>
          </MuiThemeProvider>
          <NavLink
            to="/login"
            style={{
              textDecoration: 'none',
              color: '#758189',
              fontSize: '12px',
              marginLeft: '20px',
            }}
          >
            Log In
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

export default withRouter(RegisterForm);
