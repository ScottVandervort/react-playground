import React from 'react';

function Simple ( props ) {
    return (
        <div class="components.simple">
            <h3>Simple Component</h3>            
            <p>The most simple example of a component - is a function. Props is sent in from parent.</p>
            <span>Prop: {props.myProp}</span>
        </div>
    );
}

export default Simple;