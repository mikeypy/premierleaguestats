import React, { Component } from 'react';
import '../App.css';
import epl from '../epl-premier-league-logo.png';

//Navbar component
class Nav extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="App">
          <header className="App-header">
            <img src={epl} className="App-logo" alt="logo" />
              <h1 className="App-title">Stats</h1>
          </header>
          </div>
      </div>
    );
  }
}

export default Nav;
