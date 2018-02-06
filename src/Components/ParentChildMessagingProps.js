import React from 'react';
import Utilities from "../Utilities";

class ParentChildMessagingProps extends React.Component {
    
    constructor(props) {
        super(props);        

        this.state = { "message" : "" };
      }
    
      onSendMessageClick (e) {
        this.setState({"message" : Utilities.generateRandomString()});        
    }

    render() {
        return (        
            <div>
                <h2>Parent-Child Messaging using Props</h2>  
                <p>Child components can be messaged by Parent using props. If Parent modifies the prop the child is updated accordingly.</p>                                
                <button onClick={(e) => this.onSendMessageClick(e)}>Send Message to Child</button>   
                <ParentChildMessagingPropsChild message={this.state.message}/>
            </div>
        );  
    }
}

class ParentChildMessagingPropsChild extends React.Component {
    
    render() {
        return (        
            <div>
                <p>Message to Child : {this.props.message}</p>
            </div>
        );  
    }  
}

export default ParentChildMessagingProps;