import React from 'react';

class FormPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  firstName : "Hello",
                      lastName  : "World" };
                     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
          <h2>Form Post</h2>
          <form onSubmit={this.handleSubmit}>                
            <input name="firstName" placeholder="First Name" type="text" value={this.state.firstName} onChange={this.handleChange} />       
            <input name="lastName" placeholder="Last Name" type="text" value={this.state.lastName} onChange={this.handleChange} />                     <input type="submit" value="Submit Form" />
          </form>
         </div>
      );
    }
}

export default FormPost;
  