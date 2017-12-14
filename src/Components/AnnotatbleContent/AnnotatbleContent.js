import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pdf from '../Pdf/Pdf';
import Annotate from '../../core/Annotate/Annotate';
import * as actionTypes from '../../store/actions';
import {Panel} from 'react-bootstrap';

class AnnotatableContent extends Component{

    componentDidMount() { 
        let annotate = new Annotate(this.props);    
        annotate.setContentContainer(this.annotationContainer);
        annotate.start();    
    }

    render(){
        return(
            <Panel id="annotationContainer" ref={annotationContainer => this.annotationContainer = annotationContainer}>
                {this.props.nav ? (
                <div>
                    <div dangerouslySetInnerHTML={{ __html : this.props.htmlContent }} />                    
                </div>
                ) :
                (
                    <Pdf content={this.props.pdfUrl} />
                )}

            </Panel> 
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedAnnotation: (id, quote, text) => dispatch({type: actionTypes.ADD_ANNOTATION, annotationData: {id:id, quote: quote, text: text}}),
        onUpdatedAnnotation: (id, quote, text) => dispatch({type: actionTypes.UPDATED_ANNOTATION, annotationData: {id, quote, text}}),
        onDeletedAnnotation: (id) => dispatch({type: actionTypes.DELETE_ANNOTATION, id})
    }
};

const mapStateToProps = state => {
  return {
    annotations: state.annotation.annotations
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotatableContent);