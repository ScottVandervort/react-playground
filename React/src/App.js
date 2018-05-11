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
import SimpleRouting from './Components/SimpleRouting';
import RoutingParamsAndArguments from './Components/RoutingParamsAndArguments';
import SimpleAjax from './Components/SimpleAjax';
import RootComponentAjax from './Components/RootComponentAjax';
import SimpleRepeater from './Components/SimpleRepeater';
import CssTransitionExpandContract from './Components/CssTransitionExpandContract';
import JQueryExpandContract from './Components/JQueryExpandContract';
//import logo from './logo.svg';
import './App.css';

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
        <h2>Routing</h2>
        <SimpleRouting/>
        <RoutingParamsAndArguments/>
        <h2>AJAX</h2>
        <SimpleAjax/>
        <RootComponentAjax/>
        <h2>Repeaters</h2>
        <SimpleRepeater/>
        <h2>Transitions and Animations</h2>
        <h3>React Transition Library</h3>
        <p>These use the <a href="https://github.com/reactjs/react-transition-group">React Transition Library</a> to integrate Css [and Javascript-based] transitions/animations. 
        A library is required because React maintains a virtual DOM - making it difficult to animate elements as they are added/removed. The library also exposes lifecycle hooks 
        whereas javascript-based solutions can be applied.</p>        
        <CssTransitionExpandContract/>        
        <h3>JQuery/Javascript Library</h3>
        <p>These use JQuery to perform Javascript-based animations. This works on older browsers that don't fully support Css.</p>                
        <JQueryExpandContract/>     
      </div>      
    );
  }
}

export default App;
