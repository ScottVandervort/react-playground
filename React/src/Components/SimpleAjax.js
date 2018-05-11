import React from 'react';

class SimpleAjax extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        messageFromServer : null,
        isLoaded: false,
        error: null,
      };
    }  
  
    componentDidMount() {        

        fetch(  "http://localhost:3000/data/test", 
                {   method: 'POST',
                    mode: 'cors'})
            .then(res => res.json())
            .then((result) => {                                 
              
              this.setState( 
                  { messageFromServer : result.msg,
                    isLoaded : true } );                                    
              },        
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              })              
        }


        render() {
          const { error, isLoaded, messageFromServer } = this.state;

          var title = "Simple AJAX";
          var desc = "This example does a cross-domain POST using CORS and the HTML5 has a fetch() method. ES6 => is used to preserve the context of the component after the asynchronous AJAX call returns. The component's state is set and rendered thereafter. This is actually a BAD pattern in that the presentation and data access are combined.";

          if (error) {                                
            return (
              <div> 
                <h3>{title}</h3>             
                <p>{desc}</p>
                <div>Error: {error.message}</div>
              </div>);
          } else if (!isLoaded) {
            return (
              <div>
                <h3>{title}</h3>             
                <p>{desc}</p>                
                <div>Loading...</div>
            </div>);
          } else {
            return (
              
              <div> 
                <h3>{title}</h3>             
                <p>{desc}</p>                
                <div>Server Response : {messageFromServer}</div>
              </div>
            );
          }
        }      
  }
    
  export default SimpleAjax;