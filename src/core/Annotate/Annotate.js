import AnnotatorLib from './AnnotatorLib';

export default class Annotate{
  constructor(props){
    this.annotatorLib = new AnnotatorLib();
    let mapAnnotationEventsToDispatch = ['onAddedAnnotation','onDeletedAnnotation','onUpdatedAnnotation'];
    mapAnnotationEventsToDispatch.map((event) => {
      return this.annotatorLib[event] = props[event];
    });
    this.annotatorLib.annotationContainer = this.annotationContainer;             
  }
  start = () => {
    this.annotatorLib.start();
  }
}