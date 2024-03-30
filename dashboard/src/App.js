import { withRouter } from 'react-router-dom';
import Routes from './routes.js';
import React, { Component, Fragment } from 'react';
import './App.css';


class App extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <Fragment>
        <div className="App">
          <Routes/>
        </div>
      </Fragment>
    );

  }
}

export default withRouter(App);