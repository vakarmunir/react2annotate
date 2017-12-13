import React, {Component} from 'react';
import {Panel , Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import Annotation from './Annotation';

class AnnotationsList extends Component {
    render(){
        return (
            <div className="Annotations">                
                <Panel header="Annotations" bsStyle="primary">              
                {this.props.annotations.map(annotation => (
                    <Well key={annotation.id}>                       
                        <Annotation key={annotation.id} quote={annotation.quote} text={annotation.text}/>  
                    </Well>                  
                ))}              
                </Panel> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        annotations : state.annotation.annotations
    };
};

export default connect(mapStateToProps)(AnnotationsList);
