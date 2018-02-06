import React from 'react';

class FormPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  firstName : "Hello",
                      lastName  : "World" };
    }
  
    handleChange(event) {
      if (event.target.name === "lastName") {
        this.setState({"lastName" : event.target.value});
      }
      else if (event.target.name === "firstName") {
        this.setState({"firstName" : event.target.value});
      }   
    }
  
    handleSubmit(event) {
      alert('A form was submitted: ' + this.state.firstName + this.state.lastName);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <h2>Form POST</h2>            
          <p>Pass a method from Parent to Child; Child can invoke the method to pass messages.</p> 
          {/* Use arrow syntax to preserve scope; otherwise when onSubmit(), etc... is invoked it won't be in the right context. */}               
          <form onSubmit={(e) => this.handleSubmit(e)}>                
            <input name="firstName" placeholder="First Name" type="text" value={this.state.firstName} onChange={(e) => this.handleChange(e)} />       
            <input name="lastName" placeholder="Last Name" type="text" value={this.state.lastName} onChange={(e) => this.handleChange(e)} />       
            <input type="submit" value="Submit Form" />
          </form>
         </div>
      );
    }
}

export default FormPost;
  