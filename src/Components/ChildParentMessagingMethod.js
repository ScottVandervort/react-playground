import React from 'react';
import Utilities from "../Utilities";

class ChildParentMessagingMethod extends React.Component {
     
    constructor(props) {
        super(props);

        /* Cannot use state in render() until declared. */
        this.state = {  messageFromChild : "" };                    
    }

    onMessageReceived ( msg ) {        
        this.setState({"messageFromChild" : msg});
    };

    render() {
        return (        
            <div>                            
                {/* Use arrow syntax to preserve scope; otherwise when onMessageReceived() is invoked it won't be in the context of ChildParentMessagingMethod */}
                <h2>Child-to-Parent Messaging using a Method</h2>            
                <p>Pass a method from Parent to Child; Child can invoke the method to pass messages.</p>                
                <ChildParentMessagingMethodChild messageParentFunc={(msg) => this.onMessageReceived(msg)}/>                
                <p>Message from Child : { this.state.messageFromChild }</p>
            </div>
        );  
    }
}

class ChildParentMessagingMethodChild extends React.Component {
    
    handleClick (e) {        
        this.props.messageParentFunc(Utilities.generateRandomString());
    }
    
    render() {
        return (        
            <div>
                <button onClick={(e) => this.handleClick(e)}>Send Message to Parent</button>   
            </div>
        );  
    }     
}

export default ChildParentMessagingMethod;