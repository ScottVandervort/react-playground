/* TODO: 
    - What if I call method on child? Is parent invoked?
    - When parent calls method on child is it notified?
    - What about grand children?
*/

import React from 'react';

class ParentChildMessagingMethod extends React.Component {
        
    constructor(props) {
        super(props);        
        this.messages = [ "Hello", "Mars", "foo", "bar" ];
        this.messageIndex = 0;
    }      

    handleClick (e) {

        this.messageIndex++;
        if (this.messageIndex >= this.messages.length)
            this.messageIndex = 0;

        this.childComponent.sendMessage(this.messages[this.messageIndex]);      
    }      

    render() {
        return (        
            <div>                            
                <ParentChildMessagingMethodChild ref={ childComponent => { this.childComponent = childComponent; }}/>                
                <button onClick={(e) => this.handleClick(e)}>Send Message to Child</button>                   
            </div>
        );  
    }
}

class ParentChildMessagingMethodChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  myValue : "" };
      }    
    
    render() {
        return (        
            <div>
                <p>Message to Child : {this.state.myValue} </p>
            </div>
        );  
    }  

    sendMessage ( message ) {
        this.setState({"myValue" : message}); 
        return "Hello Parent!";
    }    
}

export default ParentChildMessagingMethod;