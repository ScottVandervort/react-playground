import React from 'react';
import Utilities from "../Utilities";

class ParentChildMessagingMethod extends React.Component {
        
    constructor(props) {
        super(props);        

        this.state = {  "responseFromChild" : "" };
    }      

    onSendMessageToChild (e) {

        // Call messageFromParent() on Child.
        var responseFromChild = this.childComponent.messageFromParent(Utilities.generateRandomString());      

        this.setState({"responseFromChild" : responseFromChild}); 
    }      

    render() {
        return (        
            <div>                   
                <h2>Parent-Child Messaging using Method</h2>  
                <p>Can pass a method reference to Child from Parent. The method can then be invoked from the Parent.</p>                         
                { /* Get a reference to the Child Component. */}
                <ParentChildMessagingMethodChild ref={ childComponent => { this.childComponent = childComponent; }}/>                            
                <button onClick={(e) => this.onSendMessageToChild(e)}>Send Message to Child</button>                   
                <p>Response from Child:{this.state.responseFromChild}</p>
            </div>
        );  
    }
}

class ParentChildMessagingMethodChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  messageFromParent : "" };
      }    
    
    render() {
        return (        
            <div>
                <p>Message to Child : {this.state.messageFromParent} </p>
            </div>
        );  
    }  

    // This method is invoked by the Parent Component.
    messageFromParent ( message ) {
        this.setState({"messageFromParent" : message}); 
        return "Hello " + message;
    }    
}

export default ParentChildMessagingMethod;