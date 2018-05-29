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

console.log("here!");

    let profileService = new ProfileService();

    profileService.getUser().then(user => {
        this.setState({ "user" : user});
    });
  
  }

  render() {
    return (
      <Router>

      <div className="App">
        
        <header className="App-header">Header</header>

        <nav className="App-nav">
            <div>
              <ul>
                <li>
                  <span class="glyphicon glyphicon-dashboard"></span>                  
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
        </nav>        

        <main className="App-main"> 
            <Switch>
              <Route exact path="/" component={() => <Dashboard user={this.state.user} />} />              
              <Route path="/accounts" component={Accounts} />        
              <Route path="/mobile" component={Mobile} />        
              <Route path="/bills" component={Bills} />        
              <Route path="/complaints" component={Complaints} />        
              <Route path="/customerCare" component={CustomerCare} />        
            </Switch>                        
        </main>
      </div>

      </Router>
    );
  }
}

export default App;
