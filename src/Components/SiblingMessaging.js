import React from 'react';
import Utilities from "../Utilities";

class SiblingMessaging extends React.Component {
     
    // This method is called on the Parent by a Child ...
    onMessageReceivedFromChild ( msg, id ) {            
        switch(id) {
            // The Parent then calls a method on the (other) Child.
            case 'a': this.childComponentB.messageFromParent( msg ); break;
            case 'b': this.childComponentA.messageFromParent( msg ); break;
        }
    };

    render() {
        return (        
            <div>                            
                {/* Use arrow syntax to preserve scope; otherwise when onMessageReceived() is invoked it won't be in the context of ChildParentMessagingMethod 

                    "ref" is used to get a reference the Child Component. This allows the Parent to call methods on it.            
                */}
                <h3>Sibiling Messaging using a Method</h3>   
                <p>The Parent Component acts like a Controller here. The Child Component calls a method on the Parent. The Parent then determines which Child sent the message and then calls a method on the "other" Child.</p>
                <SiblingMessagingChild  title="Sibling A"  
                                        ref={ childComponent => { this.childComponentA = childComponent; }}
                                        messageSiblingFunc={(msg) => this.onMessageReceivedFromChild(msg, 'a')}/>  
                <SiblingMessagingChild  title="Sibling B"                                          
                                        ref={ childComponent => { this.childComponentB = childComponent; }}
                                        messageSiblingFunc={(msg) => this.onMessageReceivedFromChild(msg, 'b')}/>                                          
            </div>
        );  
    }
}

class SiblingMessagingChild extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {  messageFromSibling : "" };
      }   

    handleClick (e) {        
        this.props.messageSiblingFunc(Utilities.generateRandomString());
    }

    // This method is invoked by the Parent Component.
    messageFromParent ( message ) {
        this.setState({"messageFromSibling" : message}); 
        return "Hello " + message;
    }       
    
    render() {
        return (        
            <div>
                <h3>{this.props.title}</h3>
                <button onClick={(e) => this.handleClick(e)}>Send Message to Sibling</button>   
                <p>Message from Sibing : {this.state.messageFromSibling} </p>
            </div>
        );  
    }  
}

export default SiblingMessaging;