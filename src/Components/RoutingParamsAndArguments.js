import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RoutingParamsAndArguments = () => (    
  <div>  
    <h3>Routing Parameters and Arguments</h3>   
    <p>Route data can be passed to the Component using the &lt;Route&gt; "render" property and passing props object.</p>        
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/topics/A">Topic A</Link>
          </li>          
          <li>
            <Link to="/topics/B">Topic B</Link>
          </li>          
          <li>
            <Link to="/topics/C">Topic C</Link>
          </li>                              
        </ul>
             
        <Route exact path="/topics" component={Topics} />        
        <Route exact path='/topics/:id' render={(props) => ( <SpecificTopic title="Welcome to Topic" {...props} /> )}/>      
      </div>
  </Router>   
  </div>
  )

 const SpecificTopic = (props) => (
   <div>      
      {console.log(props)}

      <span>{props.title} path:  {props.match.url}</span>
    </div>
 )

  const Topics = () => (
    <span>Welcome to Topics</span>
  )



  export default RoutingParamsAndArguments;