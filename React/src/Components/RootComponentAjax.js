// TODO: Root component exposes AJAX to Child Component. Child Component has button to request data. Clicking "fetch" button will list data.
// TODO: Allow user to POST using pattern.
import React from 'react';

class RootComponentAjax extends React.Component {

    constructor(props) {
        super(props);

        // AJAX data cached in root component.
        this.state = {
          data : null,
          isLoaded: false,
          error: null,
        };
    }  

    // Expose method to Child Component by which it can request data.
    getData ( args ) {        

        return fetch(  "http://localhost:3000/data/test", 
                {   method: 'GET',
                    mode: 'cors'})
            .then(res => res.json())
            .then((result) => {                                 
              
                // Store Ajax data in Root Component state.
                this.setState( 
                  { data : result.msg,
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
        // Render the Child Component with two props : One is a reference to Root getData() method. The other is the response from getData().
        return(            
            <PresentationComponent data={this.state.data} getData={(args) => this.getData(args)}/>   
        )
    }
}  

class PresentationComponent extends React.Component {
    
    loadDataClick (e) {
        // Cal getData() on the parent/root. Can send arguments ( and get a return value ) if you'd like.
        this.props.getData("nada");
    }

    render() {

        return (
        <div>            
            <h3>Root Component AJAX</h3>             
            <p>Data access and state should always be centralized. The Parent/Root Component makes the AJAX call and stores it in it's state. The state is propagated to the Child Component through props.</p>                  
            <button onClick={(e) => this.loadDataClick(e)}>Load Data</button>    
            <div>Server Response : {this.props.data}</div>
        </div>
    )}

}

export default RootComponentAjax;