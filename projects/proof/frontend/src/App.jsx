import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import logo from '../img/logo.png';
import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    email: "",
    password: "",
  };

  validateForm() {
    return true || this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    console.log(this.state);

    fetch('http://localhost:8080/auth/login', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        "username": this.state.email,
        "password": this.state.password
      }
    });
  }

  handleTextFieldChange(e) {
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <img className="proof-logo" src={logo} alt="logo" />

          <ul className="list">
            <li>
              <h5>Start with 100 points</h5>
              <p>Start each game with 100 free points</p>
            </li>
            <li>
              <h5>Is it Mostly True or Mostly False?</h5>
              <p>Don&apos;t forget to make up your mind before the timer runs out.</p>
            </li>
            <li>
              <h5>Wager and win</h5>
              <p>The more you wager, the more you can win (or lose!)</p>
            </li>
            <li>
              <h5>The top 1% win Proof Rewards!</h5>
              <p>Play more, collect points and become the richest 1%</p>
            </li>
          </ul>
          <a className="link-learn-more" href="/learn-more">Learn more</a>
        </div>
        <div className="sidebar">
          <div className="avatar" />
          <h3>Let&apos;s play games in 2 hours (we&apos;ll email you)</h3>
          <form onSubmit={this.handleSubmit.bind(this)} >
            <TextField
              id="email"
              className="login-field"
              hintText="Enter your Username"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleTextFieldChange.bind(this)}
            />
            <br />
            <TextField
              id="password"
              className="login-field"
              type="password"
              hintText="Enter your Password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleTextFieldChange.bind(this)}
            />
            <br />
            <Button id="btn-signup" type="submit" variant="contained" className="btn-primary" disabled={!this.validateForm()}>
              <PlayIcon />
              Sign up
            </Button>
            <Button id="btn-login" variant="contained" className="btn-link" disabled={!this.validateForm()} >
              Log In
            </Button>
          </form>

          <h4>Coming up</h4>
          <ul className="list">
            <li>
              <h5>Game name 1</h5>
              <p>Starts in 2 hours</p>
            </li>
            <li>
              <h5>Game name 2</h5>
              <p>Starts in 4 hours</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
