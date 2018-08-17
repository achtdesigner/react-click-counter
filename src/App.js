import React, { Component } from 'react';
import './w3.css';
import './App.css';

const containerStyle = {
  maxWidth: '200px'
};

class App extends Component {
  state = {
    count: 0
  };

  decrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div
        className="w3-container w3-content w3-padding-64"
        style={containerStyle}
      >
        <div className="w3-card w3-center w3-white w3-round w3-padding-large">
          <h3>{this.state.count}</h3>
          <button className="w3-button w3-blue" onClick={this.decrementCount}>
            -
          </button>
          <button className="w3-button w3-red" onClick={this.incrementCount}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
