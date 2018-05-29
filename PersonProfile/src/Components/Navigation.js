import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => (    
  <div>  
    <Router>
      <div>
        <ul>
          <li>
            Test
            <Link to="/">My Dashboard</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/mobile">Mobile</Link>
          </li>
          <li>
            <Link to="/bills">Bills</Link>
          </li>          
          <li>
            <Link to="/complaints">Complaints</Link>
          </li>                    
          <li>
            <Link to="/customerCare">Customer Care</Link>
          </li>                              
        </ul>               
      </div>
  </Router>   
  </div>
  )

  export default Navigation;
