import React, { Component } from 'react';
import { Route , Redirect , Switch } from 'react-router-dom';
import {Grid , Row , Col , Alert , Nav , NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AnnotationsList from './Components/Annotation/AnnotationsList';
import AnnotatableContent from './Components/AnnotatbleContent/AnnotatbleContent';

class App extends Component {

  render() {   
    return (      
        <div className="App">                
          <center><h1>React HTML / PDF Annotation</h1></center>        
          <Grid>
            <Row>    
              <Col xs={12} md={9}>
              <form>                  
                  <Nav bsStyle="pills">                    
                    <LinkContainer to="/content/html">
                      <NavItem>HTML Content</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/content/pdf">
                      <NavItem>PDF Content</NavItem>
                    </LinkContainer>                    
                  </Nav>              
                </form>                                          
              </Col>
            </Row>
            <p>&nbsp;</p>
            <Alert bsStyle="warning">
              <strong>Select Text</strong> and click <strong>Edit</strong> popup button to add annotations.
            </Alert>
            <p>&nbsp;</p>
            <Row>            
              <Col xs={12} md={9}>                                      
                  <Switch>
                    <Route path="/content/:contentType" component={AnnotatableContent} />
                    <Redirect from="/" to="/content/html" />
                  </Switch>
              </Col>
              <Col xs={6} md={3}>                                                                
                 <AnnotationsList />                                                                      
              </Col>
            </Row>
          </Grid>                
        </div>      
    );
  }
}

export default App;
