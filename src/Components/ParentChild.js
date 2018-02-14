import React from 'react';

class ParentChild extends React.Component {
  
    render() {
      return (
        <div>
          <h3>Parent-Child Nested Components</h3>  
          <p>Can inject a react component (child) into another (parent) using angle-brackets - like any other HTML element.</p>
          <ParentChildChild/>
        </div>
      );
    }    
    
  }
    
  class ParentChildChild extends React.Component {
    render() {
      return (
        <div>
          I'm the Child
        </div>
      );
    }     
  }

  export default ParentChild;