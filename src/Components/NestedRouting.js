import React from 'react';
import { BrowserRouter as HashRouter, Switch, Router, Route, Link } from "react-router-dom";

const NestedRouting = () => (    
  <div>  
    <h3>Simple Routing</h3>   
    <p>Click on a &lt;Link&gt; to load the appropriate component. The Component is rendered where &lt;Route&gt; is declared.</p>        
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/topics/a">Topic A</Link>
          </li>          
        </ul>
        <hr />        
        <Route exact path="/" component={Home} />        
        <Route path="/about" component={About} />        
        <Route exact path="/topics" component={Topics} />        
        <Route exact path='/topics/:id' render={(match) => ( <SpecificTopic myProp="Welcome to Topic" routeInfo={match.params} /> )}/>      
      </div>
  </HashRouter>   
  </div>
  )

 const SpecificTopic = (props) => (
   <div>      
      <span>{props.myProp} {props.routeInfo==null?"nada":"something"}</span>
    </div>
 )

  const Home = () => (
    <span>Welcome to Home</span>
  )

  const About = () => (
    <span>Welcome to About</span>
  )

  const Topics = () => (
    <span>Welcome to Topics</span>
  )



  export default NestedRouting;