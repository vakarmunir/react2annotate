import AnnotatorLib from './AnnotatorLib';

export default class Annotate{
  constructor(props){
    this.annotatorLib = new AnnotatorLib();
    let mapAnnotationEventsToDispatch = ['onAddedAnnotation','onDeletedAnnotation','onUpdatedAnnotation'];
    mapAnnotationEventsToDispatch.map((event) => {
      return this.annotatorLib[event] = props[event];
    });
                     
  }
  setContentContainer = (annotationContainer) => {
    this.annotatorLib.annotationContainer = annotationContainer;
  }
  start = () => {    
    this.annotatorLib.start();
  }
}