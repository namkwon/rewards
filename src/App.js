import React, { Component } from 'react';
import Header from './components/Header/Header';
import Rewards from './containers/Rewards/Rewards';
import oval2 from './images/05b_select_crypto_the_keg_1oval_2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="bg">
              <img src={oval2} className="oval2" alt="background"/>
          </div>
          <Header />
        </div>
        <Rewards />
      </div>
    );
  }
}

export default App;
