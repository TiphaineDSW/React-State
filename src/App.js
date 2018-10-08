import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      working: false
    }
  }

  handleClick = () =>{
    this.setState({working: !this.state.working});
  };
  render() {
    const homerWorking = this.state.working ? "Homer travail": 'Homer ne travaille pas';
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://melbournechapter.net/images/donut-clipart-simpsons-donut-3.png" className={this.state.working ? "App-logo-speed-up" : "App-logo"} alt= "logo"/>
          
      
        </header>
        <p className="App-intro">
          {homerWorking}
        </p>
        <button onClick={this.handleClick}>Que fait Homer?</button>
      </div>
    );
  }
}

export default App;
