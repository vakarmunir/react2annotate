import React from 'react';

let Annotation = (props) => {    
        return (
            <div className="Annotations">                
                <center><i><h5>"{props.quote}"</h5></i></center>
                <p><strong>Comments:</strong> {props.text}</p>                 
            </div>
        );    
}

export default Annotation;