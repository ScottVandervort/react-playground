import React from 'react';

class OneWayBinding extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  myValue : "Something" };
    }
    
    handleClick (e) {
      this.setState({"myValue" : "Something else"});        
    }
    
    render() {
      return (
        <div>
          <h2>One Way Binding</h2>            
           <p>Without an onChange() event on the input the field becomes read-only; If the state changes the input is refreshed. Changes to the input however do not update the state.</p>
          <input name="myField" type="text" value={this.state.myValue} />       
          <button onClick={(e) => this.handleClick(e)}>Change State</button>        
        </div>
      );
    }    
  }

  export default OneWayBinding;