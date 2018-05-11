import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SimpleRouting = () => (    
  <div>  
    <h3>Simple Routing</h3>   
    <p>Click on a &lt;Link&gt; to load the appropriate component. The Component is rendered where &lt;Route&gt; is declared.</p>    
    <Router>
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
        </ul>          
        <Route exact path="/" component={Home} />        
        <Route path="/about" component={About} />        
        <Route path="/topics" component={Topics} />        
      </div>
  </Router>   
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



  export default SimpleRouting;