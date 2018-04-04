import React from 'react';

class SimpleRepeaterItem extends React.Component {
    
    constructor(props) {
        super(props);
      }  

      render() {    
          return(
          <li>{this.props.firstName}</li>
          );
      }
}

class SimpleRepeater extends React.Component {

    constructor(props) {
      super(props);
    }  

    mockData () {

        var items = [{ key : 1, firstName : 'Homer', lastName : 'Simpson'},
                    { key : 2, firstName : 'Marge', lastName : 'Simpson'},
                    { key : 3, firstName : 'Bart', lastName : 'Simpson'},
                    { key : 4, firstName : 'Lisa', lastName : 'Simpson'},
                    { key : 5, firstName : 'Maggie', lastName : 'Simpson'}];

        return items;
    }
      
    render() {

        // Use the map and ES6 (...) expander to render a list of Child Components where each list item's data is a unique property.
        var itemsAsComponents = this.mockData().map(function(item) {
            return (<SimpleRepeaterItem {...item}/>);
        })

        return (
        <div>
            <h3>Simple Repeater</h3>  
            <p>Use the map and ES6 (...) expander to render a list of Child Components where each list item's data is a unique property.</p>
            <ul>           
            {itemsAsComponents}             
            </ul>
        </div>
        );
    }
}
    
  export default SimpleRepeater;