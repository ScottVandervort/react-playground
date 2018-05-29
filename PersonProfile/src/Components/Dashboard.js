import React, { Component } from 'react';

class Dashboard extends Component {

  render() {


    console.log("Bang!");
    console.log(this.props);

    return (
      <div>  
         {this.props.user ? this.props.user.gender : ""}

        I am the Dashboard Component
      </div>
    )
  }
}

export default Dashboard;
