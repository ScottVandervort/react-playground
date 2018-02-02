import React, { Component } from 'react';
import FormPost from './Components/FormPost';
import Simple from './Components/Simple';
import OneWayBinding from './Components/OneWayBinding';
import TwoWayBinding from './Components/TwoWayBinding';
import ParentChild from './Components/ParentChild';
import ParentChildMessagingProps from './Components/ParentChildMessagingProps';
import ParentChildMessagingMethod from './Components/ParentChildMessagingMethod';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {  

  render() {
    return (
      //<div className="App">
        //<header className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h1 className="App-title">Welcome to React</h1>
        //</header>
        //<p className="App-intro">
          //To get started, edit <code>src/App.js</code> and save to reload.
        //</p>
      //</div>
      <div>         
        <Simple myProp={"Hello World"}/>
        <OneWayBinding/>
        <TwoWayBinding/>
        <FormPost/>
        <ParentChild/>
        <ParentChildMessagingProps/>
        <ParentChildMessagingMethod/>
      </div>      
    );
  }
}

export default App;
