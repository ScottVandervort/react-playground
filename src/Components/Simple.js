import React from 'react';

function Simple ( props ) {
    return (
        <div class="components.simple">
            <h2>Simple</h2>            
            <p>The most simple example of a component - is a function. Props is sent in from parent.</p>
            <span>Prop: {props.myProp}</span>
        </div>
    );
}

export default Simple;