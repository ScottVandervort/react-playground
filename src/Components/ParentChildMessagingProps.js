import React from 'react';

class ParentChildMessagingProps extends React.Component {
    
    constructor(props) {
        super(props);        
        this.messages = [ "Hello", "Mars", "foo", "bar" ];
        this.messageIndex = 0;
        this.state = { "message" : this.messages[this.messageIndex] };
      }
    
    handleClick (e) {

        this.messageIndex++;
        if (this.messageIndex >= this.messages.length)
            this.messageIndex = 0;

        this.setState({"message" : this.messages[this.messageIndex]});        
    }

    render() {
        return (        
            <div>
                <h2>Parent Child Messaging using Props</h2>  
                <p>Child components can be messaged by Parent using props. If Parent modifies the prop the child is updated accordingly.</p>                                
                <button onClick={(e) => this.handleClick(e)}>Send Message to Child</button>   
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