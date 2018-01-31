import React from 'react';

class TwoWayBinding extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  myValue : "Something" };
    }
  
    handleChange (e) {
      this.setState({"myValue" : e.target.value});        
    }
    
    render() {
      return (
        <div>
          <h2>Two Way Binding</h2>  
          <p>Adding an onChange() event handler to the input and updating the state allows for 2-way binding.</p>
          <input name="myField" type="text" onChange={(e) => this.handleChange(e)} value={this.state.myValue} /> 
          <p/>Value of state: <span>{this.state.myValue}</span>
        </div>
      );
    }      
  }

  export default TwoWayBinding;
  