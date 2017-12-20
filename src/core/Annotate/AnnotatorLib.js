import ReactDOM from 'react-dom';
let annotator = require('annotator');

export default class AnnotatorLib{
    constructor(){
        this.app = new annotator.App();
        this.onAddedAnnotation = null;
        this.onDeletedAnnotation = null; 
        this.onUpdatedAnnotation = null;         
        this.annotationContainer = null;
    }

    start = () => {
        this.app.include( annotator.ui.main , {element : ReactDOM.findDOMNode(this.annotationContainer)} );
        
        /**** Here we can do server-side stuff *****/
        /*this.app.include(annotator.storage.http, {
            prefix: 'http://localhost:3001/api'
        });*/
        console.log('app = ' , this.app);
        this.app.include((options) => {
            return {
                annotationCreated: (annotation) => {
                    this.onAddedAnnotation(annotation.id , annotation.quote,annotation.text);
                },
                annotationDeleted: (annotation) => {
                    this.onDeletedAnnotation(annotation.id);
                },
                annotationUpdated: (annotation) => {                
                    this.onUpdatedAnnotation(annotation.id , annotation.quote,annotation.text);
                }
            };
        });        
        
        
        this.app.start();
    }

}