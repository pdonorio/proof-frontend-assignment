import { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'some',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
