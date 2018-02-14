import React, { Component } from 'react';
import FormPost from './Components/FormPost';
import Simple from './Components/Simple';
import OneWayBinding from './Components/OneWayBinding';
import TwoWayBinding from './Components/TwoWayBinding';
import ParentChild from './Components/ParentChild';
import ParentChildMessagingProps from './Components/ParentChildMessagingProps';
import ParentChildMessagingMethod from './Components/ParentChildMessagingMethod';
import ChildParentMessagingMethod from './Components/ChildParentMessagingMethod';
import SiblingMessaging from './Components/SiblingMessaging';
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
        <h1>React Playground</h1>
        <h2>Basics</h2>
        <Simple myProp={"Hello World"}/>
        <h2>Binding</h2>
        <OneWayBinding/>
        <TwoWayBinding/>
        <h2>Form POSTS</h2>
        <FormPost/>
        <h2>Nested Components</h2>
        <ParentChild/>
        <h2>Messaging</h2>
        <ParentChildMessagingProps/>
        <ParentChildMessagingMethod/>
        <ChildParentMessagingMethod/>
        <SiblingMessaging/>
      </div>      
    );
  }
}

export default App;
