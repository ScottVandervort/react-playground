import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard";
import Accounts from "./Components/Accounts";
import Mobile from "./Components/Mobile";
import Bills from "./Components/Bills";
import Complaints from "./Components/Complaints";
import CustomerCare from "./Components/CustomerCare";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProfileService from "./Services/ProfileService";


class App extends Component {
  
  constructor () {
    super();

    this.state = { "user" : null };
  }
  
  componentDidMount() {

    let profileService = new ProfileService();

    profileService.getUser().then(user => {
        this.setState({ "user" : user});
    });
  
  }

  render() {
    return (
      <Router>

        <div>
          <div class="container-fluid">

            <div class="row"> 

              <div class="col-sm-0 col-md-2 col-lg-1"/>

              <header class="col-sm-12 col-md-10 col-lg-11">
                My Dashboard
              </header>                               

            </div>

            <div class="row content"> 

              <nav class="side-nav col-sm-12 col-md-2 col-lg-1">
                <ul>
                  <li>
                    <span class="glyphicon glyphicon-dashboard"></span>                  
                    <Link to="/">My Dashboard</Link>
                  </li>
                  <li>
                    <span class="glyphicon glyphicon-user"></span>
                    <Link to="/accounts">Accounts</Link>
                  </li>
                  <li>
                    <span class="glyphicon glyphicon-phone"></span>
                    <Link to="/mobile">Mobile</Link>
                  </li>
                  <li>
                    <span class="glyphicon glyphicon-usd"></span>
                    <Link to="/bills">Bills</Link>
                  </li>          
                  <li>
                    <span class="glyphicon glyphicon-fire"></span>
                    <Link to="/complaints">Complaints</Link>
                  </li>                    
                  <li>
                    <span class="glyphicon glyphicon-earphone"></span>
                    <Link to="/customerCare">Customer Care</Link>
                  </li>                              
                </ul>                     
              </nav>                 

              <main class="main col-sm-12 col-md-10 col-lg-11">
                <div class="main-container">
                  <Switch>
                    <Route exact path="/" component={() => <Dashboard user={this.state.user} />} />              
                    <Route path="/accounts" component={Accounts} />        
                    <Route path="/mobile" component={Mobile} />        
                    <Route path="/bills" component={Bills} />        
                    <Route path="/complaints" component={Complaints} />        
                    <Route path="/customerCare" component={CustomerCare} />        
                  </Switch>                   
                </div>     
              </main>               

            </div>            
          </div>
          
          <div class="container-fluid">
            <div class="row"> 
              <footer>
                footer
              </footer>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
